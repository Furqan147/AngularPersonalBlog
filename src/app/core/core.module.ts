import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogheaderComponent } from './blogheader/blogheader.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BlogheaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BlogheaderComponent
  ]
})
export class CoreModule { }
