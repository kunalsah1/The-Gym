const burger = document.querySelector(".burger")
const nav = document.querySelector("#nav-section")
const searchbar = document.querySelector(".searchbar")
const navlist = document.querySelector(".nav-list")
const logo = document.querySelector(".logo")


const Hide = () => {
    nav.classList.toggle('h-nav')
    navlist.classList.toggle('v-nav')
    // searchbar.classList.toggle('v-nav')
    logo.classList.toggle('v-nav')
}

burger.addEventListener("click", Hide);



const validateForm = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    if (name === "" || email === "" || mobile === "") {
        alert("Please fill in all fields and then press Submit")
        return false
    }

    return true

}










