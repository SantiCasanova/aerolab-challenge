import axios from "axios"

class Base{
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

  async post(entity: string, data: number | string) {
    return await this.axios.post<number>(`/${entity}`, data)
  }
}

export default Base;
