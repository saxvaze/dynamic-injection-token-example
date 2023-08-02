import { InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUserService } from '../services/base.service';

export const DynamicUrlTokenSubject = new InjectionToken<
  BehaviorSubject<IUserService>
>('initial-value');
