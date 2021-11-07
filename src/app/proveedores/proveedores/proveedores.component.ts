import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})

export class ProveedoresComponent implements OnInit {
  public mensaje:String="";
  public proveedores:any;
  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.mensaje = this.proveedoresService.getProveedores( );
    this.proveedores = this.proveedoresService.getProveedores();
  }
  

}
