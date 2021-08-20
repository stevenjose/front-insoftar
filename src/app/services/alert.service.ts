import { Injectable } from "@angular/core";
import swal from 'sweetalert2';

@Injectable()
export class AlertService{
  public Swall(title,position, icon,  timer){
    swal.fire({
      position: position,
      icon,
      title,
      showConfirmButton: false,
      timer
    });
  }
}
