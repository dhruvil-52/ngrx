import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './containers/header/header.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SHARED_STATE } from './models/static.model';
import { sharedReducer } from './store/shared.reducer';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(SHARED_STATE, sharedReducer)
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
