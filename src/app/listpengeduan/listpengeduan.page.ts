import { Component, OnInit } from '@angular/core';
import { TrashService } from '../trash.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PengaduanDetailPage } from '../pengaduan-detail/pengaduan-detail.page';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listpengeduan',
  templateUrl: './listpengeduan.page.html',
  styleUrls: ['./listpengeduan.page.scss'],
})
export class ListpengeduanPage implements OnInit {
  data: any;
  constructor(private service: TrashService, private router: Router, private modalController: ModalController, private location: Location) { }

  ngOnInit() {
    this.getDaftar();
  }

  getDaftar() {
    this.service.getDaftar().subscribe(async response => {
      const data = await response.json();
      this.data = data;
    });
  }

  goBack() {
    this.location.back();
  }

  async presentModal(dt) {
    const state = await this.modalController.create({
      component: PengaduanDetailPage,
      componentProps: dt
    });
    return await state.present();
  }

  deletedaftar(id_daftar) {
    this.service.deletedaftar(id_daftar).subscribe(response => {
      this.getDaftar();
    });
  }
}
