import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list';
import {ApiProvider} from '../../providers/api/api.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public api: ApiProvider) {}

  goToList(): void {
    this.navCtrl.push(ListPage);
  }

  callWS(): void {
    console.log('trying to call ws ...');
    this.api.APIGet('messages').toPromise().then(
      val => console.log('value :', val), error => console.log(error)
    );
  }

}
