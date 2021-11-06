import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService{

  public peliculas: PeliculaDetalle[] = [];

  constructor(private storage: Storage,
              public toastController: ToastController) {

    this.storage.create();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  guardarPelicula(pelicula: PeliculaDetalle){

    let existe  = false;
    let mensaje = '';

    for(const peli of this.peliculas){
      if (peli.id === pelicula.id) {
        existe = true;
        break;
      }
    }

    if (existe) {
      this.peliculas = this.peliculas.filter(peli => peli.id !== pelicula.id);
      mensaje = 'Removido de favoritos';
    }else {
      this.peliculas.push(pelicula);
      mensaje = 'Agregada a favoritos';
    }

    this.presentToast(mensaje);
    this.storage.set('peliculas', this.peliculas);

  }
}
