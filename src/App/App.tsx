import * as React from "react"
import Header from "~/containers/Header/Header";
import styles from "./App.module.scss"

const App: React.FC = () => {
  return (
    <main className={styles.container}>
      <Header />
    </main>
  )
}

export default App;
