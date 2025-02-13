import express from "express";

const PORT = 5000;
const app = express();

app.get('/',(req,res) => {
    res.send("Hello world");
})

app.listen(PORT,() => {
    console.log(`Server started at port : ${PORT}`)
});