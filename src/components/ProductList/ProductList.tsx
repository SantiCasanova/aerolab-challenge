import React, { useEffect } from "react"
import styles from "./ProductList.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "~/store/slices/products"

const ProductList: React.FC = () => {

  const {list: products} = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])
  
  return (
    <div className={styles.container}>
      {
        products.map(product => (
          <span key={product.id}>{product.name}</span>
        ))
      }
    </div>
  )
}

export default ProductList;
