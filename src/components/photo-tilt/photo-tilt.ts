import { Component } from '@angular/core';

/*
  Generated class for the PhotoTilt component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'photo-tilt',
  templateUrl: 'photo-tilt.html'
})
export class PhotoTiltComponent {

  text: string;

  constructor() {
    console.log('Hello PhotoTilt Component');
    this.text = 'Hello World';
  }

}
