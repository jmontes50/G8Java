/*
//GET
fetch('https://reqres.in/api/users?page=2')
.then((response) => {
    console.log(response);
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
*/
const user = {
    name:"Jorge",
    job:"Developer"
}

const config = {
    method:"POST",
    //
    body: JSON.stringify(user),
    headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${clave}`
    }
}

fetch("https://reqres.in/api/users", config)
.then((res) => {
    console.log(res);
    return res.json();
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})