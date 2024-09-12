import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//atributos
  data= {
    user :"",
    pw:"",
  }

  constructor(private nCtrl: NavController ) {}
  //metodos
  goLogin(){
    let nExtras: NavigationExtras ={
      queryParams:{
        data1: this.data.user,
        data2: this.data.pw
      } 
    };
    this.nCtrl.navigateForward(['/login'],nExtras);
  }//fin  del metodo goLogin
}//fin de la clase HomePage