import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './admin/home/home.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//angular material
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { IndicatorComponent } from './dashboard/components/indicator/indicator.component';
import { DailyReserveComponent } from './dashboard/components/daily-reserve/daily-reserve.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    IndicatorComponent,
    DailyReserveComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
