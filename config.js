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
            subcategoreis: [
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
    ]
}

module.exports = config;