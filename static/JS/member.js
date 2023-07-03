const MemberForm = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const yes = document.getElementById("yes").checked;
    const no = document.getElementById("no").checked;

    if (name === "" || email === "" || mobile === "" || age === "" || gender === "select" || (!yes && !no)) {

        alert("Please fill the form properly then press submit button");
        return false;
    }
    if (age.length !== 2) {
        alert("Age should be two-digits number")
        return false;
    }

    return true;
}