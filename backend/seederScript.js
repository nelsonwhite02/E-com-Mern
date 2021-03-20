require("dotenv").config();

const productsData = require("./data/products");
const connectDB = require("./config/db");
const product = require("./models/product");
const products = require("./data/products");

connectDB();

const importData = async () =>{
    try {
        await product.deleteMany({});

        await product.insertMany(productsData);

        console.log("Data Import Successful");

        process.exit();
    } catch (error) {
        console.error("There is error with data import");
        process.exit(1);
    }
}
importData();