import { Product } from '~/interfaces/product.interface';
import Base from './base.service';

class ProductDataService extends Base{
  async getAll() {
    try {
      const data: Product[] = await super.get('products').then(response => response.data)
      return data;
    } catch (error) {
      console.error(error)
    }
  }

  async getHistory() {
    const history: Product[] | [] = await super.get('redeem').then(response => response.data)
    return history;
  }
}

export default new ProductDataService();
