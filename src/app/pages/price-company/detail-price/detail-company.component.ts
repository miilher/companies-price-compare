import { Component, OnInit, Input } from '@angular/core';
import {
  IBarChartOptions,
  IChartistAnimationOptions,
  IChartistData
} from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.scss']
})
export class DetailCompanyComponent implements OnInit {

  @Input()
  dataCompany;

  @Input()
  labels;

  @Input()
  prices;

  type: ChartType = 'Bar';

  data: IChartistData;

  options: IBarChartOptions;

  events: ChartEvent;

  constructor() {

  }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    this.data = {
      labels:
        this.labels
      ,
      series: [
        this.prices
      ]
    };

    this.options = {
      axisX: {
        showGrid: false
      },
      height: 300
    };

    this.events = {
      draw: (data) => {
        if (data.type === 'bar') {
          data.element.animate({
            y2: <IChartistAnimationOptions> {
              dur: '0.5s',
              from: data.y1,
              to: data.y2,
              easing: 'easeOutQuad'
            }
          });
        }
      }
    };
  }




}
