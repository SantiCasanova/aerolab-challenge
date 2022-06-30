import { User } from '~/interfaces/user.interface';
import Base from './base.service';

class UserDataService extends Base{
  async getUser() {
    try {
      const userData :User[] = await super.get('user/me').then(response => response.data)
      return userData;
    } catch (error) {
      console.log(error)
    }
  }

  async addPoints(data: number) {
    try {
      return super.post('user/points', data)
    } catch (error) {
      console.log(error)
    }
  }
}

export default new UserDataService();
