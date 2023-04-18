const express=require("express")
const app=express()
app.use(express.json())
require("./connection/connect.js")
const router=require("./router/route.js")
app.use(router)




app.get("/",(req,res)=>{
   res.send("Home").status(200)
})

app.listen(4000,(req,res)=>{
    console.log("port is running")
})