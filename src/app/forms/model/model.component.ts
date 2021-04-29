import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl('', [
        Validators.maxLength(10)
      ]),
      edad: new FormControl('', [
        this.edadValidator
      ]),
      dni: new FormControl('', [
        this.dniValidator
      ]),
      password: new FormControl(),
      repite_password: new FormControl(),
      email: new FormControl('', [Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)])

    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formulario);
  }

  edadValidator(formControl) {
    const value = formControl.value;
    console.log(value);
    const max = 65;
    const min = 18;
    if (value >= min && value <= max)
      return null;
    else
      return { edadValidator: { max, min } };

  }

  dniValidator(formControl) {
    const value = formControl.value;
    const ex_regular_dni = /^\d{8}(?:[-\s]\d{4})?$/;
    if (ex_regular_dni.test(value) == true) {
      const numero = value.substr(0, value.length - 1)
      const letra = value.charAt(value.length - 1)
      console.log(numero, letra);
      const calculo = numero % 23;
      return null;
    }
    else
      return { dniValidator: "la letra no coincide con el numero." };

  }

}
