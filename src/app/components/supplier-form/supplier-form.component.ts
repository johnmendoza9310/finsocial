import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.scss'],
})
export class SupplierFormComponent implements OnInit {
  public checked = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  start() {
    if (this.checked === false) {
      Swal.fire({
        icon: 'warning',
        text: 'Para continuar con el proceso de inscripción es necesario autorizar el tratamiento de datos y los términos y condiciones del sitio.!',
      });
    } else {
      this.router.navigateByUrl('supplier-data');
    }
  }
}
