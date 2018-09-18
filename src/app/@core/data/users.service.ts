
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {AuthService, User} from "../auth.service";
import {AngularFirestore} from "@angular/fire/firestore";


let counter = 0;

@Injectable()
export class UserService {

  private users = {
    nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
  };

  private userArray: any[];

  constructor(private auth: AuthService,private afs: AngularFirestore) {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return this.afs.collection<User>('users').valueChanges();
  }

  getUserArray(): Observable<any[]> {
    return observableOf(this.userArray);
  }

  getUser(): Observable<User> {
    return this.auth.user
  }
}
