import { Injectable } from '@angular/core';
import { ESCRITORES } from './db/escritores.db'
import { Escritor } from './models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll(): Escritor[] {
    return ESCRITORES;
  }

  getAllpromise(): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES);
    });
  }

  getByPais(pPais: string): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      const arrFiltado = ESCRITORES.filter(escritor => {
        return escritor.pais === pPais;
      })
      resolve(arrFiltado);
    });
  }

  getById(escritorId: number): Promise<Escritor> {
    return new Promise((resolve, reject) => {
      const escritorFound = ESCRITORES.find(escritor => {
        return escritor.id === escritorId;
      });
      resolve(escritorFound);
    });
  }

}
