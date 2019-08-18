import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FACTURAMA_URL, FacturamaConfig } from './facturama.models';

@Injectable()
export class APIInterceptor implements HttpInterceptor {

  constructor(
    private config: FacturamaConfig,
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: `${FACTURAMA_URL}/${req.url}` });
    const tokenReq = apiReq.clone({
      headers: apiReq.headers.set('Authorization', `Basic ${this.config.token}`),
    });
    return next.handle(tokenReq);
  }

}
