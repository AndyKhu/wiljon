import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-inputtext',
  template: `
    <div class="input-div one">
      <div class="i">
          <fa-icon [icon]="['fas',icon]"></fa-icon>
      </div>
      <div class="div">
          <h5>{{name}}</h5>
          <input [(ngModel)] = "inputModel" [type]="type" (ngModelChange)="textChange()" class="input">
      </div>
    </div>
  `,
  styleUrls: ['./inputtext.component.scss']
})
export class InputtextComponent implements OnInit {
  @Input() name: string;
  @Input() icon: string;
  @Input() type: string;
  @Input() inputModel: string;
  @Output() inputModelChange = new EventEmitter<string>();
  constructor() { }

  textChange(){
    this.inputModelChange.emit(this.inputModel)
  }
  ngOnInit(): void {
    $(document).ready(() => {
      $('.input').on('focus', (e) => {
        $(e.currentTarget).parent().parent().addClass('focustext');
        $(e.currentTarget).parent().parent().addClass('focus');
      }).on('blur', (e) => {
        if (e.currentTarget.value == '') {
          $(e.currentTarget).parent().parent().removeClass('focustext');
        }
        $(e.currentTarget).parent().parent().removeClass('focus');
      });
    });
  }

}
