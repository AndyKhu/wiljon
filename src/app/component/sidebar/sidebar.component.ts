import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  tools: string[] = ['fas', 'compress-arrows-alt'];

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
      $('#sidebar__container').on('mouseover', () => {
        if ($('.sidebar').hasClass('toggled')) {
          $('#sidebar').addClass('sidebar__is-hover');
        }
      }).on('mouseout', () => {
        $('#sidebar').removeClass('sidebar__is-hover');
      });
    });
  }

  toggleF() {
    $('.sidebar').toggleClass('toggled');
    $('.ai_container').toggleClass('toggled');
    $('.sidebar').hasClass('toggled') ? this.tools = ['fas', 'expand-arrows-alt'] : this.tools = ['fas', 'compress-arrows-alt'];
  }
}
