import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule, MatToolbarModule, MatIconModule } from '@angular/material';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app.routing';
import { GrdFilterPipe } from './search-filter.pipe';
import { LoginComponent } from './login/login.component';
import { LanguageTranslationModule } from 'src/language-translation.module';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SidebarComponent,
    HomeComponent,
    MenuComponent,
    GrdFilterPipe,
    LoginComponent


  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LanguageTranslationModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    ConfirmDialogModule,
    NgxPaginationModule,
    ButtonModule,
    routing

  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
