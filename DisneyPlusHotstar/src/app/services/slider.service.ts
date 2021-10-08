import { Slider } from "../models/slider.model";

export class SliderService {
    sliderData : Slider[] = [
        new Slider(
        'assets/slider/image1.jpg','Mission Mangal',
        "Based on the true story of India's finest scientists who rose above hardships and failures to make us the only country to reach Mars in its first attempt.",
        "Hindi","Drama",2021),
        new Slider('assets/slider/image2.jpeg','Zindagi Mere Ghar Aana',
        "Pritam assures Mansoor that he won't let any danger befall the Sakhujas. Later, Kabir's boss finds Dolly, who he thought was dead, leaving Kabir shocked!","StarPlus","Family",2021),
        new Slider('assets/slider/image3.jpg','Lift',
        "A usual working day turns unusual for Guru and Harini when they get trapped in their haunted office. A patterned game unlocks a mystery and a lift is their only way out.",
        "Tamil","Horror",2021),
        new Slider('assets/slider/image4.jpg','RadhaKrishn',
        "Saambh prevents Jara from leaving Dwarka to fulfill his evil intentions. Later, Jara insists to perform the Shakti Puja with Radha and Krishna.",
        "Hindi","Mythology",2021),
    ];
    getSliderData() {
    return this.sliderData;
    }

    getSliderKidsData() {
        return this.sliderData;
    }
}