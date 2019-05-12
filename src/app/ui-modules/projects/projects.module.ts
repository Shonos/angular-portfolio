import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { RouterModule } from '@angular/router';
import { ProjectsRoutes } from './projects.routing';
import { SharedModule } from 'src/app/core/shared.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(ProjectsRoutes),
  ]
})
export class ProjectsModule { }
