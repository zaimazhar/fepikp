<template>
  <div>
    <h1 class="text-center">Home</h1>
    <div v-for="(product, i) in products" :key="i">
      <p>{{ product.name }}</p>
      <p>{{ product.price[currency].id }}</p>
      <p>{{ currencyShow[currency] }} {{ product.price[currency].amount }}</p>
    </div>
    <div>
      <p>{{ products[0].name }}</p>
      <p>{{ currencyShow[currency] }} {{ products[0].price[currency].amount }}</p>
      <v-btn
        color="primary"
        elevation="5"
        @click="products[0].quantity++"
      >+</v-btn>
      <p>{{ products[0].quantity }}</p>
      <v-btn
        color="primary"
        elevation="5"
        @click="addToCart(products[0], currency)"
      >Checkout</v-btn>
    </div>
    <div>
      <p>{{ products[1].name }}</p>
      <p>{{ currencyShow[currency] }} {{ products[1].price[currency].amount }}</p>
      <v-btn
        color="primary"
        elevation="5"
      >Checkout</v-btn>
    </div>
    <v-select
      v-model="currency"
      :items="items"
      item-text="text"
      item-value="value"
      single-line
    ></v-select>
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
      }
    },
    data: () => ({
      cart: [],
      currency: 'myr',
      currencyShow: {
        "myr": "MYR",
        "aud": "A$"
      },
      products: [{
        name: "Tickets with Burgers",
        price: {
          "myr": {
            id: "price_1JS0fDEM92XPtbH8l3dp4lAz",
            amount: "50.00"
          },
          "aud": {
            id: "price_1JS0fDEM92XPtbH84znUZSlf",
            amount: "16.30"
          }
        },
        quantity: 0
      }, {
        name: "Tickets",
        price: {
          "myr": {
            id: "price_1JOn1UEM92XPtbH8FgPTpvZa",
            amount: "30.00"
          },
          "aud": {
            id: "price_1JRv7pEM92XPtbH81pUduNWm",
            amount: "9.83"
          }
        },
        quantity: 0
      }],
      items: [
        {
          text: 'MYR',
          value: 'myr',
        },
        {
          text: 'AUD',
          value: 'aud',
        },
      ],
    })
  }
</script>
