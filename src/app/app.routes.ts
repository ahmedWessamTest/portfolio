import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects' },
  { path: 'experience', component: ExperienceComponent, title: 'Experience' },
  { path: 'blog', component: BlogComponent, title: 'Blog' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: '**', component: NotFoundComponent, title: 'error' }

];
