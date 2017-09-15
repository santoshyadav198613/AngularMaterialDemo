import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  name: FormControl = new FormControl('');
  isValid: FormControl = new FormControl('');
  date: FormControl = new FormControl(new Date());
  options: string[] = ['Santosh', 'Onkar', 'Amit'];
  filteredOptions: Observable<string[]>;
  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.name.valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val) : this.options.slice());
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

}
