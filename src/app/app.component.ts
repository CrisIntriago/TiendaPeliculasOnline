import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { TopbarComponent } from './shared/topbar/topbar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BacktotopComponent } from './shared/backtotop/backtotop.component';

import { IndexComponent } from './pages/index/index.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HttpClientModule } from  '@angular/common/http';

//Importación de la interfaz
import { Pelicula } from './interfaz/pelicula';

//Importación del servicio
import { DatospeliculaService } from './providers/datospelicula.service'

  @Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopbarComponent, NavbarComponent, FooterComponent, BacktotopComponent,
     IndexComponent, ContactComponent, CartComponent, DetailComponent, ShopComponent, CheckoutComponent, HttpClientModule],
  providers: [DatospeliculaService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'mpa'; 
  
}

