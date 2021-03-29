const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false#'

new Vue({
  el: '#app',
  data: {
    cryptos: [],
    filterPrice: 0,
  },
  mounted() {
    axios(url)
      .then(({ data }) => {
        cryptoAssets = data
        this.cryptos = cryptoAssets.map((crypto) => {
          return {
            image: crypto.image,
            name: crypto.name,
            symbol: crypto.symbol.toUpperCase(),
            price: crypto.current_price.toFixed(2),
            priceChange24hs: crypto.price_change_24h.toFixed(
              2
            ),
            percent24hs: crypto.price_change_percentage_24h.toFixed(2),
          }
        })
        console.log(myCryptoAssets)
      })
      .catch((err) => console.log(err))
  },
  computed: {
    cryptosGreaterThan() {
      return this.cryptos.filter((crypto) => +crypto.price > this.filterPrice)
    },
  },
})
