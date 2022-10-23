import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LocalstorageService } from 'src/app/services/data/localstorage.service';


@Component({
  selector: 'app-login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    public navCtrl: NavController,
    private localstorage: LocalstorageService,
    private router: Router
  ) {
    this.loginform = this.formbuilder.group({
      nombreUsuario: new FormControl("", Validators.compose([
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(8)
      ])),

      contrasenia: new FormControl("", Validators.compose([
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(7),

      ]))

    });
  }

  get nombreUsuario() { return this.loginform.get('nombreUsuario'); }
  get contrasenia() { return this.loginform.get('contrasenia'); }

  ngOnInit() { }

  datos(credenciales) {
    console.log(credenciales);
    localStorage.setItem('Ingresado', 'true');
    this.navCtrl.navigateRoot(['/conductor/', credenciales.nombreUsuario]);
  }

}
