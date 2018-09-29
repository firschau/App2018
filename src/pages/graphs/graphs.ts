import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimedifferenceProvider } from '../../providers/timedifference/timedifference';

/**
 * Generated class for the GraphsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graphs',
  templateUrl: 'graphs.html',
})
export class GraphsPage {

  constructor(private timedifference: TimedifferenceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraphsPage');
    this.timedifference.runTimer("graphsPage");
  }

  openMap() {
    this.navCtrl.push('KartePage');
  }

}
