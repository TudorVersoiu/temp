import { Component } from '@angular/core';
import {UserService} from "../../Services/UserService";

@Component({
  selector: 'app-tab3',
  templateUrl: 'view.page.html',
  styleUrls: ['view.page.scss']
})
export class ViewPage {

  constructor(
      private userService: UserService
  ) {
    this.selected_user = userService.get_selected_user();
    console.log(this.selected_user);
  }
  public selected_user;
}
