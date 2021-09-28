import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tray-recommend',
  templateUrl: './tray-recommend.component.html',
  styleUrls: ['./tray-recommend.component.css']
})
export class TrayRecommendComponent implements OnInit {

  slides = [
    {image: "assets/tray/image1.jpg"},
    {image: "assets/tray/image2.jpg"},
    {image: "assets/tray/image3.jpg"},
    {image: "assets/tray/image4.jpg"},  
    {image: "assets/tray/image5.jpg"},  
    {image: "assets/tray/image6.jpg"},  
    {image: "assets/tray/image7.jpg"},  
    {image: "assets/tray/image8.jpg"},  
    {image: "assets/tray/image9.jpg"},  
    {image: "assets/tray/image10.jpg"},  
    {image: "assets/tray/image11.jpg"},  
    {image: "assets/tray/image12.jpg"},  
    {image: "assets/tray/image13.jpg"},  
    {image: "assets/tray/image14.jpg"},  
    {image: "assets/tray/image15.jpg"},  
  ];
  
  slideConfig = {
    "slidesToShow": 8, 
    "slidesToScroll": 8,
    // "autoplay": true,
    // "autoplaySpeed": 1500,
    "dots": true,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
