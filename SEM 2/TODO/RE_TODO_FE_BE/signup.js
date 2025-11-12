const express= require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
app.use(express.json());
app.use(cors());
let db={users:[]};
db = JSON.parse(fs.readFileSync("data.json","utf-8"));

let id = 1;
app.post("/signup",(req,res)=>{
    const {username,password} = req.body;
    const data = {"username":username,"pssword":password,"id":id,todos:[]}
    db["users"].push(data);
    id++;
    fs.writeFileSync("data.json",JSON.stringify(db),(err,data)=>{});
    res.send("cred pushed")
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/signup.html");
})

app.get("/all",(req,res)=>{
    res.send(db);
})

app.post("/:id/todos",(req,res)=>{
    const id = req.params.id;
    const todo= req.body.todo;
    const person = db["users"].find(item=>item.id == id);
    person.todos.push(todo);
    fs.writeFileSync("data.json",JSON.stringify(users),(err,data)=>{});

    res.json("todo pushed successfully");
})


app.listen(3000);