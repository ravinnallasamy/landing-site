import emailjs from '@emailjs/browser';

interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

interface EmailData {
  from_name: string;
  from_email: string;
  company?: string;
  subject: string;
  message: string;
}

export const initializeEmailJS = () => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
};

export const sendEmail = async (data: EmailData): Promise<emailjs.EmailJSResponseStatus> => {
  const emailConfig: EmailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  };

  return emailjs.send(
    emailConfig.serviceId,
    emailConfig.templateId,
    data as unknown as Record<string, unknown>,
    emailConfig.publicKey
  );
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
