import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "./context/book.tsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider>
    <App />
  </Provider>
);
