const express=require("express");
const app=express();

const userRoutes=require("./routes/User");
const profileRoutes=require("./routes/Profile");
const paymentRoutes=require("./routes/Payments");
const courseRoutes=require("./routes/Course");
const contactRoutes=require("./routes/Contact");

const database=require("./config/database");
const cookieParser=require("cookie-parser");
const cors=require("cors");
const {cloudinaryConnect}=require("./config/cloudinary");
const fileUpload=require("express-fileupload");
const dotenv=require("dotenv");
dotenv.config();

const PORT=process.env.PORT || 4000;

database.connect();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST'], // specify the allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // specify the allowed headers
  exposedHeaders: ['Content-Length'], // specify the headers exposed to the browser
  credentials: true, // enable credentials (cookies, authorization headers, etc.)
  maxAge: 3600 
}));

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp",
    })
)

cloudinaryConnect();

//routes
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/profile",profileRoutes);
app.use("/api/v1/course",courseRoutes);
app.use("/api/v1/payment",paymentRoutes);
app.use("/api/v1/reach",contactRoutes);

//default routes
// app.use("/",(req,res)=>{
//     return res.json({
//         success:true,
//         message:"Your app is running....",
//     })
// })


app.listen(PORT, ()=>{
    console.log(`app is running at port ${PORT}`);
});
