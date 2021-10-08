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
  // @ViewChild('super_plan') super_plan : ElementRef
  // @ViewChild('premium_plan') premium_plan : ElementRef
  sub = 'super';
  isCurrentPlan ;
  isCurrentPlanPre;
  ngOnInit(): void {
      
  }

  onSubSelect(sub) {
    if(sub == 'pre') {
      this.sub = 'premium';
      this.tick_pre.nativeElement.classList.remove('hidden');
      this.tick_pre.nativeElement.classList.add('show-icon');
      this.tick_super.nativeElement.classList.add('hidden');
      this.defaultSelected.nativeElement.classList.remove('selected');
      this.defaultSelectedPre.nativeElement.classList.add('selected');
      // this.super_plan.nativeElement.classList.add('current_plan');
      // this.premium_plan.nativeElement.classList.remove('current_plan');
      this.isCurrentPlanPre = true;
      this.isCurrentPlan = false;
    } else {
      this.sub = 'super';
      this.tick_super.nativeElement.classList.remove('hidden');
      this.tick_super.nativeElement.classList.add('show-icon');
      this.tick_pre.nativeElement.classList.add('hidden');
      this.defaultSelected.nativeElement.classList.add('selected');
      this.defaultSelectedPre.nativeElement.classList.remove('selected');
      // this.super_plan.nativeElement.classList.remove('current_plan');
      // this.premium_plan.nativeElement.classList.add('current_plan');
      this.isCurrentPlan = true;
      this.isCurrentPlanPre = false;
    }
  }

  ngAfterViewInit(): void {
    let el: HTMLElement = this.defaultSelected.nativeElement;
    el.click();
    this.cdr.detectChanges();
  }
}