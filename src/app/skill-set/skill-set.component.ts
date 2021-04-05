import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit {

  constructor() { }

  Highcharts = Highcharts;
  chartOptions = {
      chart: {
          type: 'pie'
      },
      title: {
          text: 'Technical Skills'
      },
      series: [{
            name: 'Front End Web Technologies',
            size: '85%',
            innerSize: '70%',
            data: [
              {
                name: 'JavaScript ( 10+ years )',
                y: 10
            }, 
            {
                name: 'Angular/TypeScript ( 6 years )',
                y: 6
            }, 
            {
                name: 'React ( 3 years )',
                y: 3
            },
            {
              name: 'Highcharts/D3 ( 4 years )',
                y: 4
            }
          ]
        }
    ]
  };
  
  ngOnInit() {
  }

}
