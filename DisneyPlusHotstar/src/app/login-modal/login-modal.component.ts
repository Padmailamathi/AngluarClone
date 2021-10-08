import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit{
  
  @ViewChild('login_top') login_top : ElementRef
  @ViewChild('footer') footer : ElementRef
  
  login_text = 'Login to continue';
  LoginForm : FormGroup;
  constructor(private activeModal:NgbActiveModal) {}
  
  ngOnInit() {
    
    this.LoginForm = new FormGroup({
      'mobile_number' : new FormControl(null,[
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10)])
    });
  }

  onTypeInput() {
    this.login_top.nativeElement.classList.add('hidden');
    this.footer.nativeElement.classList.add('show');
    this.login_text = 'Continue using Phone';
    
  }

  onLogin() {
    console.log("Das ");
    
  }

  onCloseModal() {
    this.activeModal.close();
  }
}