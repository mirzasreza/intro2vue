var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        description: "A pair of warm, fuzzy socks",
        image: './assets/vmSocks-green-onWhite.jpg',
        inStock: true,
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        details: ["80% cotton", "20% polyster", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue-onWhite.jpg'
            }
        ],
        sizes: ["S", "M", "L", "XL"],
        cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        removeFromCart: function () {
            this.cart -= 1
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    }

})
