var app = new Vue({
    el: '#app',
    data: {
        brand: "Vue Mastery",
        product: "Socks",
        description: "A pair of warm, fuzzy socks",
        selectedVariant: 0,
        //inStock: false,
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        details: ["80% cotton", "20% polyster", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/vmSocks-green-onWhite.jpg',
                variantQuantity: 20
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0
            }
        ],
        sizes: ["S", "M", "L", "XL"],
        cart: 0,
        onSale: true
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        removeFromCart: function () {
            this.cart -= 1
        },
        updateProduct(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' are on sale!' 
            }
            return this.brand + ' ' + this.product + ' are not on sale!'
        }
    }

})
