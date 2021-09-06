<template>
  <div>
        <div class="deep-purple darken-4 pa-2" v-for="(sd, i) in standard" :key="i">
            {{ sd.name }}
            {{ sd.prices[currency].amount }}
        </div><br>
        <div class="deep-purple darken-4 pa-3">
          <div v-for="(pk, i) in temp_packs" :key="i">
              <p>{{ pk.name }}</p>
              <p>{{ pk.prices[currency].amount }}</p>
            <div v-if="!change">
              <v-btn
                @click="addProduct(pk)"
              >Click Me</v-btn>
            </div>
            <div v-else>
              <v-btn
                disabled
                @click="addProduct(pk)"
              >Click Me</v-btn>
            </div>
          </div>
        </div>
  </div>
</template>
<script>

  export default {
    name: 'Home',
    title: 'Home',
    methods: {
      addToCart(item, currency) {
        this.cart.push({
          name: item.name,
          price: item.price[currency].amount,
          priceId: item.price[currency].id,
          quantity: item.quantity
        })
        
        console.log(this.cart)
      },
      addProduct(data) {
        this.paxArray.forEach(element => {
          if(element === data.productId) this.change = !this.change
        });
      },
      removeProduct() {

      }
    },
    data: () => ({
      paxArray: ['prod_K7JGbgvTzCOOqV', 'prod_K7Ixeh2rBTiJJF', 'prod_K7JLY1Z7rmrLwP', 'prod_K7JJW1Z0XrEPFT', 'prod_K7JCCHHddJeykK', 'prod_K7J1AGWv22luWH'],
      change: false,
      products: [],
      standard: [],
      temp_packs: [],
      packs: [],
      cart: [],
      currency: 'myr',
      currCurrency: ''
    }),
    async created() {
      this.products = (await this.$http.get('http://revivearcadeapi.ml/products')).data

      this.standard = this.products.filter(product => product.currentTicketType.match("Standard"))
      this.temp_packs = this.products.filter(product => !product.currentTicketType.match("Standard"))
    }
  }
</script>
