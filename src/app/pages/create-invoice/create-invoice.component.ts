import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {
  model: NgbDateStruct;

  //for table
  userTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;

  constructor(private fb: FormBuilder) {
    // this.userTable = new FormGroup({
    //   tipoComprobante: new FormControl('', [
    //     Validators.required
    //     //Validators.minLength(3)
    //   ]),
    //   serieInvoice: new FormControl('', [
    //     Validators.maxLength(10)
    //   ]),
    //   numeroInvoice: new FormControl('', [
    //     Validators.maxLength(10)
    //   ])
    //   // dni: new FormControl('', [
    //   //   Validators.maxLength(10)
    //   // ]),
    //   // password: new FormControl(),
    //   // repite_password: new FormControl(),
    //   // email: new FormControl('', [Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)])

    // });

    this.userTable = this.fb.group({
      tipoComprobante: new FormControl('', [
        Validators.required
        //Validators.minLength(3)
      ]),
      serieInvoice: new FormControl('', [
        Validators.maxLength(10)
      ]),
      numeroInvoice: new FormControl('', [
        Validators.maxLength(10)
      ]),
      dateInvoice: new FormControl('', [
        Validators.required
      ]),
      tableRows: this.fb.array([])
    });
  }

  ngOnInit() {
    this.touchedRows = [];
    // this.userTable = this.fb.group({
    //   tableRows: this.fb.array([]),

    // });
    this.addRow();
  }

  ngAfterOnInit() {
    this.control = this.userTable.get('tableRows') as FormArray;
  }

  initiateForm(): FormGroup {
    return this.fb.group({
      name: [''],
      email: [''],
      dob: [''],
      bloodGroup: [''],
      mobNumber: [''],
      isEditable: [true]
    });
  }

  addNewRow(){
    this.addRow();
  }

  addRow() {
    const control = this.userTable.get('tableRows') as FormArray;
    control.push(this.initiateForm());
  }

  deleteRow(index: number) {
    const control = this.userTable.get('tableRows') as FormArray;
    control.removeAt(index);
  }

  editRow(group: FormGroup) {
    group.get('isEditable').setValue(true);
  }

  doneRow(group: FormGroup) {
    group.get('isEditable').setValue(false);
  }

  saveUserDetails() {
    console.log(this.userTable.value);
  }

  get getFormControls() {
    const control = this.userTable.get('tableRows') as FormArray;
    return control;
  }

  submitForm() {
    const control = this.userTable.get('tableRows') as FormArray;
    this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
    console.log(this.touchedRows);
  }

  toggleTheme() {
    this.mode = !this.mode;
  }

}
