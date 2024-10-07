import { makeAutoObservable, runInAction } from 'mobx';

class Catalog {
  products = [];

  constructor(api) {
    makeAutoObservable(this);
    this.api = api;
  }

  async load() {
    const data = await this.api.getAll();
    runInAction(() => this.products = data);
    console.log(this.products.length, 'length');
  }
}

export default Catalog;
