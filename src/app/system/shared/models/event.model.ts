import * as moment from "moment";
import _date = moment.unitOfTime._date;

export class HBEvent {
  constructor(
    public type: string,
    public amount: number,
    public category: number,
    public date: string,
    public description: string,
    public id?: number,
    public catName?: string
  ) {}
}
