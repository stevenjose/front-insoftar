import { Component, OnInit } from '@angular/core';
import { Usuarios } from './usuarios';
import { UsuarioService } from '../../services/usuario.service';
import { Gustos } from './gustos';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';


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


  constructor(private serviceUsuario: UsuarioService ) {

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
          this.Swall('Se ha actualiazo sastifactoriamente el usuario','center','success', 2500);
          this.usuario = new Usuarios();
          this.ngOnInit();
        }
      )
    }else{
      this.serviceUsuario.postUsuario(this.usuario).subscribe(
        usuarios => {
          this.Swall('Se ha creado sastifactoriamente el usuario','center','success', 2500);
          this.usuario = new Usuarios();
          this.ngOnInit();
        }
      )
    }
  }

  public cargar(usuario: Usuarios): void {
    this.titulo('Actualizar', 'Modificar');
    this.usuario = usuario;
    console.log('Usuario',this.usuario);
  }

  public Swall(title,position, icon,  timer){
    swal.fire({
      position: position,
      icon,
      title,
      showConfirmButton: false,
      timer
    });
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

}
