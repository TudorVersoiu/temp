import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnDestroy {

  constructor(
      private network: Network
  ) {}

  private disconnectSubscription;
  private connectSubscription;
  public connected = true;

  ngOnInit() {
    this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.connected = false;
    });

    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.connected = true;
    });
  }
  ngOnDestroy(): void {
    this.disconnectSubscription.unsubscribe();
  }
}
