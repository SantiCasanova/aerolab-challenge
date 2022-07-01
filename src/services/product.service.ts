import { Product } from '~/interfaces/product.interface';
import Base from './base.service';

class ProductDataService extends Base{
  async getAll() {
    try {
      return super.get('products')
    } catch (error) {
      console.log(error)
    }
  }

  async getHistory() {
    const history: Product[] | [] = await super.get('redeem').then(response => response.data).catch(error => console.log(error))
    return history;
  }

  async redeemProduct(productID: string) {
    try {
      return await super.post('user/points', productID)
    } catch (error) {
      console.error(error)
    }
  }
}

export default new ProductDataService();
