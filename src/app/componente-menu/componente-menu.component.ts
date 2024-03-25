import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interface/menu';
import { AutenticacionFireService } from '../service/autenticacion-fire.service';
import { MenuService } from 'src/app/service/menu.service';
import { Subscription } from 'rxjs';
import { onAuthStateChanged } from 'firebase/auth';
@Component({
  selector: 'app-componente-menu',
  templateUrl: './componente-menu.component.html',
  styleUrls: ['./componente-menu.component.scss'],
})
export class ComponenteMenuComponent  implements OnInit, OnDestroy {

  datosMenu: Menu[] =[
    {nombre: 'home',enlace:'/home',
    icono:'home-outline'},
    {nombre: 'Alumnos',enlace:'/alumnos',
  icono:'school-outline'},
    {nombre: 'Receteas',enlace:'/receta',
    icono:'restaurant-outline'},
    {nombre: 'Presupuesto',enlace:'/presupuesto',
    icono:'cash-outline'},
    {nombre: 'inicio',enlace:'/paso1',
    icono:'navigate-outline'},
    {nombre: 'Tabs',enlace:'/tabs',
    icono:'folder-outline'}
  ];

  titleMenu: string='home';

  public isLoged : any = false;

  public subscription : Subscription | undefined;

  constructor(
    private autService: AutenticacionFireService,
    private menuService: MenuService,
    private router: Router) { 
      this.subscription = this.menuService.$getTitleMenu.subscribe(data=>{
        console.log(data);
        this.titleMenu =data;
      });
    }
  ngOnDestroy(): void {
    if(this.subscription != null || this.subscription!= undefined){
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {}

  navegar(link: string, titleMenu: string){
    this.titleMenu =titleMenu;
    this.router.navigate([link]);
  }

  onMenuOpen(){
    onAuthStateChanged(this.autService.getStateAuth(), user=>{
      if(user!=null && user != undefined){
        this.datosMenu =[
          {nombre: 'Alumnos',enlace:'/alumnos',
    icono:'school-outline'},
      {nombre: 'Receteas',enlace:'/receta',
      icono:'restaurant-outline'},
      {nombre: 'inicio',enlace:'/inicio',
      icono:'navigate-outline'},
      {nombre: 'Tabs',enlace:'/tabs',
      icono:'folder-outline'},
      {nombre: 'login',enlace:'/login',
      icono:'log-in-outline'},
          {nombre: 'logout',enlace:'/home',
          icono:'log-out-outline'},
          {nombre: 'logout',enlace:'/home',
        icono:'home-outline'}
        ];

      }       
     else{
        this.datosMenu =[
          {nombre: 'login',enlace:'/login',
          icono:'log-in-outline'},
          {nombre: 'logout',enlace:'/home',
          icono:'log-out-outline'}
        ];
      }
    });
  }
}
