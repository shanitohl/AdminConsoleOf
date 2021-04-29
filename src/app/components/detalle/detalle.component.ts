import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscritoresService } from 'src/app/escritores.service';
import { Escritor } from 'src/app/models/escritor.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  escritorDetalle: Escritor;

  constructor(private escritorService: EscritoresService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(async params => {
      this.escritorDetalle = await this.escritorService.getById(parseInt(params.escritorId));
    });


  }

}
