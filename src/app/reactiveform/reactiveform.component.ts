import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

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
        )
      }
    );
  }

  addProduct(product: any) {
    console.log(product);
  }

}
