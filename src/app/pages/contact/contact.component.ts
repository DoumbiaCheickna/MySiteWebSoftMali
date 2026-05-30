import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  quoteForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  activeTab = 'contact';

  services = [
    'Développement Logiciel',
    'Création Site Web',
    'Audit SI',
    'Sécurité Informatique',
    'DevOps & Cloud',
    'Maintenance & Support'
  ];

  budgetRanges = [
    'Moins de 500 000 FCFA',
    '500 000 - 1 000 000 FCFA',
    '1 000 000 - 2 000 000 FCFA',
    '2 000 000 - 5 000 000 FCFA',
    'Plus de 5 000 000 FCFA'
  ];

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.initContactForm();
    this.initQuoteForm();
  }

  initContactForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  initQuoteForm() {
    this.quoteForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      service: ['', Validators.required],
      budget: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      timeline: ['']
    });
  }

  async onContactSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      try {
        await this.contactService.sendContactMessage(this.contactForm.value);
        this.submitSuccess = true;
        this.contactForm.reset();
        
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      } catch (error) {
        this.submitError = true;
        setTimeout(() => {
          this.submitError = false;
        }, 5000);
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  async onQuoteSubmit() {
    if (this.quoteForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      try {
        await this.contactService.sendQuoteRequest(this.quoteForm.value);
        this.submitSuccess = true;
        this.quoteForm.reset();
        
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      } catch (error) {
        this.submitError = true;
        setTimeout(() => {
          this.submitError = false;
        }, 5000);
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  switchTab(tab: string) {
    this.activeTab = tab;
    this.submitSuccess = false;
    this.submitError = false;
  }
}
