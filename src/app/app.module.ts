import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { ModalComponent } from './components/modal/modal.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';



@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, ModalComponent, SearchBarComponent],
  imports: [

    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule {}
