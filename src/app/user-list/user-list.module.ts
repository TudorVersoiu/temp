import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { UserListRoutingModule } from './user-list-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    UserListRoutingModule
  ],
  declarations: [UserListComponent]
})
export class UserListModule {}
