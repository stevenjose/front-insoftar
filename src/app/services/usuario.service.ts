import { Injectable } from "@angular/core";
import { Usuarios } from '../components/usuarios/usuarios';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Gustos } from '../components/usuarios/gustos';

import { map, catchError } from 'rxjs/operators';
import { of, Observable, throwError  } from "rxjs";
import { AlertService } from './alert.service';

@Injectable()
export class UsuarioService {
  private urlUsuarios = 'http://localhost:8080/api/v1/usuarios';
  private urlUsuariosById = 'http://localhost:8080/api/v1/usuarios';
  private urlGustos = 'http://localhost:8080/api/v1/gustos';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private mensajeError ='';
  constructor(private http: HttpClient, private alert: AlertService){

  }

  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.urlUsuarios);
  }

  getGustos(): Observable<Gustos[]> {
    return this.http.get<Gustos[]>(this.urlGustos);
  }

  postUsuario(usuario: Usuarios): Observable<Usuarios[]> {
    return this.http.post<Usuarios[]>(this.urlUsuarios, usuario, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        this.mensajeError ='Error al crear usuario'+e.error.error;
        this.alert.Swall(this.mensajeError, 'center','error', 2500);
        return throwError(e);
      })
    );
  }

  putUpateUsuario(usuario: Usuarios): Observable<Usuarios[]> {
    return this.http.put<Usuarios[]>(this.urlUsuarios, usuario, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        this.alert.Swall('Error al crear usuario', 'center','error', 2500);
        return throwError(e);
      })
    );
  }

  getUsuarioByID(usuario: Usuarios): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.urlUsuarios+'/'+usuario.id);
  }
}
