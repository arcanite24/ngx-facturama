import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './baseUrl.interceptor';
import { FacturamaConfig, FACTURAMA_CONFIG } from './facturama.models';
import { ModuleWithProviders } from '@angular/compiler/src/core';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  exports: [],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true,
  }]
})
export class NgxFacturamaModule {

  static forRoot(config: FacturamaConfig): ModuleWithProviders {
    return {
      ngModule: NgxFacturamaModule,
      providers: [
        {
          provide: FACTURAMA_CONFIG,
          useValue: config,
        }
      ]
    };
  }

}
