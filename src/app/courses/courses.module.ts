import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppCoreModule } from '../shared/app-core/app-core.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [CoursesComponent],
  imports: [AppCoreModule, CommonModule, CoursesRoutingModule],
})
export class CoursesModule {}
