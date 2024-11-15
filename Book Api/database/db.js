const mongoose = require("mongoose");

const dbConnection = async ()=>{

    try{
        await mongoose.connect("mongodb+srv://pukarrimal11:pukarrimal12@cluster0.rbszi.mongodb.net/bookapi");
        console.log("Monogodb is connected succesfully");

    }catch(error){
        console.error("Connection error occured ", error);
    }


}
module.exports = dbConnection;