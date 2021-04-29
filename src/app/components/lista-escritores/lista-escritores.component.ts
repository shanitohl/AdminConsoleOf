import { Component, OnInit } from '@angular/core';
import { EscritoresService } from 'src/app/escritores.service';
import { Escritor } from 'src/app/models/escritor.model';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  arrEscritores: Escritor[];

  constructor(private escritoresService: EscritoresService) { }

  ngOnInit() {
    this.arrEscritores = this.escritoresService.getAll();
    console.log(this.arrEscritores);

    this.escritoresService.getAllpromise().then(escritores => {
      this.arrEscritores = escritores;
    })
  }

  async onChange($event) {
    if ($event.target.value === "todos") {
      this.arrEscritores = await this.escritoresService.getAll();
    } else {
      this.arrEscritores = await this.escritoresService.getByPais($event.target.value);
    }
  }

}
