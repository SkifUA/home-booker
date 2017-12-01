import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { BillPageComponent } from './bill-page/bill-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlaningPageComponent } from './planing-page/planing-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';



@NgModule({
  imports: [ CommonModule, SharedModule, SystemRoutingModule ],
  declarations: [
    BillPageComponent,
    HistoryPageComponent,
    PlaningPageComponent,
    RecordsPageComponent
  ]
})

export class SystemModule {}
