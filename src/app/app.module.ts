import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { LayoutComponent } from './layout/layout.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListTimekeepingComponent } from './list-timekeeping/list-timekeeping.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbDropdownModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './signin/signin.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TurnComponent } from './turn/turn.component';
import { TokenJWTComponent } from './token-jwt/token-jwt.component';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    LayoutComponent,
    CreateEmployeeComponent,
    ListTimekeepingComponent,
    DetailEmployeeComponent,
    SigninComponent,
    NavigationComponent,
    LogoutComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    ForgotComponent,
    ResetPasswordComponent,
    TurnComponent,
    TokenJWTComponent,
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbDropdownModule,
    BrowserAnimationsModule,
    NgbPaginationModule,
    NgbTimepickerModule
    // NgxPaginationModule,
    // MatTableModule,
    // MatButtonModule,
    // MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
