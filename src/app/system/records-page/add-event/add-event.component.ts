import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';

import { Category } from '../../shared/models/category.model';
import { HBEvent } from '../../shared/models/event.model';

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

  constructor() { }

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



    console.log(form.value);
  }

}
