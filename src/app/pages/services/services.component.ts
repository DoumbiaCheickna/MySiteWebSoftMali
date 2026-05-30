import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      id: 'developpement',
      icon: 'fas fa-laptop-code',
      category: 'Engineering',
      title: 'Développement Logiciel',
      description: 'Solutions logicielles personnalisées adaptées à vos besoins métier',
      timeline: '4 a 12 semaines',
      features: [
        'Applications Web Modernes',
        'Applications Mobiles iOS/Android',
        'Systèmes ERP & CRM',
        'Solutions SaaS',
        'API & Microservices'
      ],
      price: 'À partir de 2 000 000 FCFA'
    },
    {
      id: 'web',
      icon: 'fas fa-globe',
      category: 'Web Presence',
      title: 'Création de Sites Web',
      description: 'Sites web professionnels, performants et optimisés pour le référencement',
      timeline: '2 a 6 semaines',
      featured: true,
      features: [
        'Sites Vitrine & Corporate',
        'E-commerce',
        'Sites Institutionnels',
        'Landing Pages',
        'PWA (Progressive Web Apps)'
      ],
      price: 'À partir de 500 000 FCFA'
    },
    {
      id: 'audit',
      icon: 'fas fa-search',
      category: 'Conseil IT',
      title: 'Audit Système d\'Information',
      description: 'Évaluation complète de votre infrastructure IT',
      timeline: '1 a 3 semaines',
      features: [
        'Audit d\'Infrastructure',
        'Analyse de Performance',
        'Audit de Sécurité',
        'Conformité & Réglementation',
        'Recommandations Stratégiques'
      ],
      price: 'À partir de 1 500 000 FCFA'
    },
    {
      id: 'securite',
      icon: 'fas fa-shield-alt',
      category: 'Cybersecurite',
      title: 'Sécurité Informatique',
      description: 'Protection complète contre les menaces cybernétiques',
      timeline: '2 a 8 semaines',
      features: [
        'Tests d\'Intrusion',
        'Audit de Sécurité',
        'Protection DDoS',
        'Conformité RGPD',
        'Formation Sécurité'
      ],
      price: 'À partir de 1 000 000 FCFA'
    },
    {
      id: 'devops',
      icon: 'fas fa-cloud',
      category: 'Infrastructure',
      title: 'DevOps & Cloud',
      description: 'Automatisation et optimisation de vos infrastructures',
      timeline: '2 a 6 semaines',
      features: [
        'Migration Cloud (AWS, Azure, GCP)',
        'CI/CD Pipeline',
        'Infrastructure as Code',
        'Monitoring & Alerting',
        'Containerisation (Docker, Kubernetes)'
      ],
      price: 'À partir de 1 500 000 FCFA'
    },
    {
      id: 'maintenance',
      icon: 'fas fa-tools',
      category: 'Support',
      title: 'Maintenance & Support',
      description: 'Support technique continu et maintenance proactive',
      timeline: 'Engagement mensuel',
      features: [
        'Support 24/7',
        'Maintenance Préventive',
        'Mises à Jour',
        'Monitoring Continu',
        'Intervention Rapide'
      ],
      price: 'À partir de 300 000 FCFA/mois'
    }
  ];
}
