import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  constructor(private db:AngularFireDatabase) { }
  postPresupuesto( presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({ 
    'Content-Type': 'application/json'
    });
    return this.db
    .database.ref()
    .child("presupuesto")
    .push(presupuesto);

  }
  getPresupuestos () {
    
    return this.db.database.ref().child("presupuesto").get();
     
    }

    getPresupuesto ( id$: string )  {
      
      return this.db.database.ref().child("presupuesto").get();
      }
      
    putPresupuesto( presupuesto: any, id$: string) { 
      
      this.db.database.ref().child("presupuesto").set(presupuesto);
      }
    delPresupuesto ( id$: string ) {
      this.db.database.ref().child("presupuesto").remove();
      }
      
}
