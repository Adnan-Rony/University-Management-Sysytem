import app from "./app";
import config from "./app/config";

import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect(config.DATABASSE_URL as string);
    console.log("Connected to database");

    app.listen(config.port, () => {
      console.log(` app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log("Failed to connect to the database", err);
  }
}
main();
