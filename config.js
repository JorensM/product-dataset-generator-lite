const config = {
    brands: [
        "Microsoft",
        "Sony",
        "Dell",
        "Samsung",
        "Huawei",
        "Apple",
        "H&M",
        "Nike",
        "Gucci",
        "Prada",
        "Chanel"
    ],
    categories: [
        {
            name: "apparel",
            subcategoreis: [
                "dresses",
                "shirts",
                "pants",
                "t-shirts",
                "shoes"
            ]
        },
        {
            name: "tech",
            subcategories: [
                "laptops",
                "phones",
                "headphones",
                "speakers",
                "tech-accessories",
            ]
        }
    ],
    products: [
        {
            name: "Phone",
            variations: ["A40", "Cool-A", "X", "X-T"],
            categories: ["tech", "phones"]
        },
        {
            name: "Phone Charger",
            categories: ["tech", "phones", "tech-accessories"]
        },
        {
            name: "Laptop Charger",
            categories: ["tech", "laptops", "tech-accessories"]
        },
        {
            name: "Laptop",
            variations: ["Swift", "Inspire", "Speedy", "Async", "Sync"],
            categories: ["tech", "laptops", "tech-accessories"]
        },
        {
            name: "Headphones",
            variations: ["Hear", "Noise", "Woosh", "B20", "Smooth"],
            categories: ["tech", "headphones"]
        },
        {
            name: "Speakers",
            variations: ["Bass", "Extra-bass", "Base", "Square",],
            categories: ["tech", "headphones"]
        },
        {
            name: "Dress",
            variations: ["S", "M", "L", "XL", "XXL"],
            categories: ["apparel", "dresses"]
        },
        {
            name: "Shirt",
            variations: ["S", "M", "L", "XL", "XXL"],
            categories: ["apparel", "shirt"]
        },
        {
            name: "Pants",
            variations: ["S", "M", "L", "XL", "XXL"],
            categories: ["apparel", "pants"]
        },
        {
            name: "T-shirt",
            variations: ["S", "M", "L", "XL", "XXL"],
            categories: ["apparel", "t-shirts"]
        },
        {
            name: "Shoes",
            variations: ["S", "M", "L", "XL", "XXL"],
            categories: ["apparel", "shoes"]
        },
    ]
}

module.exports = config;