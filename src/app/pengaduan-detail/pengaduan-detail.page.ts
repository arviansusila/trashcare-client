import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pengaduan-detail',
  templateUrl: './pengaduan-detail.page.html',
  styleUrls: ['./pengaduan-detail.page.scss'],
})
export class PengaduanDetailPage implements OnInit {
  data: any;
  constructor(private location: Location, public navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.data = this.navParams.data;
  }


  goBack() {
    this.modalController.dismiss();
  }
}
