import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  template: `
  	<label class="col-sm-4 control-label p-l-0">{{text}}</label>
    <div class="col-sm-8" [formGroup]="group">
        <input type="{{type}}" [class.form-control]="type !== 'checkbox'" formControlName="{{name}}" name="{{name}}" id="{{name}}" placeholder="{{text}}">
    </div>
  `
})
export class InputComponentComponent implements OnInit {
	@Input() group;
  	@Input('text') text: string;
  	@Input('type') type: string = 'text';
  	@Input('name') name: string;

   	constructor() { 
   	}

   	ngOnInit() {
   		// console.log(this.name)	
  	}
}
