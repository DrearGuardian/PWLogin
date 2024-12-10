import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuarios } from '../models/usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuariolocalService {

  private readonly STORAGE_KEY = 'usuario';
  private usuarioSubject = new BehaviorSubject<Usuarios | null>(this.loadUsuarioFromStorage());

  setUsuario(usuario: Usuarios): void {
    this.usuarioSubject.next(usuario);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(usuario));
  }

  getUsuario(): Usuarios | null {
    return this.usuarioSubject.value;
  }

  getUsuarioObservable() {
    return this.usuarioSubject.asObservable();
  }

  clearUsuario(): void {
    this.usuarioSubject.next(null);
    localStorage.removeItem(this.STORAGE_KEY);
  }

  private loadUsuarioFromStorage(): Usuarios | null {
    const usuarioString = localStorage.getItem(this.STORAGE_KEY);
    return usuarioString ? JSON.parse(usuarioString) : null;
  }


  constructor() { }
}
