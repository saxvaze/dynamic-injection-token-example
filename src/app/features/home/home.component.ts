import { Component, Inject } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { IUserService } from 'src/app/services/base.service';
import { LegalEntityService } from 'src/app/services/legal-entity.service';
import { UserService } from 'src/app/services/user.service';
import { DynamicUrlTokenSubject } from 'src/app/tokens/dynamic-url.token';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  serviceData: string = 'nika';
  iService: IUserService = null as any;

  constructor(
    @Inject(DynamicUrlTokenSubject)
    public tokenSubject: BehaviorSubject<IUserService>,
    private legalEntityService: LegalEntityService,
    private userService: UserService
  ) {
    // this.tokenSubject
    //   .pipe(filter((s) => !!s))
    //   .subscribe((service: IUserService) => this.iService = service);
  }

  getUserType() {
    this.tokenSubject.next(
      localStorage.getItem('user-type') === 'legal'
        ? this.legalEntityService
        : this.userService
    );
  }

  changeUserType() {
    const currentType = localStorage.getItem('user-type');
    if (currentType === 'legal') {
      localStorage.setItem('user-type', 'basic');
    }
    else {
      localStorage.setItem('user-type', 'legal');
    }

    this.getUserType();
  }
}
