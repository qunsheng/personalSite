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
          text: 'Skills'
      },
      series: [{
            name: 'Front End Web Technologies',
            size: '85%',
            innerSize: '70%',
            data: [
              {
                name: 'JavaScript/ES6+/ES2015+(10+ years)',
                y: 10
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
          innerSize: '55%',
          data: [
            {
              name: 'Restful Web Service',
              y: 10
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
                name: 'Hibernate',
                y: 1
            }, {
                name: 'Mongo DB',
                y: 1
          }]
        },
        {
          name: 'Tools And Software Development Approaches',
          size: '55%',
          innerSize: '52%',
          // colorByPoint: true,
          data: [
            {
              name: 'Git(8 years)',
              y: 8,
              // sliced: true,
              // selected: true
          }, 
          {
              name: 'GitHub',
              y: 1
          },  
          {
              name: 'SVN/CVS/Clear Case/Clear Quest/Perforce',
              y: 1
          }, 
          {
              name: 'Continuous Integration/Crouse Control/Hudson',
              y: 1
          }, 
          {
              name: 'Ant/Maven',
              y: 1
          }, {
              name: 'Eclipse',
              y: 1
          }, {
              name: 'VS Code',
              y: 1
          }, {
              name: 'Agile/Scrum/Extreme Programming/Test Driven Development/Pair Programming',
              y: 10
          }, {
              name: 'Design Patterns',
              y: 1
          }]
    }]
  };
  
  ngOnInit() {
  }

}
