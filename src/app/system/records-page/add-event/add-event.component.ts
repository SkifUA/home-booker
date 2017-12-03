import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';

import { Category } from '../../shared/models/category.model';
import { HBEvent } from '../../shared/models/event.model';
import { EventsService } from '../../shared/services/events.service';
import { BillService } from '../../shared/services/bill.service';
import {Bill} from "../../shared/models/bill.model";

@Component({
  selector: 'hb-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  @Input() categories: Category[] = [];
  types = [
    {type: 'income', label: 'Income'},
    {type: 'outcome', label: 'Outcome'},
  ];

  constructor(
    private eventsService: EventsService,
    private billService: BillService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let { amount, description, category, type } = form.value;
    if (amount < 0) {
      category *= -1;
    }

    const event = new HBEvent(
      type,
      amount,
      +category,
      moment().format('DD.MM.YYYY HH:mm:ss'),
      description
    );

    this.billService.getBill()
      .subscribe((bill: Bill) => {
        let value = 0;

        if (type === 'outcome') {
          if (bill.value < amount) {
            // errors
            return;
          } else {
            value = bill.value - amount;
          }

        } else {
          value = bill.value + amount;
        }

        this.billService.updateBill({value, currency: bill.currency})
          .mergeMap(() => this.eventsService.addEvent(event))
          .subscribe(() => {
            form.setValue({
              amount: 0,
              description: '',
              category: 1,
              tupe: 'outcome'
            });
          });
      });

    // this.eventsService.addEvent(event);
    //
    // console.log(form.value);
  }

}
