import { Slider } from "../models/slider.model";

export class SliderService {
    sliderData : Slider[] = [
        new Slider('assets/slider/image1.jpg','Mission Mangal','dsd',
        "Based on the true story of India's finest scientists who rose above hardships and failures to make us the only country to reach Mars in its first attempt."),
        new Slider('assets/slider/image2.jpg','titlw2','dsd','ddas'),
        new Slider('assets/slider/image3.jpg','titlw3','dsd','ddas'),
        new Slider('assets/slider/image4.jpg','titlw4','dsd','ddas'),
    ];
    getSliderData() {
    return this.sliderData;
    }

    getSliderKidsData() {
        return this.sliderData;
    }
}