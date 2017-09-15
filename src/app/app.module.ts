import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { TestComponent } from './test/test.component';
import { TestPipe } from './test.pipe';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    AutocompleteComponent,
    TestComponent,
    TestPipe,
    TemplateformComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule { }
