import { Injectable } from '@angular/core';
import { FormData, FormResponse } from '../models/form.model';

@Injectable({ providedIn: 'root' })
export class FormService {
  private storageKey = 'forms';
  private responseKey = 'formResponses';

  getForms(): FormData[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveForm(form: FormData) {
    const forms = this.getForms();
    forms.push(form);
    localStorage.setItem(this.storageKey, JSON.stringify(forms));
  }

  deleteForm(id: number) {
    let forms = this.getForms().filter((f) => f.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(forms));
  }

  saveResponse(response: FormResponse) {
    const responses = this.getResponses();
    responses.push(response);
    localStorage.setItem(this.responseKey, JSON.stringify(responses));
  }

  getResponses(): FormResponse[] {
    return JSON.parse(localStorage.getItem(this.responseKey) || '[]');
  }
}
