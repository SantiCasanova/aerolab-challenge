import { configureStore } from '@reduxjs/toolkit'
import users from './slices/users'
import products from './slices/products'

export const store = configureStore({
  reducer: {
    users,
    products
  }
})