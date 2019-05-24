import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule,
  MatMenuModule
} from '@angular/material';

@NgModule( {
  imports: [
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatMenuModule
  ],
})

export class MaterialModule { }
