const mongoose =require('mongoose');
const connectDB = async () => {
    try{
        const con = await mongoose.connect("mongodb+srv://admin:admin123@cluster0.ml64r.mongodb.net/users?retryWrites=true&w=majority", {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("mongoDB is connected"))
//   .catch((err) => console.log(err));