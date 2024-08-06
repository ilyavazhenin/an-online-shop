var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { jsxs, jsx } from "react/jsx-runtime";
import { observer } from "mobx-react";
import { createContext, useState, useContext } from "react";
import { makeAutoObservable } from "mobx";
import axios from "axios";
const storeContext = createContext(null);
function App() {
  const [counter, setCounter] = useState(0);
  const store = useContext(storeContext);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Hello React Vite Mobx Shop!" }),
    /* @__PURE__ */ jsx("h2", { children: counter }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => setCounter(counter + 1),
        children: "Add 1"
      }
    ),
    /* @__PURE__ */ jsx("hr", {}),
    store.user.id
  ] });
}
observer(App);
class User {
  constructor() {
    __publicField(this, "id", null);
    makeAutoObservable(this);
    this.id = Math.random();
  }
}
function createRootStore() {
  const rootStore = {
    user: new User()
  };
  return rootStore;
}
function createHttpPlugin(baseURL) {
  const http = axios.create({
    baseURL,
    timeout: 1e3
  });
  return http;
}
function createProductsApi(http) {
  return {
    async getAll() {
      return (await http.get("products/")).data;
    }
  };
}
function createCartApi(http) {
  return {
    async addToCart({ userId, date, products = [] }) {
      return (await http.post("products/")).data;
    }
  };
}
function createApi(http) {
  return {
    products: createProductsApi(http),
    cart: createCartApi(http)
  };
}
function createApp() {
  const http = createHttpPlugin("https://fakestoreapi.com/");
  const api = createApi(http);
  const rootStore = createRootStore();
  http.interceptors.request.use((config) => {
    console.log("config in interceptor", 1);
    return config;
  });
  api.products.getAll();
  const app = /* @__PURE__ */ jsx(storeContext.Provider, { value: rootStore, children: /* @__PURE__ */ jsx(App, {}) });
  return app;
}
function createServerApp() {
  const app = createApp();
  console.log("here in entry server");
  return app;
}
export {
  createServerApp as default
};
