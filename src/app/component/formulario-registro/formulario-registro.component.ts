import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { LocalstorageService } from 'src/app/services/data/localstorage.service';


@Component({
  selector: 'app-formulario-registro-comp',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss'],
})
export class FormularioRegistroComponent implements OnInit {

  registroForm: FormGroup;


  constructor(
    private formbuilder: FormBuilder,
  //modulo para utilizar alerta
    public alertController: AlertController,
  //modulo para navegacion
    public navController: NavController,
    private localstorage:LocalstorageService,
    private router:Router

  ) { 
    this.registroForm= this.formbuilder.group({
      nombreUsuario: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),

      apellidoUsuario: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),

      rutUsuario: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(9)
      ])),

      emailUsuario: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(9)
      ])),

      telefonoUsuario: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(10)
      ])),

      fecnacUsuario: new FormControl("", Validators.compose([
        Validators.required
      ])),

      patenteUsuario: new FormControl("", Validators.compose([
        Validators.required
      ])),

      contraseniaUsuario: new FormControl("", Validators.compose([
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(7)
      ])),

      confirmarContrasenia: new FormControl("", Validators.compose([
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(7)
      ])),
  });
  }

  /*
  get nombrreUsuario() { return this.registroForm.get('nombreUsuario');}
  get apellidoUsuario() { return this.registroForm.get('apellidoUsuario');}
  get rutUsuario() { return this.registroForm.get('rutUsuario');}
  get emailUsuario() { return this.registroForm.get('emailUsuario');}
  get telefonoUsuario() { return this.registroForm.get('telefonoUsuario');}
  get fecnacUsuario() { return this.registroForm.get('fecnacUsuario');}
  get patenteUsuario() { return this.registroForm.get('patenteUsuario');}
  get contraseniaUsuario() { return this.registroForm.get('contraseniaUsuario');}
  get confirmarContrasenia() { return this.registroForm.get('confirmarContrasenia');}
*/
  ngOnInit() {}
  /*datos(credenciales){
    console.log(credenciales.nombreUsuario);
    this.localstorage.set("username",credenciales.nombreUsuario);
  }
*/
    async guardar() {
      var formReg = this.registroForm.value;      //creamos un mensaje de alerta para los datos mal ingresados

      if(this.registroForm.invalid){
        const alert = await this.alertController.create({
          header: 'Atencion!',
          message: 'Revisa los campos',
          buttons: ['OK'],
        }); 
        await alert.present();
        return;
      }

      var usuario = {           //creamos variable que contenera los datos de storage
        nombre: formReg.nombreUsuario,
        password: formReg.contraseniaUsuario
      }

      localStorage.setItem('usuario',JSON.stringify(usuario));      //pasamos los datos almacenados a JSON para el storage

      localStorage.setItem('ingresado','true');   //implementacion de navegacion, luego de registrarse envia al login
      this.navController.navigateRoot('conductor/:conductor');

    }
    }
  

