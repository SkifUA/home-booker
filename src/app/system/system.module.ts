import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { BillPageComponent } from './bill-page/bill-page.component';



@NgModule({
  imports: [ CommonModule, SharedModule, SystemRoutingModule ],
  declarations: [BillPageComponent]
})

export class SystemModule {}
