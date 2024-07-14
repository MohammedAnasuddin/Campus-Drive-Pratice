const express = require('express');

const users = require("./MOCK_DATA.json");

const fs = require('fs');

const app = express();

const PORT = 8000;
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log("Server Started"));

app.get("/api/users", (req, res) => {
    return res.json(users);
})

app.get("/users", (req, res) => {
    const html =
        `
    <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    return res.send(html);
})

app.get("/api/users/:id", (req, res) => {
    const id = req.params.id;
    const matched_user = users.find((user) => user.id == id);
    res.json(matched_user);
})

app.post("/api/users", (req, res) => {
    const body = req.body;
    console.log("New User", body);
    // users.push({
    //     // id: body.id,
    //     first_name: body.first_name,
    //     last_name: body.last_name,
    //     email: body.email,
    //     gender: body.gender,
    //     job_title: body.job_title,
    // })
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.send(body);
    })
})

app.patch("/api/users/update/:id/:first_name",(req,res)=>{
    const id = req.params.id;
    const nameToUpdate = req.params.first_name;
    const userUpdate = users.findIndex((user) => user.id== id);
    users[userUpdate].first_name = nameToUpdate;
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data) =>{
        console.log(id," first_name has been updated to ",userUpdate.first_name);
        return res.send(nameToUpdate);
    })
})

app.delete("/api/users/delete/:id",(req,res)=>{
    const id = req.params.id;
    const userToDelete = users.findIndex((user) => user.id== id);
    users.splice(userToDelete,1);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data) =>{
        return res.send(users[userToDelete]);
    })
})
