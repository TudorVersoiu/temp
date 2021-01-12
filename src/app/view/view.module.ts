import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewPage } from './view.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ViewPageRoutingModule } from './view-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: 'view', component: ViewPage }]),
    ViewPageRoutingModule,
  ],
  declarations: [ViewPage]
})
export class ViewPageModule {}
