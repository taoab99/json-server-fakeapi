const faker = require("faker");
const fs = require("fs");
// set tieng viet

faker.locale = "vi"

// console.log(faker.commerce.department());
// console.log(faker.commerce.productName());
// console.log(faker.commerce.productDescription());

// random  category list
const RandomcategoryList = (n) => {
    if (n < 0 || n === 0) return [];

    const categoryList = [];

    Array.from(new Array(n)).forEach(() => {
        const category = {
            id: faker.random.uuid(),
            name: faker.commerce.department(),
        };
        categoryList.push(category)
    });

    return categoryList;
};
// random data:
const RandomProductlist = (categoryList, numberOfProductList) => {
    if (numberOfProductList < 0 || numberOfProductList === 0) return [];
    const productList = [];
    for (const category of categoryList) {
        Array.from(new Array(numberOfProductList)).forEach(() => {
            const product = {
                cartegoryId: category.id,
                id: faker.random.uuid(),
                name: faker.commerce.productName(),
                color: faker.commerce.color(),
                price: Number.parseFloat(faker.commerce.price()),
                discription: faker.commerce.productDescription(),
                thumbnail: faker.image.imageUrl(400, 400),

            };
            productList.push(product);
        });
    }
    return productList;

}
// iffe

(() => {
    // random data
    const categoryList = RandomcategoryList(4);
    const productList = RandomProductlist(categoryList, 5);
    const db = {
        categories: categoryList,
        products: productList,
        profile: {
            name: "bui khac tao",
        },
    };

    fs.writeFile("db.json", JSON.stringify(db), () => {
        console.log("Generate data susesfully:");
    });
})();