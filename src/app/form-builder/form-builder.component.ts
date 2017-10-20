import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
	@Input() parentFormGroup: FormGroup;
	@Input() widget_size_list: any;
	@Input() widget_type_list: any;
	@Input() navigation_type_list: any;
	
  	constructor() {}

  	ngOnInit() {
  		// console.log(this.parentFormGroup)
  	}
}
