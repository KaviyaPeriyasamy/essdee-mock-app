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
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { ViewdcComponent } from './viewdc/viewdc.component';
import { ViewgrnComponent } from './viewgrn/viewgrn.component';
import { NewgrnComponent } from './newgrn/newgrn.component';
// import { EditableTableModule } from 'ng-editable-table/editable-table/editable-table.module';

@NgModule({
  declarations: [
    AppComponent,
    TabviewComponent,
    NavbarComponent,
    ViewdcComponent,
    ViewgrnComponent,
    NewgrnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      {path:'newdc',component:TabviewComponent},
      {path:'viewdc',component:ViewdcComponent},
      {path:'newgrn',component:NewgrnComponent},
      {path:'viewgrn',component:ViewgrnComponent}
    ])
    // EditableTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
