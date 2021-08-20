import { Component } from "@angular/core";

interface Cliente {
  'nombre': string,
  'apellido': string
}

@Component({
  selector:"app-footer",
  templateUrl: './footer.component.html'
})

export class FooterComponent{
  public persona : Cliente = { nombre:'Jose G', apellido:"Lopez A"}
}
