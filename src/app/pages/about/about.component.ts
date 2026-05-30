import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  values = [
    {
      icon: 'fas fa-trophy',
      title: 'Excellence',
      description: 'Nous visons un niveau d\'execution eleve sur chaque mission.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Intégrité',
      description: 'Transparence, honnetete et engagement dans toutes nos relations.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'Nous innovons avec pragmatisme pour creer un impact concret.'
    },
    {
      icon: 'fas fa-users',
      title: 'Collaboration',
      description: 'Nous construisons avec nos clients comme de veritables partenaires.'
    }
  ];
}
