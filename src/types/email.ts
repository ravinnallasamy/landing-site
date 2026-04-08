export interface EmailFormData {
  fullName: string;
  userEmail: string;
  company: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}
