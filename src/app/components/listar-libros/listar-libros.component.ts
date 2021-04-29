import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from 'src/app/libros.service';
import { Libro } from 'src/app/models/libro.model';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {

  libros: Libro[];

  constructor(private librosService: LibrosService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.parent.params.subscribe(async param=>{
      this.libros = await this.librosService.getByEscritor(parseInt(param.escritorId));
    });

  }



}
