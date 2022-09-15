import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogfooterComponent } from './blogfooter/blogfooter.component';



@NgModule({
  declarations: [
    BlogfooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlogfooterComponent
  ]
})
export class SharedModule { }
