import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillSetComponent,
    WorkExperienceComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
