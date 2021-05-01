import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabviewComponent } from './tabview/tabview.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
 import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { EditableTableModule } from 'ng-editable-table/editable-table/editable-table.module';

@NgModule({
  declarations: [
    AppComponent,
    TabviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    // EditableTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
