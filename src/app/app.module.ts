import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule  } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymerangPaymentOverviewComponent } from './client-payments/paymerang-payment-overview/paymerang-payment-overview.component';
import { PaymentService } from '../app/services/payment-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentInfoDialogComponent } from './client-payments/payment-info/payment-info-dialog/payment-info-dialog.component';

const appRoutes: Routes = [
  { path: 'payments',     component: PaymerangPaymentOverviewComponent},
  { path: '', redirectTo: '/payments', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    PaymerangPaymentOverviewComponent,
    HeaderComponent,
    FooterComponent,
    PaymentInfoDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule.forRoot(
      appRoutes
    ),
    NgbModule,
  ],
  entryComponents: [
    PaymentInfoDialogComponent
  ],
  providers: [
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
