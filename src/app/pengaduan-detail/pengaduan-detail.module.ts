import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PengaduanDetailPage } from './pengaduan-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PengaduanDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PengaduanDetailPage]
})
export class PengaduanDetailPageModule {}
