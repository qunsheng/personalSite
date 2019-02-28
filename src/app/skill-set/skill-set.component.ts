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

    // series: [{
    //   data: [1, 2, 3]
    // }]

      // title: { text: 'this.chartTitle' },
      // subtitle: { text: '3rd data set' },
      // series: [{
      //   type: 'scatter',
      //   data: [1, 2, 3, 4, 5]
      // }]

      // series: [{
  
      //   type: 'column',
      //   data: [4, 3, -12],
      //   threshold: -10
      // }]

      // series: [{
    
      //   type: 'areaspline',
      //   data: [
      //     5,
      //     11,
      //     3,
      //     6,
      //     0
      //   ]
      // }]

  
      chart: {
          type: 'pie'
      },
      title: {
          text: 'Skills'
      },
      series: [
        {
        name: 'Front End Web Technologies',
        size: '85%',
        innerSize: '70%',
        // colorByPoint: true,
        data: [
          {
            name: 'JavaScript/ES6+/ES2015+(10+ years)',
            y: 10
            // ,
            // sliced: true
            // ,
            // selected: true
        }, {
            name: 'HTML/HTML5/CSS/CSS3(10+ years)',
            y: 10
        }, {
            name: 'AngularJS/Angular2+/TypeScript(6 years)',
            y: 6
        }, {
            name: 'Polymer',
            y: 1
        }, {
            name: 'React/Flux/Redux/Babel',
            y: 1
        }, {
            name: 'Twitter Bootstrap (6 years)',
            y: 6
        }, {
            name: 'Responsive Web Page',
            y: 1
        }, {
            name: 'NodeJS/NPM(6 years)',
            y: 6
        }, {
            name: 'GruntJS/Webpack',
            y: 1
        }, {
          name: 'Highcharts/D3JS(4 years)',
            y: 4
        }, {
          name: 'JQuery(10 years)',
            y: 10
        }, {
          name: 'Dojo/Moo Tools/Backbone.js/Require.js',
            y: 1
        }, {
          name: 'DeveloperTools',
            y: 1
        }
        , {
          name: 'PhoneGap/Cordova/NativeScript',
            y: 1
        }



      ]
    },

    {
      name: 'Back End Technologies',
      size: '70%',
      innerSize: '68%',
      // colorByPoint: true,
      data: [
        {
          name: 'Restful Web Service',
          y: 10,
          // sliced: true,
          // selected: true
      }, {
          name: 'SOAP Web Services',
          y: 1
      }, {
          name: 'JAVA/JAVA EE/Spring(10+ years)',
          y: 10
      }, {
          name: 'Tomcat',
          y: 1
      }, {
          name: 'Sybase/Oracle/MySQL(10+ years)',
          y: 10
      }, {
          name: 'Sogou Explorer',
          y: 1.64
      }, {
          name: 'Opera',
          y: 1.6
      }, {
          name: 'QQ',
          y: 1.2
      }, {
          name: 'Other',
          y: 2.61
      }]
  }



  ]


  };
  
  ngOnInit() {
  }

}
