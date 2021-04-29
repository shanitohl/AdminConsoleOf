import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ExcelServiceService } from 'src/app/helpers/excel-service.service';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-list-invoices-ose',
  templateUrl: './list-invoices-ose.component.html',
  styleUrls: ['./list-invoices-ose.component.css']
})
export class ListInvoicesOseComponent implements OnInit {
  _fb: FormGroup;
  dateFrom: NgbDateStruct;
  dateTo: NgbDateStruct;
  arrInvoice: any[];

  constructor(private orgService: OrganizationService,
    private _fbu: FormBuilder,
    private excelService: ExcelServiceService) {
    this._fb = this._fbu.group({
      dateFrom: [null, [Validators.required]],
      dateTo: [null, [Validators.required]],
      sendOse: [true]
    });
    this.arrInvoice = [];
  }

  async ngOnInit() {

    // await this.gelInvoicesOse({
    //   dateFrom: "2019-08-01T05:00:00.000Z"
    //   , dateTo: "2020-10-30T05:00:00.000Z"
    //   , sendOse: true
    // });

    //console.log("Data : "+this.arrInvoice);
  }

  onSearch() {
    if (this._fb.valid) {
      //console.log(this._fb.value);
      const dateFrom = this._fb.controls["dateFrom"].value;
      const dateTo = this._fb.controls["dateTo"].value;
      // const date = new Date(dateFrom.year, dateFrom.month - 1, dateFrom.day);
      // const date1 = new Date(dateTo.year, dateTo.month - 1, dateTo.day);
      // console.log("date from :" + JSON.stringify(dateFrom) + "  --> " + date);
      // console.log("date to :" + JSON.stringify(dateTo) + "  --> " + date1);
      this.gelInvoicesOse({
        dateFrom: new Date(dateFrom.year, dateFrom.month - 1, dateFrom.day),
        dateTo: new Date(dateTo.year, dateTo.month - 1, dateTo.day),
        sendOse: this._fb.controls["sendOse"].value
      })
    }
  }
  async gelInvoicesOse(params) {
    console.log("Paramss :" + JSON.stringify(params));
    this.arrInvoice = await this.orgService.getAllInvoices(params);
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.arrInvoice, 'sample');
  }

  toggled(event) {
    if (event) {
      console.log('is open');
    } else {
      console.log('is closed');
    }
  }
}
