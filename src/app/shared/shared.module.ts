import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { CreateFormComponent } from '../components/create-form/create-form.component';
import { SubmitFormComponent } from '../components/submit-form/submit-form.component';
import { FormResponseComponent } from '../components/form-response/form-response.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [CreateFormComponent, SubmitFormComponent, FormResponseComponent],
    imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
    exports: [MaterialModule, ReactiveFormsModule, FormsModule, CreateFormComponent, SubmitFormComponent, FormResponseComponent],
})
export class SharedModule {}
