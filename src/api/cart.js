function createCartApi(http) {
  return {
    async addToCart ({userId, date, products = []}) {
      return (await http.post('products/')).data;
    }
  }
}

export default createCartApi;
