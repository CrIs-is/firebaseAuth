import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const COMPONENTS = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatGridListModule,
  MatCheckboxModule,
  MatDialogModule,
  MatStepperModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatProgressBarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...COMPONENTS
  ],
  exports:[
    ...COMPONENTS
  ]

})
export class MaterialModule { }
