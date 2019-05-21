import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroupDirective, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { DetailSampahPage } from '../detail-sampah/detail-sampah.page';
import { TrashService } from '../trash.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  carisampahForm: FormGroup;
  data = {
    nm_sampah: '',
  };
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    public modalController: ModalController,
    public service: TrashService,
    private toastController: ToastController) {
    this.carisampahForm = this.formBuilder.group({
      'carisampah': [null, Validators.required],
    });
  }
  ngOnInit() {
    this.service.getSampahName(this.data).subscribe(async response => {
      const data = await response.json();
      this.data = data;
    });
  }
  async presentModal() {
    this.service.search(this.data.nm_sampah).subscribe(async response => {
      const data = await response.json();
      const state = await this.modalController.create({
        component: DetailSampahPage,
        componentProps: {
          data
        }
      });
      return await state.present();
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Sampah tidak ditemukan',
      duration: 2000
    });
    toast.present();
  }
}
