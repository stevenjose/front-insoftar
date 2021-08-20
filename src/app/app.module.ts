import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { ContainerComponent } from './template/container/container.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioService } from './services/usuario.service';

import { HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms'
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsuarioService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
