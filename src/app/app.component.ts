import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
import { Modal } from './models/modal.model';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arrayImg: Array<any> = [
    {
      title: 'Programacion',
      src: './assets/img/services/programacion.png',
      color: '#006BA6D4',
    },
    {
      title: 'Logistica',
      src: './assets/img/services/logistica.png',
      color: '#D1495BD4',
    },
    {
      title: 'Edicion de fotos',
      src: './assets/img/services/edicion.png',
      color: '#EDAE49D4',
    },
    {
      title: 'Electrónica',
      src: './assets/img/services/electronica.png',
      color: '#006BA6D4',
    },
    {
      title: 'Programacion',
      src: './assets/img/services/programacion.png',
      color: '#006BA6D4',
    },
    {
      title: 'Logistica',
      src: './assets/img/services/logistica.png',
      color: '#D1495BD4',
    },
    {
      title: 'Edicion de fotos',
      src: './assets/img/services/edicion.png',
      color: '#EDAE49D4',
    },
    {
      title: 'Electrónica',
      src: './assets/img/services/electronica.png',
      color: '#006BA6D4',
    },
  ];
  arrayProducts: Array<any> = [
    {
      title: 'Crema',
      src: './assets/img/products/crema.png',
      color: '#006BA6D4',
    },
    {
      title: 'Celular',
      src: './assets/img/products/celular.png',
      color: '#006BA6D4',
    },
    {
      title: 'Llanta',
      src: './assets/img/products/llanta.png',
      color: '#006BA6D4',
    },
    {
      title: 'Saco',
      src: './assets/img/products/saco.png',
      color: '#006BA6D4',
    },
    {
      title: 'Crema',
      src: './assets/img/products/crema.png',
      color: '#006BA6D4',
    },
    {
      title: 'Celular',
      src: './assets/img/products/celular.png',
      color: '#006BA6D4',
    },
    {
      title: 'Llanta',
      src: './assets/img/products/llanta.png',
      color: '#006BA6D4',
    },
    {
      title: 'Saco',
      src: './assets/img/products/saco.png',
      color: '#006BA6D4',
    },
  ];

  arrayLikeVendor: Array<any> = [
    {
      title: 'Atencion',
      src: './assets/img/likevendor/atencion.svg',
      color: '#006BA6D4',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    },
    {
      title: 'Contrato',
      src: './assets/img/likevendor/contract.svg',
      color: '#006BA6D4',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    },
    {
      title: 'Pagos',
      src: './assets/img/likevendor/pagos.svg',
      color: '#006BA6D4',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    },
    {
      title: 'Servicio',
      src: './assets/img/likevendor/servicio.svg',
      color: '#006BA6D4',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    },
  ];

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    breakpoints: {
      400: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  };

  constructor(public matDialog: MatDialog) {}

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.hasBackdrop = false;
    dialogConfig.data = new Modal(
      '¡Titulo!',
      'error',
      'Espacio para mostrar un mensaje de error',
      ''
    );
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }
}
