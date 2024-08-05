var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { jsxs, jsx } from "react/jsx-runtime";
import { observer } from "mobx-react";
import { useState } from "react";
import { makeAutoObservable } from "mobx";
class User {
  constructor() {
    __publicField(this, "id", null);
    makeAutoObservable(this);
    this.id = Math.random();
  }
}
const rootStore = {
  user: new User()
};
function App() {
  const [counter, setCounter] = useState(0);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Hello React Vite Mobx Shop!" }),
    /* @__PURE__ */ jsx("h2", { children: counter }),
    /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setCounter(counter + 1), children: "Add 1" }),
    /* @__PURE__ */ jsx("hr", {}),
    rootStore.user.id
  ] });
}
observer(App);
function createApp() {
  const app = /* @__PURE__ */ jsx(App, {});
  return app;
}
function createServerApp() {
  console.log("here in entry server");
  const app = createApp();
  return app;
}
export {
  createServerApp as default
};
