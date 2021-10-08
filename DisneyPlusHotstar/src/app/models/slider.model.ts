export class Slider {
    constructor(private image:string, private title : string,private description : string,private language : string, private genere : string,private year :number) {
        this.image = image;
        this.title = title;
        this.language = language;
        this.genere = genere;
        this.year = year;
        this.description = description;
    }
}