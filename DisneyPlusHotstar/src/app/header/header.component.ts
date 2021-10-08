import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginModalComponent } from '../login-modal/login-modal.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  modalRef?: BsModalRef;
  @ViewChild('tv_dropdown') tv_dropdown: ElementRef;
  @ViewChild('movies_dropdown') movies_dropdown : ElementRef;
  @ViewChild('sports_dropdown') sports_dropdown : ElementRef;
  @ViewChild('line_dropdown') line_dropdown : ElementRef;

  ngOnInit(): void {
    // const modalRef = this.modalService.open(LoginModalComponent,
    //   {
    //       scrollable : true,
    //       keyboard: false,
    //       backdrop: 'static',
    //       centered : true
    //   });
  }


  onMouseHover(value) {
    
    if(value == 'tv') {
      this.movies_dropdown.nativeElement.classList.remove('show');
      this.sports_dropdown.nativeElement.classList.remove('show');
      this.line_dropdown.nativeElement.classList.remove('show');
      this.tv_dropdown.nativeElement.classList.add('show');
    } 
    if(value == 'line') {
      this.tv_dropdown.nativeElement.classList.remove('show');
      this.movies_dropdown.nativeElement.classList.remove('show');
      this.sports_dropdown.nativeElement.classList.remove('show');
      this.line_dropdown.nativeElement.classList.add('show');
    } 
    if(value == 'movies') {
      this.sports_dropdown.nativeElement.classList.remove('show');
      this.tv_dropdown.nativeElement.classList.remove('show');
      this.line_dropdown.nativeElement.classList.remove('show');
      this.movies_dropdown.nativeElement.classList.add('show');
    }
    if(value == 'sports') {
      this.sports_dropdown.nativeElement.classList.add('show');
      this.tv_dropdown.nativeElement.classList.remove('show');
      this.line_dropdown.nativeElement.classList.remove('show');
      this.movies_dropdown.nativeElement.classList.remove('show');
    }
  }

  onMouseLeave() {
    this.tv_dropdown.nativeElement.classList.remove('show');
    this.movies_dropdown.nativeElement.classList.remove('show');
    this.sports_dropdown.nativeElement.classList.remove('show');
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
