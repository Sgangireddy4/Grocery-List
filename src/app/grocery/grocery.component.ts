import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators'


@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class GroceryComponent implements OnInit {
  task: string;
  tasks = [];

  search = new FormControl('');
  
  onClick(){
    this.tasks.push({name: this.task});
    this.task = '';
  }

  

  constructor() { }

  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((input)=> this.task = input)

    
  }

}
