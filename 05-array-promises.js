let is_ok = true;

let products = [
    {
        name: 'arroz',
        price: 100,
        stock: 8,
    },
    {
        name: 'coca',
        price: 100,
        stock: 8,
    },
    {
        name: 'pepino',
        price: 100,
        stock: 8,
    },
    {
        name: 'cafe',
        price: 100,
        stock: 8,
    },
    {
        name: 'mate',
        price: 100,
        stock: 8,
    }
];

let fetchProducts = (time, task) => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(() => {
                resolve(task)
            }, time);
        } else {
            reject("Error")
        }
    });
}

fetchProducts(2000, products)
    .then(datos => { console.log(datos) })
    .catch(err => console.log(err))