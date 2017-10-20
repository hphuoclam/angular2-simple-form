import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { InputComponentComponent } from './controls/input.component';
import { DropdownComponentComponent } from './controls/dropdown.component';
import { TextareaComponentComponent } from './controls/textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    InputComponentComponent,
    DropdownComponentComponent,
    TextareaComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
