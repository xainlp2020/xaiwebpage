import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from  '@angular/router';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { DefinitionsComponent } from './definitions/definitions.component';
import { TreeComponent } from './tree/tree.component';
import { TableComponent } from './table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const  appRoutes:  Routes  = [
  { path:  'definitions', component:  DefinitionsComponent },
  { path:  'tree', component:  TreeComponent },
  { path:  'papers', component:  TableComponent },
  {
  path:  'home',
  component:  HomeComponent
  },
  { path:  '',

  redirectTo:  '/home',

  pathMatch:  'full'

  },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DefinitionsComponent,
    TreeComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    //ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
