import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  words: string[] = new Array();
  word: string;
  boxwidth: number;
  tempwords: string[] = new Array();
  rerun: boolean;

  constructor() {
    this.words = [
      'Windstorm','Bombasto','Magneta','Tornado', 
      'Windstorm','Bombasto','Magneta','Tornado',
      'Windstorm','Bombasto','Magneta','Tornado',
      'Windstorm','Bombasto','Magneta','Tornado'
    ];
    this.boxwidth = 100;
    this.rerun = true;
    this.word = '';
  }

  
  onCountWidth(word: string, i: number) {
      this.boxwidth -= word.length
      if(!this.rerun){
        this.tempwords = [];
        this.rerun = true;
      }
      if(this.boxwidth > 0){
        this.tempwords[i] = word;
        return;
      } else if(this.boxwidth === 0 || this.boxwidth < 0) {
        this.tempwords[i] = word;
        this.boxwidth = 100;
        this.rerun = false;
        return this.tempwords.join(" ");
      }
  }

}
