import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactinfoComponent } from './contact/contactinfo.component';

const routes: Routes = [
  { path: 'contact', component: ContactinfoComponent },
  { path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) },
  { path: '', pathMatch: 'full', redirectTo: 'articles' },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: '**', redirectTo: 'articles' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
