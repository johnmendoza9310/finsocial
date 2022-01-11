import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-supplier-data',
  templateUrl: './supplier-data.component.html',
  styleUrls: ['./supplier-data.component.scss'],
})
export class SupplierDataComponent implements OnInit {
  public userForm: FormGroup;
  public error: boolean = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.userForm = this.formBuilder.group(
      {
        supplierName: ['', [Validators.required, Validators.minLength(1)]],
        supplierLastName: ['', [Validators.required, Validators.minLength(1)]],
        supplierDocument: ['', [Validators.required, Validators.minLength(1)]],
        supplierAddres: ['', [Validators.required, Validators.minLength(1)]],
        supplierCity: ['', [Validators.required, Validators.minLength(1)]],
        supplierPhoneNumber: ['', [Validators.required, Validators.minLength(1)],],
        supplierEmail: ['', [Validators.required, Validators.minLength(1)]],
        supplierProduct: ['', [Validators.required, Validators.minLength(1)]],
        name: ['', [Validators.required, Validators.minLength(1)]],
        lastname: ['', [Validators.required, Validators.minLength(1)]],
        position: ['', [Validators.required, Validators.minLength(1)]],
        email: ['', [Validators.required, Validators.minLength(1)]],
        phoneNumber: ['', [Validators.required, Validators.minLength(1)]],
      },

      {
        updateOn: 'change',
      }
    );
  }

  sendForm() {
    if (this.userForm.valid) {

      this.error = true;
    }

    if (this.userForm.invalid) {
      this.error = false;

    }
  }
}
