import { InjectionToken } from '@angular/core';

export const FACTURAMA_URL = 'https://apisandbox.facturama.mx';
export const FACTURAMA_CONFIG = new InjectionToken<FacturamaConfig>(
  'FACTURAMA_CONFIG',
);

export interface  FacturamaConfig {
  token: string;
}

