import { Component } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl, FormBuilder } from '@angular/forms';
import { FormBuilderService } from './form-builder/form-builder.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	formModel: any = {};
	preview: boolean = true;

	widget_size_list = ["Larger", "Medium", "Small"];
	widget_type_list = ["Partial Image", "Partial Image 1", "Partial Image 2", "Partial Image 3"];
	navigation_type_list = ["Navigation Type", "Navigation Type 1", "Navigation Type 2", "Navigation Type 3"];

	myForm: FormGroup;

	constructor(public formBuilder: FormBuilder) {
	}

	ngOnInit() {
        this.myForm = this.formBuilder.group({
            name: [''],
            widget_size: [''],
			widget_type: [''],
			image_path: [''],
			header: [''],
			enable_click: [false],
			url: [''],
			navigation_type: [''],
			description: [''],
        });
    }

	updateClick(data: FormBuilderService){
		this.preview = true;
		this.formModel = data;
		console.log(data)
	}
	cancelClick(){
		this.preview = false;
	}
}
