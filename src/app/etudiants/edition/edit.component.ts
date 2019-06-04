import { Component, OnInit } from '@angular/core';
import {EtudiantsService} from '../../services/etudiants/etudiants.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Etudiant} from '../../modeles/etudiant';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public etudiant: Etudiant;
  public qualites: string;
  private id: number;
  constructor(public etuService: EtudiantsService, private path: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.path.params.subscribe(param => {
      this.id = param.id;
      this.etudiant = this.etuService.listeEtudiants[this.id];
      this.qualites = this.etudiant.qualite.join(' ; ');
    });
  }

  submitChange(form) {
    this.etudiant.qualite = this.qualites.split(' ; ');
    this.etuService.listeEtudiants[this.id] = this.etudiant;
    this.route.navigate(['etudiants']);
  }

}
