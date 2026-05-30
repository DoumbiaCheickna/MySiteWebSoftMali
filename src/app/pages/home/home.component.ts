import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stats = [
    { icon: 'fas fa-calendar-check', target: 8, current: 0, label: 'Années d\'expérience', suffix: '' },
    { icon: 'fas fa-project-diagram', target: 50, current: 0, label: 'Projets réalisés', suffix: '+' },
    { icon: 'fas fa-smile', target: 100, current: 0, label: 'Satisfaction client', suffix: '%' },
    { icon: 'fas fa-headset', target: 0, current: 0, label: 'Support technique', text: '24/7' }
  ];

  statsAnimated = false;

  ngOnInit() {
    this.checkStatsVisibility();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkStatsVisibility();
  }

  checkStatsVisibility() {
    if (!this.statsAnimated) {
      const statsSection = document.querySelector('.stats');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          this.animateStats();
          this.statsAnimated = true;
        }
      }
    }
  }

  animateStats() {
    this.stats.forEach((stat, index) => {
      if (stat.target > 0) {
        const duration = 2000;
        const steps = 50;
        const increment = stat.target / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          stat.current = Math.min(Math.round(increment * currentStep), stat.target);
          
          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, duration / steps);
      }
    });
  }
}
