const mongoose=require("mongoose");
require("dotenv").config();

exports.connect=()=>{
<<<<<<< HEAD
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
=======
    mongoose.connect(process.env.MONGODB_URL,
                    useNewUrlParser: true,
                    useUnifiedTopology: true,)
>>>>>>> 1cd8bd7b2fa4b69fd92baf2430708a1e197bd4cc
    .then(()=> console.log("DB connected Successfully"))
    .catch((error)=>{
        console.log("DB connnection failed");
        console.error(error);
        process.exit(1);
    })   
}
