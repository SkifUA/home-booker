import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../../../shared/Core/base-api';
import { HBEvent } from '../models/event.model';

@Injectable()

export class EventsService extends BaseApi {
  constructor( public http: Http ) {
    super(http);
  }

  addEvent(event: HBEvent): Observable<HBEvent> {
    return this.post('events', event);
  }

  getEvents(): Observable<HBEvent[]> {
    return this.get('events');
  }
}
