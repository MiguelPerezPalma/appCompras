import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from
'@angular/forms';
import { PresupuestosService } from '../../servicios/presupuestos.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editpres',
  templateUrl: './editpres.component.html',
  styleUrls: ['./editpres.component.css']
})
export class EditpresComponent implements OnInit {
  presupuestoForm!: FormGroup ;
  presupuesto: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;
  id: string="";
  constructor(private pf: FormBuilder,
    private presupuestoService: PresupuestosService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { 
      this.activatedRouter.params
    .subscribe( parametros => {
    this.id = parametros['id'];
    this.presupuestoService.getPresupuesto( this.id)
    .then( presupuesto => this.presupuesto = presupuesto)
    });
    }

  ngOnInit(): void {
    this.presupuestoForm = this.pf.group({
      proveedor: ['', Validators.required ],
      fecha: ['', Validators.required ],
      concepto: ['', [ Validators.required, Validators.minLength(10)] ],
      base: ['', Validators.required ],
      tipo: ['', Validators.required ],
      iva: this.iva ,
      total: this.total
      });
      this.onChanges();
  }
  onChanges(): void {
    this.presupuestoForm.valueChanges.subscribe(valor => {
    this.base = valor.base;
    this.tipo = valor.tipo;
    this.presupuestoForm.value.iva = this.base * this.tipo;
    this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
    });
  } 
}
