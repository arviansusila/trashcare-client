import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';
import { TrashService } from '../trash.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-detail-sampah',
  templateUrl: './detail-sampah.page.html',
  styleUrls: ['./detail-sampah.page.scss'],
})
export class DetailSampahPage implements OnInit {
  data: any;
  constructor(private location: Location, public navParams: NavParams, private modalController: ModalController,public service: TrashService) {
   }
  ngOnInit() {
    this.data = this.navParams.data.data;
  }
  goBack() {
    this.modalController.dismiss();
  }
  
}
