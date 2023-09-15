import { Injectable } from '@angular/core';
import { Animais } from '../entities/Animais';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private lista: Animais[] = [];

  constructor() {
    let a1 : Animais = new Animais("Gato", "Yoshi", 0 );
    a1.peso = 7;
    this.lista.push(a1);
  }

  public obterTodos() : Animais[]{
    return this.lista;
  }

  public obterPorIndice(indice : number): Animais{
    return this.lista[indice];
  }

  public cadastrar(animal: Animais){
    this.lista.push(animal);
  }

  public editar(animal: Animais, indice : number){
    this.lista[indice] = animal;
  }

  public excluir(indice : number){
    this.lista.splice(indice, 1);
  }

}
