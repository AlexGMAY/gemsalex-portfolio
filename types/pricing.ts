export interface PricingFormData {
  name: string;
  email: string;
  projectDetails: string;
  serviceId: string;
  serviceTitle: string;
  basePrice: number;
  currency: 'USD' | 'TND';
  totalAmount: number;
  selectedFeatures: PricingFeature[];
  website?: string; // Honeypot field
}

export interface PricingFeature {
  id: string;
  name: string;
  price: number;
  category: string;
}

export interface PricingApiResponse {
  success: boolean;
  message: string;
  orderId?: string;
  estimatedDelivery?: string;
}

export interface PricingValidationError {
  field: string;
  message: string;
}

export interface ToastState {
  show: boolean;
  type: "success" | "error" | "";
  message: string;
}