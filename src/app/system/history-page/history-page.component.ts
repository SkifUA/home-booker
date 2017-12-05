import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { CategoriesService} from '../shared/services/categories.service';
import { EventsService } from '../shared/services/events.service';
import { Category } from '../shared/models/category.model';
import { HBEvent } from '../shared/models/event.model';


@Component({
  selector: 'hb-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit, OnDestroy {

  constructor(
    private categoriesService: CategoriesService,
    private eventsService: EventsService
  ) { }

  isLoaded = false;
  sub1: Subscription;

  categories: Category[] = [];
  events: HBEvent[] = [];

  chartData = [];

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.categoriesService.getCategories(),
      this.eventsService.getEvents()
    ).subscribe((data: [Category[], HBEvent[]]) => {
      this.categories = data[0];
      this.events = data[1];

      this.calculateChartData();

      this.isLoaded = true;
    } );
  }

  calculateChartData(): void {
    this.chartData = [];

    this.categories.forEach((c) => {
      const catEvent = this.events.filter((e) => e.category === c.id && e.type === 'outcome');
      this.chartData.push({
        name: c.name,
        value: catEvent.reduce((total, e) => {
          total += e.amount;
          return total;
        }, 0)
      });
    });
    console.log(this.chartData);
  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

}
