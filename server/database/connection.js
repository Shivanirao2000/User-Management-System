const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect("mongodb+srv://shivani:crud_app@cluster0.r6doi.mongodb.net/Crud-app?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }

    // try{
    //     mongoose.connect(process.env.MONGO_URI, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // });

    // mongoose.connection.on('connected', () => {
    //     console.log('Mongoose is connected!!!!');
    // });
    // }catch(err){
    //     console.log(err);
    //     process.exit(1);
    // }
    

}

module.exports = connectDB