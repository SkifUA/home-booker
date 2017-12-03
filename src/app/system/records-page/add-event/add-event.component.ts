import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Category } from '../../shared/models/category.model';

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
  ]

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

  }

}
