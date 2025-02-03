import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { FormResponse, FormData } from '../../models/form.model';

@Component({
  selector: 'app-form-responses',
  templateUrl: './form-responses.component.html',
  styleUrls: ['./form-responses.component.css'],
})
export class FormResponsesComponent implements OnInit {
  responses: FormResponse[] = [];
  forms: FormData[] = [];

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.responses = this.formService.getResponses();
    this.forms = this.formService.getForms();
  }

  getFormName(formId: number): string {
    const form = this.forms.find((f) => f.id === formId);
    return form ? form.name : 'Unknown Form';
  }
}
