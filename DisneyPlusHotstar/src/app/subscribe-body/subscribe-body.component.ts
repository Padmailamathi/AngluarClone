import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-subscribe-body',
  templateUrl: './subscribe-body.component.html',
  styleUrls: ['./subscribe-body.component.css']
})
export class SubscribeBodyComponent implements OnInit,AfterViewInit {

  
  constructor(private cdr: ChangeDetectorRef) { }
  @ViewChild('tick_pre') tick_pre : ElementRef
  @ViewChild('tick_super') tick_super : ElementRef
  @ViewChild('defaultSelected') defaultSelected : ElementRef<HTMLElement>
  @ViewChild('defaultSelectedPre') defaultSelectedPre : ElementRef
  ngOnInit(): void {
      
  }

  onSubSelect(sub) {
    if(sub == 'pre') {
      this.tick_pre.nativeElement.classList.remove('hidden');
      this.tick_pre.nativeElement.classList.add('show-icon');
      this.tick_super.nativeElement.classList.add('hidden');
      this.defaultSelected.nativeElement.classList.remove('selected');
      this.defaultSelectedPre.nativeElement.classList.add('selected');
    } else {
      this.tick_super.nativeElement.classList.remove('hidden');
      this.tick_super.nativeElement.classList.add('show-icon');
      this.tick_pre.nativeElement.classList.add('hidden');
      this.defaultSelected.nativeElement.classList.add('selected');
      this.defaultSelectedPre.nativeElement.classList.remove('selected');
    }
  }

  ngAfterViewInit(): void {
    let el: HTMLElement = this.defaultSelected.nativeElement;
    el.click();
    this.cdr.detectChanges();
  }
}