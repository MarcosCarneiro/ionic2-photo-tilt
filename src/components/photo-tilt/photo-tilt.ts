import { Component, Input, ViewChild, Renderer } from '@angular/core';
import { Platform, DomController } from 'ionic-angular';

@Component({
  selector: 'photo-tilt',
  templateUrl: 'photo-tilt.html',
  host: {
    '(window:deviceorientation)': 'onDeviceOrientation($event)',
    '(window:resize)': 'initTilt()'
  }
})
export class PhotoTiltComponent {

  @Input('tiltImage') tiltImage: any;
  @Input('tiltHeight') tiltHeight: any;

  @ViewChild('mask') mask: any;
  @ViewChild('image') image: any;

  averageGamma: any = [];
  maxTilt: number = 20;
  latestTilt: any = 0;
  centerOffset: any;
  resizedImageWidth: any;
  aspectRatio: any;
  delta: any;
  height: any;
  width: any;

  constructor(public platform: Platform, public domCtrl: DomController, public renderer: Renderer) {

  }

  initTilt(){

  }

  renderTilt(){

  }

  onDeviceOrientation(ev){

  }

  updatePosition(){

  }

  updateTiltImage(pxToMove){

  }
  
}
