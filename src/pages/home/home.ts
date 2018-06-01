import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from "../welcome/welcome";

import { FormBuilder } from '@angular/forms';
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  miForm:FormGroup;

  constructor(public navCtrl: NavController,
              public formBuilder: FormBuilder) {
    this.miForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      correo: ['',[Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]],
      com: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      term: ['', [Validators.required]]      
    });            
  }

  otraPag(){
    this.navCtrl.push(WelcomePage);
  }

}
