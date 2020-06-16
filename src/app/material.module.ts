
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from "@angular/material/dialog";
import { MatTreeModule } from '@angular/material/tree';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    MatChipsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatIconModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule,
    MatTreeModule,
    MatGridListModule
  ],
  exports: [
    MatChipsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDialogModule,
    MatTreeModule,
    MatGridListModule
  ]
})
export class MaterialModule {}
