const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MONGODB CONNECTED: ${conn.connection.host}`.cyan);
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}

module.exports = connectDB;