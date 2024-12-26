import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, User, onAuthStateChanged } from '@angular/fire/auth';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private auth: Auth, private firestore: Firestore) {
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user || null);
    });
  }

  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      const user = result.user;

      // Verifica si el usuario ya existe en Firestore
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        });
      }

      // Actualizamos el estado del usuario
      this.userSubject.next(user);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }

  async logout() {
    try {
      await this.auth.signOut(); // Cierra sesión en Firebase
      this.userSubject.next(null); // Resetea el estado del usuario en la app
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}
