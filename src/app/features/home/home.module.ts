import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home-router.module';
import { DynamicUrlTokenSubject } from 'src/app/tokens/dynamic-url.token';
import { LegalEntityService } from 'src/app/services/legal-entity.service';
import { UserService } from 'src/app/services/user.service';
import { BehaviorSubject } from 'rxjs';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRouterModule],
  providers: [
    LegalEntityService,
    UserService,
    {
      provide: DynamicUrlTokenSubject,
      useValue: new BehaviorSubject('')
    },
  ],
})
export class HomeModule {}
