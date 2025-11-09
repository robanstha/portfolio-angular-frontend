import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { CommonModule } from '@angular/common';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ScrollRevealDirective,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  contactForm: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(): void {
    // TODO: Implement contact form submission
    console.log('Form submitted:', this.contactForm);
  }
}
