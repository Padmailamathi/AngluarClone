import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tray',
  templateUrl: './tray.component.html',
  styleUrls: ['./tray.component.css']
})
export class TrayComponent implements OnInit {
  tray_list = [
    {
      'tray_name' : 'Latest & Trending',
      'slides' : [
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
      ]
    },
    {
      'tray_name' : 'Popular Shows',
      'slides' : [
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/907/840907-v"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/1807/1100001807/1100001807-v"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9261/889261-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8946/38946-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/830896-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8745/958745-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2604/742604-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8934/768934-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7787/967787-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7382/927382-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3953/673953-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6842/336842-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8899/768899-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9261/889261-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6842/336842-v"},  
      ]
    },
    {
      'tray_name' : 'Movies Recommended For You',
      'slides' : [
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8285/388285-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6699/1026699-v-cb786ee970de"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5953/525953-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3085/723085-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4740/14740-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_…x/sources/r1/cms/prod/9834/1059834-v-dd2945abe9bd"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_…mages/vertical/MOVIE/1777/1000071777/1000071777-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5085/635085-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_…x/sources/r1/cms/prod/7444/1057444-v-8d2e26a0ee73"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7309/177309-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_…mages/vertical/MOVIE/7393/1000087393/1000087393-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_…mages/vertical/MOVIE/3314/1770003314/1770003314-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8537/568537-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_…mages/vertical/MOVIE/6247/1770016247/1770016247-v"},
      ]
    },
    {
      'tray_name' : 'New on Disney+ Hotstar',
      'slides' : [
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9873/1059873-v-2c49a039c4e7"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9469/1059469-v-5fc5a0f8f93d"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8963/1058963-v-f914104e85e2"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7848/997848-v"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7279/1057279-v-59dd485016b1"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7444/1057444-v-8d2e26a0ee73"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6136/1056136-v-31bb7d4b043b"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2142/1052142-v-7280124e77a1"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4761/1054761-v-47908eeb5f24"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4554/1054554-v-3fc2701ee988"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4777/1054777-v-9606bc3f9976"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2617/882617-v"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8963/1058963-v-f914104e85e2"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4761/1054761-v-47908eeb5f24"},
      ]
    },
    {
      'tray_name' : 'Loved By Cricket Lovers',
      'slides' : [
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
      ]
    },
    {
      'tray_name' : '2021 Emmy Winners',
      'slides' : [
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/907/840907-v"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/1807/1100001807/1100001807-v"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9261/889261-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8946/38946-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/830896-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8745/958745-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2604/742604-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8934/768934-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7787/967787-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7382/927382-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3953/673953-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6842/336842-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8899/768899-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9261/889261-v"},  
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6842/336842-v"},  
      ]
    },
    {
      'tray_name' : 'Quix Shows',
      'slides' : [
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8285/388285-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6699/1026699-v-cb786ee970de"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5953/525953-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3085/723085-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4740/14740-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_…x/sources/r1/cms/prod/9834/1059834-v-dd2945abe9bd"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_…mages/vertical/MOVIE/1777/1000071777/1000071777-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5085/635085-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_…x/sources/r1/cms/prod/7444/1057444-v-8d2e26a0ee73"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7309/177309-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_…mages/vertical/MOVIE/7393/1000087393/1000087393-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_…mages/vertical/MOVIE/3314/1770003314/1770003314-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8537/568537-v"},
        {image : "https://img1.hotstarext.com/image/upload/f_auto,t_…mages/vertical/MOVIE/6247/1770016247/1770016247-v"},
      ]
    },
    {
      'tray_name' : 'Best of Kids',
      'slides' : [
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3126/1003126-v"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/748/1000748-v"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3423/753423-h"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3556/753556-v"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6731/676731-v"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6692/736692-v"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7373/697373-v"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7850/677850-v"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7845/677845-v"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7845/677845-v"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7861/677861-v"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7850/677850-v"},
        {image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3556/753556-v"},
      ]
    }
  ]
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
