const express = require('express');
const app = express();
const port = 80
const path = require('path')
const mysql = require('mysql2');

const staticPath = path.join(__dirname, 'static')
app.use(express.static(staticPath))
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/static/index.html'))
})

app.get("/membership-form", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/static/membership.html'))
})

//Connection created to the database
const contactDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '9930kunal',
    database: 'contact',

});



app.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mobile;

    const query = `INSERT INTO contacts (name, email, mobile) VALUES (?, ?, ?)`;
    const values = [name, email, mobile];

    contactDb.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting data into contacts table:', err);
            res.status(500).send('Error inserting data into contacts table');
            return;
        }
        console.log('Data inserted into contacts table:', result);
        res.status(200).redirect('/');
    });
});




const memberDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '9930kunal',
    database: 'member',

});

app.post("/membership", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const age = req.body.age;
    const gender = req.body.gender;
    const pt = req.body.pt;

    const query = `INSERT INTO newmembers (name, email, mobile, age, gender, pt) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [name, email, mobile, age, gender, pt];

    memberDb.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting data into newmembers table:', err);
            res.status(500).send('Error inserting data into newmembers table');
            return;
        }
        console.log('Data inserted into newmembers table:', result);
        res.status(200).redirect('/');
    });
});






app.listen(port, () => {
    console.log(`Server running in port ${port}`)
})



