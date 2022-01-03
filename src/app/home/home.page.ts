import { Component } from '@angular/core';
import {ActionSheetController, AlertController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public actionSheetCtrl: ActionSheetController,
               public alertCtrl: AlertController) { }

  async openMenu(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Update Album',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Destructive clicked');}
      },{
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      },{
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      },{
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
      ]
    });
    await actionSheet.present();

    const { role, data} = await actionSheet.onDidDismiss();
    console.log('onDismiss resolved with role and data', role, data);
  }

  async showAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Some Alert',
      message: 'Are you sure?',
      buttons: ['Yes', 'No']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
}
