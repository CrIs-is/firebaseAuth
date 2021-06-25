import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  // getUsers(): Observable<UserInfo[]>{
  //   return this.firestore.collection<UserInfo>('usuario').snapshotChanges().pipe(
  //     map((action)=>{
  //       return action.map(a => {
  //         const data = a.payload.doc.data();
  //         const id = a.payload.doc.id;
  //         return { id, ...data };
  //       });
  //     })
  //   )
  // }
  
}
