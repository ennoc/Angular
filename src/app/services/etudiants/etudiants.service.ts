import { Injectable } from '@angular/core';
import {Etudiant} from '../../modeles/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  listeEtudiants: Array<Etudiant>;
  constructor() {
    this.listeEtudiants = [{
      id: 0,
      nom: 'Imarazene',
      prenom: 'Elo',
      age: 28,
      sexe: 'femme',
      qualite: ['gentille', 'professionnelle'],
      image: ''}, {
      id: 1,
      nom: 'Aberkane',
      prenom: 'Yanoush',
      age: 19,
      sexe: 'homme',
      qualite: ['on cherche encore'],
      image: ''}];
  }
}
