import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-subscribe-header',
  templateUrl: './subscribe-header.component.html',
  styleUrls: ['./subscribe-header.component.css']
})
export class SubscribeHeaderComponent implements OnInit {

  constructor(private modalService:NgbModal) { }
  isOpen = false;
  @ViewChild('dropdown_down') dropdown_down : ElementRef
  ngOnInit(): void {
  }
  onDropDownOpen() {
    this.isOpen = !this.isOpen;
    if(this.isOpen) {
      this.dropdown_down.nativeElement.classList.remove('dropdown-up');
      this.dropdown_down.nativeElement.classList.add('dropdown-down');
    } else {
      this.dropdown_down.nativeElement.classList.remove('dropdown-down');
      this.dropdown_down.nativeElement.classList.add('dropdown-up');
    }
  }

  onClickLogin() {
    const modalRef = this.modalService.open(LoginModalComponent,
      {
          scrollable : true,
          keyboard: false,
          backdrop: 'static',
          centered : true
      });
  }
  
}
