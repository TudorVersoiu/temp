import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../Services/UserService";
import {Subscription} from "rxjs";
import {AnimationController} from "@ionic/angular";
import {Router} from "@angular/router";


@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss']
})

export class UserListComponent implements OnInit, AfterViewInit {
  constructor(
      private http: HttpClient,
      private userListService: UserService,
      private animationCtrl: AnimationController,
      private router: Router) {

  }
  animation;
  @ViewChild('animated', {read: ElementRef, static:true}) animated: ElementRef;

  async ngOnInit() {
    this.subscription = await this.userListService.subscribe_to_subject(
        user_list => {this.user_list = user_list;});
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl.create()
        .addElement(this.animated.nativeElement)
        .duration(1500)
        .iterations(1)
        .fromTo('transform', 'translateX(100px)', 'translateX(0px)')
        .fromTo('opacity', '0', '1');
    this.animation.play();
  }
  subscription: Subscription;
  user_list: User[] = [];

  public loadData(event) {
    this.user_list.push({name:`Name number ${Math.random()}`, age:20, occupation:"Some other occupation"});
    event.target.complete();
  }

  public select(user)
  {
    this.userListService.set_selected_user(user);
    this.router.navigate(['/tabs', 'view']);
  }
}
