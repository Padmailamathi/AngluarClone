import { Component, OnInit } from '@angular/core';
import { Slider } from '../models/slider.model';
import { SliderService } from '../services/slider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // slides = [
  //   {img: "assets/slider/image1.jpg"},
  //   {img: "assets/slider/image2.jpg"},
  //   {img: "assets/slider/image3.jpg"},
  //   {img: "assets/slider/image4.jpg"},  
  //   {img: "assets/slider/image5.jpg"},  
  // ];
  slides : Slider[];
  

  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1 ,
    "autoplay": false,
    "autoplaySpeed": 1500,
    
  };

  constructor(private slider : SliderService) { }

  ngOnInit(): void {
    this.slides = this.slider.getSliderData();
    this.slides = this.slider.getSliderKidsData();
  }

 

}
