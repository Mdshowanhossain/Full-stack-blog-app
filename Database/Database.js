const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = async () => {
  await mongoose
    .connect(
      "mongodb+srv://testone:testone@cluster0.buk2o.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("connect database");
    })
    .catch((err) => console.log(err.message));
};
connectDatabase();
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("Database Connect");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
