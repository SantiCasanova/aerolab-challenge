import { Product } from '~/interfaces/product.interface';
import Base from './base.service';

class ProductDataService extends Base{
  async getAll() {
    const data: Product[] = await super.get('products').then(response => response.data)
    return data;
  }

  getHistory() {
    return super.axios.get<string>('/redeem')
  }
}

export default new ProductDataService();
