import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from './projects/projects.component';
import {LinksComponent} from './links/links.component';
import {AboutMeComponent} from './about-me/about-me.component'


const routes: Routes = [
{path: "projects", component: ProjectsComponent},
{path: "links", component: LinksComponent},
{path: "", component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
