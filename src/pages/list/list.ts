import { Component, Output, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { MessageService } from '../../app/services/message.service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [
    Http
  ]
})
export class ListPage implements OnInit {
  @Output() listTitle: string = "";
  selectedItem: any;
  icons: string[] = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
  items: Array<{title: string, note: string, icon: string}>;
  usedIcons: Array<String> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public message: MessageService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This index #' + i,
        icon: this.getUniqueIcon()
      });
    }
  }

  ngOnInit() {
    this.listTitle = this.message.getMessage("LIST");
  }

  getUniqueIcon(): string {
    let icon = this.icons[Math.floor(Math.random() * this.icons.length)];
    if (this.usedIcons.indexOf(icon) > -1) {
      return this.getUniqueIcon();
    }

    this.usedIcons.push(icon);
    return icon;
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
