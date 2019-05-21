import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'detailuser', loadChildren: './detailuser/detailuser.module#DetailuserPageModule' },
  { path: 'listpengeduan', loadChildren: './listpengeduan/listpengeduan.module#ListpengeduanPageModule' },
  { path: 'pengaduan-detail', loadChildren: './pengaduan-detail/pengaduan-detail.module#PengaduanDetailPageModule' },
  { path: 'detail-sampah', loadChildren: './detail-sampah/detail-sampah.module#DetailSampahPageModule' },
  {
    path: 'tab2',
    children: [
      {
        path: '',
        loadChildren: '../tab2/tab2.module#Tab2PageModule'
      }
    ]
  },
  {
    path: 'tab3',
    children: [
      {
        path: '',
        loadChildren: '../tab3/tab3.module#Tab3PageModule'
      }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
