import { Observable } from 'rxjs';

export interface IUserService {
  getData(): Observable<{ userType: string }>;
}
