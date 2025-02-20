const name1 = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const issue = document.getElementById("issue").value;
const address = document.getElementById("address").value;

document
    .getElementById("sub")
    .addEventListener("click", () => {
        alert(
            "Name: " +
            name1 +
            "/n Mobile Number: " +
            phone +
            "/n Issue: " +
            issue +
            "/n Address: " +
            address
        )
    });