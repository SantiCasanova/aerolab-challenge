import { User } from '~/interfaces/user.interface';
import ApiService from './base.service';

class UserDataService extends ApiService{
  getUser() {
    return super.axios.get<User>('/user/me')
  }

  addPoints(data: number) {
    return super.axios.post<number>('/user/points', data)
  }
}

export default new UserDataService();
