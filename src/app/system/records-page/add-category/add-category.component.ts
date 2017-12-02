import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'hb-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let { name, capacity } = form.value;
    if (capacity < 0) {
      capacity *= -1;
    }

    const category = new Category(name, capacity);

    this.categoriesService.addCategory(category)
      .subscribe((category: Category) => {
          form.reset();
          form.form.patchValue({capcity: 1});
      });
  }

}
