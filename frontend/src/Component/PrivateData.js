import React from "react";
import { Navigate ,Outlet } from "react-router-dom";

const PrivateComponent=()=>{
    const auth=localStorage.getItem("user")
    return(
        auth?<Outlet/>:<Navigate to="/signup"/>

    )
}
export default PrivateComponent;
// app.post("/signin", async (req, resp) => {
//     try {
//         // console.log(req.body)
//         let newUser = new User(req.body)
//         let result =await newUser.create(newUser)
//         console.log(result)
//         resp.send(result)
        // result = result.toObject();
        // delete result.password
        // if (result) {
        //     Jwt.sign({result},jwtKey,{expiresIn:"1h"},(err,token)=>{
        //         if(err){
        //             resp.send({ result: "something went wrong" })
        //         }
        //         resp.send({result,auth:token})
        //     })
        // }
        // resp.send(result)
        
//     } catch {
//         resp.status(400).json({ message: "'either name,email or password is missing'" })
//     }
// })
// app.post("/login", async (req, resp) => {
//     if (req.body.password && req.body.email) {
//         let checkUser = await User.findOne(req.body).select("-password")
//         if (checkUser) {
//             Jwt.sign({checkUser},jwtKey,{expiresIn:"1h"},(err,token)=>{
//                 if(err){
//                     resp.send({ result: "something went wrong" })
//                 }
//                 resp.send({checkUser,auth:token})
//             })
//         }
//        // resp.send({checkUser})
//     }
//     else {
//         resp.send({ result: "fill all the field" })
//     }

// })

// app.post("/addRecipes", async (req, resp) => {
//     try {
//         console.log(req.body)
//         let newRecipe = new Recipes(req.body)
//         let result = await newRecipe.save();
//         resp.send(result)
//     }
//     catch {
//         resp.status(400).json({ message: "enter a vaild Recipess" })
//     }
// })



// app.get("/recipes", async (req, resp) => {
//     try {
//         let allRecipes = await Recipes.find();
//         if (allRecipes.length > 0) {
//             resp.send(allRecipes)
//             console.log(allRecipes)
//         }
//         else {
//             resp.send({ result: "no Recipes found" })
//         }
//     }

//     catch {
//         resp.status(400).json({ message: "no Recipess found" })
//     }
// })

// app.get("/recipes/:id", async (req, resp) => {
//     try {

//         let result = await Recipes.findOne({ _id: req.params.id })
//         if (result) {
//             resp.send(result)
//         }
//         else {
//             resp.send({ result: "no record found" })
//         }
//     }
//     catch {
//         resp.status(400).json({ message: "no recipes is found" })
//     }
// })



// app.get("/search/:key",async(req,resp)=>{
//     let result=await Recipes.find(
//         {
//             "$or":[
//             ]
//         }
//     )
//     resp.send(result)
// })