import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  party = 'Party';
  happyCat='https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg';
  sadCat = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg';
  urlImage = this.sadCat;
  
  changeLabelName() {
    if(this.party === 'Party'){
      this.party = 'sad';
      this.urlImage = this.sadCat;
    }
    else{
      this.party = 'Party';
      this.urlImage = this.happyCat;
    }
  }  

  constructor() {
    if(this.party === 'Party'){
      this.urlImage = this.happyCat;
    }
  }
}
