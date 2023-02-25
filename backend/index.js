const express=require("express")
const cors=require("cors")
const User=require("./models/users")
const Recipes=require("./models/recipes")
const mongoose=require("mongoose")
const uri="mongodb+srv://Suryakant:Suryadas@cluster0.mydbwj6.mongodb.net/Recipe?retryWrites=true&w=majority"
const Jwt=require("jsonwebtoken")
const jwtKey="recipe-key"
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect(uri,(err)=>{
    if(err){
        console.log("connection failed")
    }
    else{
        console.log("connection made sucessfully")
    }
})

app.post("/signin", async (req, resp) => {
        try {
            // console.log(req.body)
            let newUser = new User(req.body)
            let result =await newUser.save()
            console.log(result)
            resp.send(result)
            result = result.toObject();
            delete result.password
            if (result) {
                Jwt.sign({result},jwtKey,{expiresIn:"1h"},(err,token)=>{
                    if(err){
                        resp.send({ result: "something went wrong" })
                    }
                    resp.send({result,auth:token})
                })
            }
            
        } catch {
            resp.status(400).json({ message: "'either name,email or password is missing'" })
        }
    })

    app.post("/login", async (req, resp) => {
            if (req.body.password && req.body.email) {
                let checkUser = await User.findOne(req.body).select("-password")
                if (checkUser) {
                    Jwt.sign({checkUser},jwtKey,{expiresIn:"1h"},(err,token)=>{
                        if(err){
                            resp.send({ result: "something went wrong" })
                        }
                        resp.send({checkUser,auth:token})
                    })
                }
               // resp.send({checkUser})
            }
            else {
                resp.send({ result: "fill all the field" })
            }
        
        })

app.listen(5000,()=>{
    console.log("app is running at port 5000")
})