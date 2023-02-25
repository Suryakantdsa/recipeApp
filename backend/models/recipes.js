const mongoose=require("mongoose")

const recipeSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    image:{
        type:String        
    },
    ingredients:{
        type:String,
        required:true 
    },
    directions:{
        type:String,
        required:true
    }

})
module.exports=mongoose.model("Recipes",recipeSchema)