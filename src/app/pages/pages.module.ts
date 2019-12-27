import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { RisingComponent } from '../components/rising/rising.component';
import { GraficDonaComponent } from '../components/grafic-dona/grafic-dona.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    RisingComponent,
    GraficDonaComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
    SharedModule,
    FormsModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
