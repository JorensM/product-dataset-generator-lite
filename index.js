const config = require("./config.js");
const fs = require("fs");

let products = [];

function addProduct(brand, name, variation, categories){

    const final_name = variation ? `${name} ${variation}` : name;

    products.push({
        brand: brand,
        name: final_name,
        categories: categories,
        relevance: 1
    })
}


config.brands.forEach(brand => {
    config.products.forEach((product_type => {
        if(product_type.variations){
            product_type.variations.forEach(variation => {
                addProduct(brand, product_type.name, variation, product_type.categories);
            })
        }
        else{
            addProduct(brand, product_type.name, null, product_type.categories);
        }
    }))
})

fs.writeFile("./output/product-dataset.json", JSON.stringify(products, null, 4), err => {
    if(err){
        console.error("Error writing file: ");
        console.error(err);
    }else{
        console.log("Dataset generated successfully!");
    }
})

