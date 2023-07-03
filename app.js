const express = require('express');
const app = express();
const port = 80
const path = require('path')
const fs = require('fs')

const staticPath = path.join(__dirname, 'static')
app.use(express.static(staticPath))
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res)=>{
    res.status(200).sendFile(path.join(_dirname, '/static/index.html'))
})

// add more get request to solve the route handling problem

app.get("/membership-form", (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, '/static/membership.html'))
})

app.post("/contact", (req, res) => {
    name = req.body.name
    email = req.body.email
    mobile = req.body.mobile

    let outputwrite = `\nThe name of the Client is ${name}, 
    Client's Email: ${email}, 
    Client's Mobile no.: ${mobile}\n\t`
    // fs.writeFileSync --> this overwrites the data everytime a new user submits the form
    fs.appendFileSync('contact.txt', outputwrite)
    // res.status(200).sendFile(path.join(__dirname, '/static/index.html'));
    res.status(200).redirect('/')

})

app.post("/membership", (req, res) => {
    name = req.body.name
    email = req.body.email
    mobile = req.body.mobile
    age = req.body.age
    gender = req.body.gender
    pt = req.body.pt

    let member = `\nThe name of the Member is ${name}, 
    Members's Email: ${email}, 
    Members's Mobile no.: ${mobile}
    Members's Gender: ${gender}
    Do member want personal Traning :${pt}
    Members's Age.: ${age}\n\t`
    // fs.writeFileSync --> this overwrites the data everytime a new user submits the form insted of adding new user 
    fs.appendFileSync('Members.txt', member)
    // res.status(200).sendFile(path.join(__dirname, '/static/index.html'));
    res.status(200).redirect('/')

})

app.listen(port, () => {
    console.log(`Server running in port ${port}`)
})



