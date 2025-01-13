const mongoose = require("mongoose");
const connectDatabase = async () => {
    try {
        mongoose.set("strictQuery", true);
        const connection = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected successfully with server: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); 
  }
};

module.exports = connectDatabase;
