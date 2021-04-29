import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-list-invoices',
  templateUrl: './list-invoices.component.html',
  styleUrls: ['./list-invoices.component.css']
})
export class ListInvoicesComponent implements OnInit {

  arrInvoice: any[];
  // pager object
  page: number; totalCount: number; previousPage: any;
  // paged items
  pageSize: number;



  constructor(private invoiceService: InvoiceService) {
    this.page = 1;
    this.pageSize = 10;
    this.totalCount = 100;
  }

  async ngOnInit() {
    this.loadData();
    // this.pager = 1;
    // this.pagedItems = 15;
    //console.log(this.arrInvoice);
    //this.setPage(1);
  }

  async pageChange($event) {
    if (this.page !== this.previousPage) {
      this.previousPage = this.page;
      this.loadData();
    }


    // const res = await this.invoiceService.getAll();
    // this.arrInvoice = res.data;
    // console.log(res);
    // console.log(this.arrInvoice);
    //this.totalCount = res.totalCount > 1000 ? 1000 : res.totalCount;
  }

  async loadData() {
    const res = await this.invoiceService.getAll({ page: this.page, size: this.pageSize });
    // console.log("Cambiando de pagina :" + this.page + " pageSize: " + this.pageSize);
    // console.log(res);
    this.arrInvoice = res.data;
    this.totalCount = res.totalCount > 1000 ? 1000 : res.totalCount;
  }


  toggled(event) {
    if (event) {
      console.log('is open');
    } else {
      console.log('is closed');
    }
  }
}
