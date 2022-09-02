import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  faBars = faBars;
  @Output() open: EventEmitter<any> = new EventEmitter();
  container = document.getElementsByClassName("container");

  constructor() { }

  ngOnInit(): void {
  }

  changeStyle($event:any){
    $event.type == 'mouseover'? this.container[0].classList.add('active') : this.container[0].classList.remove('active');
  }

}
