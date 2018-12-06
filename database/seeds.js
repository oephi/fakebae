const faker = require("faker");
const ProductModel = require("./models/product_model");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/fakebae", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
// mongoose.connection.on("error", err => console.log(err));
mongoose.connection.on("error", console.log)

let productPromises = [];

for(let i = 0; i <= 50; i++) {
  productPromises.push(ProductModel.create({
    name: faker.commerce.productName(),
    categories: [faker.commerce.department(), faker.commerce.department()],
    price: faker.commerce.price()
  }));
}

Promise.all(productPromises)
.then(() => console.log("All seeds completed"))
.catch(err => console.log(err))
.finally(() => {
  mongoose.connection.close();
})