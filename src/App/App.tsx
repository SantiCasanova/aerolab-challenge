import * as React from "react";
import styles from "./App.module.scss";
import ProductDataService from "../services/product.service"
import { Product } from "~/interfaces/product.interface";

const App: React.FC = () => {

ProductDataService.getAll().then(asd => console.log(asd))
  return (
    <main className={styles.container}>
    </main>
  );
};

export default App;
