import "virtual:windi.css";
import "./css/_index.css";
import "./style.css";

import App from "./App.svelte";
const app = new App({
  target: document.body,
});

export default app;
