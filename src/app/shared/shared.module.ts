import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MdButtonModule, MdCheckboxModule,
  MdDialogModule, MdTooltipModule, MdSnackBarModule, MdAutocompleteModule,
  MdDatepickerModule, MdNativeDateModule, MdRadioModule,
  MdSlideToggleModule
} from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdDialogModule,
    MdTooltipModule,
    MdAutocompleteModule,
    ReactiveFormsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    MdSlideToggleModule,
    FormsModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdDialogModule,
    MdTooltipModule,
    MdAutocompleteModule,
    ReactiveFormsModule,
    MdDatepickerModule, MdNativeDateModule,
    MdRadioModule,
    MdSlideToggleModule,
    FormsModule
  ],
  declarations: []
})
export class SharedModule { }
