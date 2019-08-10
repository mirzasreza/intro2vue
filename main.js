var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        description: "A pair of warm, fuzzy socks",
        image: './assets/vmSocks-green-onWhite.jpg',
<<<<<<< HEAD
        inStock: true,
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        details: ["80% cotton", "20% polyster", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ],
        sizes: ["S", "M", "L", "XL"]
    },
=======
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        inStock: true,
        onSale: true
    }
>>>>>>> 1db6e06bbacdb7d8e24e0a002d61cb393d4d6ec5
})
