import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymerangPaymentOverviewComponent } from './paymerang-payment-overview/paymerang-payment-overview.component';
import { PaymentService } from '../app/services/payment-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: 'payments',     component: PaymerangPaymentOverviewComponent},
  { path: '', redirectTo: '/payments', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    PaymerangPaymentOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    ),
    NgbModule,
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
