import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../service/receta.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detalle-receta',
  templateUrl: './detalle-receta.page.html',
  styleUrls: ['./detalle-receta.page.scss'],
})
export class DetalleRecetaPage implements OnInit {

  
  idReceta: number = 0;
  receta: any;
  private recetaService: RecetaService;
    private router: Router;
    private activateRouter: ActivatedRoute;

  constructor(private servicio: RecetaService,
    private routeador: Router,
    private rutaActiva: ActivatedRoute) { 
      this.activateRouter = rutaActiva;
      this.router = routeador;
      this.recetaService = servicio;
    }

  ngOnInit() {
    this.activateRouter.paramMap.subscribe((paramMap: any)=>{
      this.idReceta = Number.parseInt(paramMap.get('idReceta'));
      this.receta = this.recetaService.getReceta(this.idReceta);
    });
  }


}
