import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

export interface User {
  uid: string
  userID: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  group? : string[]
}

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private afs: AngularFirestore,) {
  }

  getDrivers(){

  }
}
