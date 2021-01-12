import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import { webSocket } from "rxjs/webSocket";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(
        private http: HttpClient
    ) {
        this.users_subject = new Subject<User[]>();
        this.connection_subject.subscribe(async msg =>
            this.users_subject.next(await this.http.get<User[]>("http://127.0.0.1:5000/users/").toPromise())
        );
    }
    // Websocket stuff
    private connection_subject = webSocket("ws://127.0.0.1:5010");


    private users: User[];
    private users_subject: Subject<User[]>;

    public async subscribe_to_subject(on_receive) {
        let subscription = this.users_subject.subscribe(on_receive);


        this.users = await this.http.get<User[]>("http://127.0.0.1:5000/users/").toPromise();
        this.users_subject.next(this.users);

        return subscription;
    }

    private user;
    public set_selected_user(user)
    {
        this.user = user;
    }
    public get_selected_user()
    {
        return this.user;
    }
}