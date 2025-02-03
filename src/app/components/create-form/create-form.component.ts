import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-form',
    standalone: false,
    templateUrl: './create-form.component.html',
    styleUrl: './create-form.component.scss',
})
export class CreateFormComponent implements OnInit {
    createForm!: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {}

    onSubmit() {}

    createDynamicForm() {
        return this.formBuilder.group({
            id: ['', Validators.required],
            name: ['Untitled', Validators.required],
            description: [''],
            fields: this.formBuilder.array([]),
        });
    }
}
