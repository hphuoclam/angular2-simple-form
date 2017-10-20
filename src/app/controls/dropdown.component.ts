import { Component, OnInit, Input } from '@angular/core';

@Component({
  	selector: 'app-custom-dropdown',
  	template: `
		<label for="" class="col-sm-4 control-label p-l-0">{{text}}</label>
        <div class="col-sm-8" [formGroup]="group">
            <select class="form-control col-sm-10" formControlName="{{name}}" name="{{name}}" id="{{name}}">
                <option *ngFor="let item of data_list" value="{{item}}">{{item}}</option>
            </select>
        </div>
  	`
})
export class DropdownComponentComponent implements OnInit {
	@Input() group;
  	@Input('text') text: string;
  	@Input('name') name: string;
  	@Input() data_list : any;

  	constructor() { }

 	ngOnInit() {
 		console.log(this.data_list)
  	}

}
