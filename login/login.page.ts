import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  diccionario: { user: string; pw: string } = {
    user: '',
    pw: ''
  };

  constructor(private aRoute: ActivatedRoute) { }

  ngOnInit() {
    this.aRoute.queryParams.subscribe(params => {
      // Manejo de parámetros con valores por defecto
      this.diccionario.user = params['data1'] || '';
      this.diccionario.pw = params['data2'] || '';
    });
  } // fin ngOnInit

}
