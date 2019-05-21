import { Component } from '@angular/core';
import { TrashService } from '../trash.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  nama: any;
  dsk: any;
  daerah: any;

  constructor(private service: TrashService, private toastController: ToastController) { }

  onSubmit() {
    this.service.createDaftar(this.nama, this.daerah, this.dsk).subscribe(response => {
      if (response) {
        this.presentToast();
      }
    })
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Berhasil menambah data',
      duration: 2000
    });
    toast.present();
  }
}
