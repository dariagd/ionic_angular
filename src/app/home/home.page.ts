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

  async showConfirm(){
    const confirm = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Do you want to exit this game?',
      buttons: [{
        text: 'Ok',
        role: 'Ok',
        handler: () => {
          console.log('Confirm Ok');
        }
      }, {
        text: 'Cancel',
        role: 'Cancel',
        handler: () => {
          console.log('Confirm Cancel.');
        }
      }
      ]
    });
    await confirm.present();
    const result = await confirm.onDidDismiss();
    console.log(result);
  }

  async showRadio(){
    const alert = await this.alertCtrl.create({
      inputs: [
        {
          name: 'radio 1',
          type: 'radio',
          label: 'Java',
          value: 'Java',
        },
        {
          name: 'radio 2',
          type: 'radio',
          label: 'Python',
          value: 'Python',
          checked: true,
        },
        {
          name: 'radio 3',
          type: 'radio',
          label: 'Android',
          value: 'Android',
        },
        {
          name: 'radio 3',
          type: 'radio',
          label: 'AngularJs',
          value: 'AngularJs',
        },
      ],
      buttons: [
        {
          text: 'Save',
          handler: () => {
            console.log('Save clicked');
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    await  alert.present();
  }

  async showPrompt(){
    const prompt = await this.alertCtrl.create({
      header: 'Courses',
      message: 'Enter the Course name',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Course name',
        },
        {
          name: 'title',
          type: 'text',
          placeholder: 'Course name',
        }
      ],
      buttons: [
        {
          text: 'Save',
          handler: () => {
            console.log('Save clicked');
          }
        },
        {
          text: 'Cancel',
          handler: () => { // if write data then there will be data
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await prompt.present();
  }
}
