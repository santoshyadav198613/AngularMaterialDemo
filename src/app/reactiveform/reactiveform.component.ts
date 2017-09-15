import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  productForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.fb.group(
      {
        id: [''],
        name: [''],
        price: [''],
        address: this.fb.group(
          {
            addressLine1: [''],
            addressLine2: [''],
            city: [''],
            pin: ['']
          }
        ),
        cards: this.fb.array([this.buildForm()])
      });
  }

  buildForm() {
    return this.fb.group(
      {
        cardnumber: [''],
        cvv: [''],
        month: [''],
        year: ['']
      })
  }

  addProduct(product: any) {
    console.log(product);
  }

  addCard() {
    let card = <FormArray>this.productForm.controls['cards'];
    card.push(this.buildForm());
  }

  removeCard(i: number) {
    let card = <FormArray>this.productForm.controls['cards'];
    card.removeAt(i);
  }



}
