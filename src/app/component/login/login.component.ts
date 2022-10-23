import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/data/localstorage.service';


@Component({
  selector: 'app-login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private localstorage:LocalstorageService,
    //importamos modulo para utilizar la alerta
    public alertController:AlertController,
    //implementamos modulo para utilizar la navegacion
    public navController: NavController,
    private router:Router
  ) {
    this.loginForm = this.formbuilder.group({ 
      nombreUsuario : new FormControl("",Validators.compose([
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(8)
      ])),

        contrasenia : new FormControl("",Validators.compose([
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(7)

        ]))

    });
   }

   get nombreUsuario() { return this.loginForm.get('nombreUsuario');}
   get contrasenia() { return this.loginForm.get('contrasenia');}

  ngOnInit() {}

  async ingresar(){
//creamos variables para utilizar el formulario validado   
    var formLog = this.loginForm.value; 
    var usuario= JSON.parse(localStorage.getItem('usuario'));   //variable a JSON

//Comparar datos del storage con los del fomrulario login
    if(usuario.nombre== formLog.nombreUsuario && usuario.password== formLog.contrasenia){
      console.log('ingresado');
//implementacion de navegacion
      localStorage.setItem('ingresado','true');   
      this.navController.navigateRoot('conductor/:conductor');

    }else{
        const alert = await this.alertController.create({
          header: 'Datos Incorrectos',
          message: 'El usuario no existe',
          buttons: ['OK'],
        });
    
        await alert.present();
        return;
      }
    }
  }
  


