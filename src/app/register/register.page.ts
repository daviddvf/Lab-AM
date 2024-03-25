import { Component, OnInit } from '@angular/core';
import { AutenticacionFireService } from '../service/autenticacion-fire.service';
import { Router } from '@angular/router';
import { Usuario } from '../interface/usuario';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: Usuario = new Usuario();

  constructor(
    private autSvc: AutenticacionFireService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async onRegister(){
    this.autSvc.onRegister(this.user).then(user=>{
      if(user){
        console.log('Successfully created user!');
        this.router.navigate(['/login']);
      }
    }).catch(error=>{
      console.log('Error al crear usuario!');
    })

  }
  onLogin(){
    this.router.navigate(["/login"]);
  }

}