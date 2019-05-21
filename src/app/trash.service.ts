import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TrashService {

  constructor(private http: Http) { }

  createDaftar(nama_pelapor, nama_daerah, dsk) {
    return this.http.post('https://trashcare-server.herokuapp.com/api/daftar', {
      nama_pelapor,
      nama_daerah,
      dsk
    });
  }

  getDaftar() {
    return this.http.get('https://trashcare-server.herokuapp.com/api/daftar');
  }

  getSampahName(nm_sampah) {
    return this.http.get('https://trashcare-server.herokuapp.com/api/trashcare/' + nm_sampah);
  }

  deletedaftar(id_daftar) {
    return this.http.delete(`https://trashcare-server.herokuapp.com/api/daftar/${id_daftar}`);
  }

  search(nm_sampah) {
    return this.http.post('https://trashcare-server.herokuapp.com/api/trashcare/search', {
      nm_sampah
    });
  }
}
