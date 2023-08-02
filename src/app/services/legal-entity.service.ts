import { Injectable } from '@angular/core';
import { IUserService } from './base.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class LegalEntityService implements IUserService {
  constructor() {}

  getData(): Observable<{userType: string}> {
    return of({ userType: 'legal' });
  }
}
