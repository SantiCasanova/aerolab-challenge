import * as React from "react"
import Header from "~/components/Header/Header"
import ProductList from "~/components/ProductList/ProductList"
import styles from "./App.module.scss"

const App: React.FC = () => {
  return (
    <main className={styles.container}>
      <Header />
      <ProductList />
    </main>
  )
}

export default App;
