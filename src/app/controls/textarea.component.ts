import { Component, OnInit, Input } from '@angular/core';

@Component({
  	selector: 'app-custom-textarea',
  	template: `
  		<label class="col-sm-2 control-label p-l-0" style="padding-right: 30px">{{text}}</label>
        <div class="col-sm-8" [formGroup]="group">
            <textarea class="form-control" rows="4" formControlName="{{name}}" name="{{name}}" id="{{name}}" placeholder="{{text}}"></textarea>
        </div>
  	`
})
export class TextareaComponentComponent implements OnInit {
	@Input() group;
  	@Input('text') text: string;
  	@Input('name') name: string;

  	constructor() { }

  	ngOnInit() {
  	}

}
