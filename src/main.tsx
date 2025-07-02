import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/FullStyles.css";
// import './index.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Header from "./components/organisms/Header.tsx";
import Footer from "./components/organisms/Footer.tsx";
import DireitosAutorais from "./components/organisms/DireitosAutorais.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
    <DireitosAutorais />
  </React.StrictMode>
);
