import axios from "axios"

class Base {
  axios
  constructor() {
    this.axios = axios.create({
      baseURL: "https://coding-challenge-api.aerolab.co/",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJjNjE2ZTk5OTIwOTAwMWE1YmM4OGEiLCJpYXQiOjE2NTY1MTI4Nzh9.joyddK6lmL0q-MjqxGrQ-73PoAyOrnHsqsqkt0UjWnY"
      }
    })
  }

  async get(entity: string) {
    return await this.axios.get(`/${entity}`)
  }
}

export default Base;

// class ProductsService extends Base {
//   async get() {
//     const data = await super.get('user/me')
//     return data
//   }
// }

// const productsService = new ProductsService()
// productsService.get()