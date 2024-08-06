function createProductsApi(http) {
	return {
		async getAll() {
			return (await http.get('products/')).data;
		},
	};
}
export default createProductsApi;
