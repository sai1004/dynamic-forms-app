export interface FormData {
  id: number;
  name: string;
  description: string;
  fields: FormField[];
}

export interface FormField {
  id: number;
  name: string;
  type: 'text' | 'radio' | 'checkbox' | 'password';
  isRequired: boolean;
}

export interface FormResponse {
  formId: number;
  responses: { [key: string]: string | string[] };
}
