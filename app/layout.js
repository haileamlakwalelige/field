"use client";

import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Provider } from "react-redux";
import store from "./store/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Quantum Field</title>
      </head>
      <Provider store={store}>
        <Navbar />
        <body>{children}</body>
        <Footer />
      </Provider>
    </html>
  );
}
