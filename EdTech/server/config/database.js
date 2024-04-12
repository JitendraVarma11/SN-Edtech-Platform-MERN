const mongoose=require("mongoose");
require("dotenv").config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=> console.log("DB connected Successfully"))
    .catch((error)=>{
        console.log("DB connnection failed");
        console.error(error);
        process.exit(1);
    })   
}