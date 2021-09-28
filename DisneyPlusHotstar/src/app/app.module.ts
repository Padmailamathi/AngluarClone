import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IsDropDownOpenDirective } from './is-drop-down-open.directive';
import { DropDownOpenDirective } from './drop-down-open.directive';
import { HomeComponent } from './home/home.component';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderService } from './services/slider.service';
import { FormsModule } from '@angular/forms';
import { TrayComponent } from './tray/tray.component';
import { TrayRecommendComponent } from './tray-recommend/tray-recommend.component';
import { SliderContentComponent } from './slider-content/slider-content.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscribeHeaderComponent } from './subscribe-header/subscribe-header.component';
import { SubscribeBodyComponent } from './subscribe-body/subscribe-body.component';
import { ButtonSelectedDirective } from './button-selected.directive';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IsDropDownOpenDirective,
    DropDownOpenDirective,
    HomeComponent,
    ImgSliderComponent,
    TrayComponent,
    TrayRecommendComponent,
    SliderContentComponent,
    SubscribeComponent,
    SubscribeHeaderComponent,
    SubscribeBodyComponent,
    ButtonSelectedDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SlickCarouselModule,
    FormsModule
  ],
  providers: [SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
