import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ContactFormData, ContactFormError } from '../models/portfolio.models';

/**
 * FormService
 * Handles form creation, validation, and submission
 */
@Injectable({
  providedIn: 'root'
})
export class FormService {
  private readonly fb = inject(FormBuilder);
  private readonly submittingSubject = new BehaviorSubject<boolean>(false);
  private readonly errorSubject = new BehaviorSubject<ContactFormError[]>([]);

  readonly submitting$ = this.submittingSubject.asObservable();
  readonly errors$ = this.errorSubject.asObservable();

  constructor() {}

  /**
   * Create contact form with validation
   */
  createContactForm(): FormGroup {
    return this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      subject: ['', [
        Validators.maxLength(200)
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(5000)
      ]],
      phone: ['', [
        Validators.pattern(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)
      ]]
    });
  }

  /**
   * Validate form and return errors
   */
  validateForm(form: FormGroup): ContactFormError[] {
    const errors: ContactFormError[] = [];

    Object.keys(form.controls).forEach(key => {
      const control = form.get(key);
      if (control && control.invalid && control.touched) {
        if (control.hasError('required')) {
          errors.push({ field: key, message: `${key} is required` });
        } else if (control.hasError('email')) {
          errors.push({ field: key, message: 'Invalid email format' });
        } else if (control.hasError('minlength')) {
          const min = control.getError('minlength').requiredLength;
          errors.push({ field: key, message: `Minimum length is ${min} characters` });
        } else if (control.hasError('maxlength')) {
          const max = control.getError('maxlength').requiredLength;
          errors.push({ field: key, message: `Maximum length is ${max} characters` });
        } else if (control.hasError('pattern')) {
          errors.push({ field: key, message: `Invalid ${key} format` });
        }
      }
    });

    this.errorSubject.next(errors);
    return errors;
  }

  /**
   * Submit form data
   */
  submitForm(data: ContactFormData): Observable<boolean> {
    this.submittingSubject.next(true);
    
    // Simulate API call
    return new Observable(observer => {
      setTimeout(() => {
        console.log('Form submitted:', data);
        this.submittingSubject.next(false);
        this.errorSubject.next([]);
        observer.next(true);
        observer.complete();
      }, 1500);
    });
  }

  /**
   * Set form errors
   */
  setErrors(errors: ContactFormError[]): void {
    this.errorSubject.next(errors);
  }

  /**
   * Clear all errors
   */
  clearErrors(): void {
    this.errorSubject.next([]);
  }

  /**
   * Get error for specific field
   */
  getFieldError(field: string): Observable<string | null> {
    return this.errors$;
  }
}
