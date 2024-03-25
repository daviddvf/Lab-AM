import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interface/usuario'; 
import { AutenticacionFireService } from '../service/autenticacion-fire.service';
import { Router } from '@angular/router';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: Usuario = new Usuario();

  constructor(
    private router: Router,
    private autSvc: AutenticacionFireService,
    private menuService: MenuService
  ) { }

  ngOnInit() {
  }

  async onLogin(){
    this.autSvc.onLogin(this.user).then((user:any)=>{
      if(user!=null && user.code ==undefined){
        console.log('Successfully logged in!');
        this.menuService.setTitle("presupuesto");
        this.router.navigate(['/presupuesto']);
      }
      else{
        if(user.code){
          if(user.code=='auth/wrong-password' || user.code =='auth/invalid-email' || user.code=='auth/argument-error'){
            this.openModal(user);
          }
        }
      }
    }).catch((error: any)=>{
      this.openModal(error);
    })

  }

  async openModal(user: any){
    console.error(user);
  }

  onRegister(){
    this.router.navigate(['/register']);
  }
}






