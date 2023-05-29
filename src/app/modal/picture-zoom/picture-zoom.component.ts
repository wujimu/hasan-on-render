import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-picture-zoom',
  templateUrl: './picture-zoom.component.html',
  styleUrls: ['./picture-zoom.component.scss'],
})
export class PictureZoomComponent implements OnInit {
 @Input() photo!: any;
  name!:string;
  constructor(private modalCtl: ModalController) { }

  ngOnInit() { }
  cancel() {
    return this.modalCtl.dismiss(null, 'cancel');
  }
  confirm() {
    return this.modalCtl.dismiss(this.name, 'confirm');

  }

}
