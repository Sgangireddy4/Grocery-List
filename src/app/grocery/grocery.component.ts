import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class GroceryComponent implements OnInit {
  // task: string;
  task:string = '';
  tasks = [];

  // search = new FormControl('');
  
  Add(){
    this.tasks.push({name: this.task});
    this.task = '';
  }  

  Clear(){
    this.tasks = [];
  }

  constructor() { }

  ngOnInit() {
    // this.search.valueChanges.subscribe((input)=> this.task = input)
  }

}
