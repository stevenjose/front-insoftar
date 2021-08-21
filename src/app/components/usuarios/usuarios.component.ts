import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../models/usuarios';
import { UsuarioService } from '../../services/usuario.service';
import { Gustos } from '../../models/gustos';
import { NgForm } from '@angular/forms';
import {AlertService} from "../../services/alert.service";


interface Titles {
  titleH1: String;
  titleBtn: String;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarios: Usuarios[];

  public gustos: Gustos[];

  public usuario: Usuarios = new Usuarios();

  public errors: [];

  public title : Titles;

  public formUsuario = false;


  constructor(private serviceUsuario: UsuarioService, private alert: AlertService ) {

  }

  ngOnInit(): void {
    this.titulo('Crear', 'Guardar');
    this.serviceUsuario.getUsuarios().subscribe(
      (usuarios) => {
        this.usuarios = usuarios;
      }
    );
    this.serviceUsuario.getGustos().subscribe(
      (gustos) => {
        this.gustos = gustos;
      }
    );
  }

  public create(form: NgForm): void {

    if(this.usuario.id){
      console.log('update');
      this.serviceUsuario.putUpateUsuario(this.usuario).subscribe(
        usuarios => {
          this.alert.Swall('Se ha actualiazo sastifactoriamente el usuario','center','success', 2500);
          this.usuario = new Usuarios();
          this.formUsuario = false;
          this.ngOnInit();
        }
      )
    }else{
      this.serviceUsuario.postUsuario(this.usuario).subscribe(
        usuarios => {
          this.alert.Swall('Se ha creado sastifactoriamente el usuario','center','success', 2500);
          this.usuario = new Usuarios();
          this.formUsuario = false;
          this.ngOnInit();
        }
      )
    }
  }

  public cargar(usuario: Usuarios): void {
    this.titulo('Actualizar', 'Modificar');
    this.usuario = usuario;
    this.formUsuario = true;
  }

  public compareUsuario(o1:Gustos, o2:Gustos){
    return o1 === undefined || o2 === undefined ? false : o1.id === o2.id;
  }

  public titulo(titleH1: string, titleBtn: string){
    this.title = {
      titleH1,
      titleBtn
    }
    return this.title;
  }

  public formUser(){
    this.formUsuario = true;
    this.titulo('Crear', 'Guardar');
    this.usuario = new Usuarios();
    console.log(this.formUsuario );
  }

}
