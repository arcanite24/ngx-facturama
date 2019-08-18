import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FacturamaConfig, FACTURAMA_URL } from './facturama.models';

@Injectable({
  providedIn: 'root',
})
export class FacturamaService {
  constructor(
    private http: HttpClient,
    private config: FacturamaConfig,
  ) {}

  public get token() { return this.config.token; }
  public get base_url() { return FACTURAMA_URL; }

  // Clients
  public getClientDetail(id: string) {
    return this.http.get(`client/${id}`).toPromise();
  }

  public getClients(id: string) {
    return this.http.get(`client`).toPromise();
  }

  public createClient(data: any) {
    return this.http.post(`client`, data).toPromise();
  }

  public removeClient(id: string) {
    return this.http.delete(`client/${id}`).toPromise();
  }

  public updateClient(id: string, data: any) {
    return this.http.put(`client/${id}`, data).toPromise();
  }

  // Products
  public getProductDetail(id: string) {
    return this.http.get(`product/${id}`).toPromise();
  }

  public getProducts(id: string) {
    return this.http.get(`product`).toPromise();
  }

  public createProduct(data: any) {
    return this.http.post(`product`, data).toPromise();
  }

  public removeProduct(id: string) {
    return this.http.delete(`product/${id}`).toPromise();
  }

  public updateProduct(id: string, data: any) {
    return this.http.put(`product/${id}`, data).toPromise();
  }

  // Branch Office
  public getBranchOfficeDetail(id: string) {
    return this.http.get(`branchOffice/${id}`).toPromise();
  }

  public getBranchOffices(id: string) {
    return this.http.get(`branchOffice`).toPromise();
  }

  public createBranchOffice(data: any) {
    return this.http.post(`branchOffice`, data).toPromise();
  }

  public removeBranchOffice(id: string) {
    return this.http.delete(`branchOffice/${id}`).toPromise();
  }

  public updateBranchOffice(id: string, data: any) {
    return this.http.put(`branchOffice/${id}`, data).toPromise();
  }

  // Series
  public getSerieDetail(id: string) {
    return this.http.get(`serie/${id}`).toPromise();
  }

  public createSerie(branch_id: string, data: any) {
    return this.http.post(`serie/${branch_id}`, data).toPromise();
  }

  public removeSerie(branch_id: string, name: string) {
    return this.http.delete(`serie/${branch_id}/${name}`).toPromise();
  }

  public updateSerie(branch_id: string, name: string, data: any) {
    return this.http.put(`serie/${branch_id}/${name}`, data).toPromise();
  }

  // CFDI
  public getCfdiDetail(id: string) {
    return this.http.get(`cfdi/${id}`).toPromise();
  }

  public getCfdiList(param: string) {
    return this.http.get(`cfdi/${param}`).toPromise();
  }

  public createCfdi(data: any) {
    return this.http.post(`2/cfdis`, data).toPromise();
  }

  public sendCfdi(param: string) {
    return this.http.post(`cfdi/${param}`, null).toPromise();
  }

  public cancelCfdi(param: string) {
    return this.http.delete(`cfdi/${param}`).toPromise();
  }

  public downloadCfdi(format: string, type: string, id: string) {
    return this.http.get(`cfdi/${format}/${type}/${id}`).toPromise();
  }

  public acuseCfdi(format: string, type: string, id: string) {
    return this.http.get(`acuse/${format}/${type}/${id}`).toPromise();
  }

  // Tax Entity
  public getTaxEntity() {
    return this.http.get(`taxEntity`).toPromise();
  }

  public updateTaxEntity(data: any) {
    return this.http.put(`taxEntity`, data).toPromise();
  }

  public uploadCsd(data: any) {
    return this.http.put(`taxEntity/UploadCsd`, data).toPromise();
  }

  public uploadImage(data: any) {
    return this.http.put(`taxEntity/UploadLogo`, data).toPromise();
  }

  // Catalogs
  public getStates(country: string) {
    return this.http.get(`catalogs/municipalities?countryCode=${country}`);
  }

  public getMunicipalities(state: string) {
    return this.http.get(`catalogs/municipalities?stateCode=${state}`);
  }

  public getLocalities(state: string) {
    return this.http.get(`catalogs/localities?stataeCode=${state}`);
  }

  public getNeighborhoods(postalCode: string) {
    return this.http.get(`catalogs/neighborhoods?postalCode=${postalCode}`);
  }

  public getProductsOrServices(keyword: string) {
    return this.http.get(`catalogs/ProductsOrServices?keyword=${keyword}`);
  }

  public getPostalCodes(keyword: string) {
    return this.http.get(`catalogs/PostalCodes?keyword=${keyword}`);
  }

  public getUnits() {
    return this.http.get(`catalogs/Units`);
  }

  public getCurrencies() {
    return this.http.get(`catalogs/Currencies`);
  }

  public getCountries() {
    return this.http.get(`catalogs/Countries`);
  }

  public getPaymentForms() {
    return this.http.get(`catalogs/PaymentForms`);
  }

  public getPaymentMethods() {
    return this.http.get(`catalogs/PaymentMethods`);
  }

  public getFederalTaxes() {
    return this.http.get(`catalogs/FederalTaxes`);
  }

  public getFiscalRegimens() {
    return this.http.get(`catalogs/FiscalRegimens`);
  }

  public getCfdiTypes() {
    return this.http.get(`catalogs/CfdiTypes`);
  }

  public getRelationTypes() {
    return this.http.get(`catalogs/RelationTypes`);
  }

  public getCfdiUses(keyword: string) {
    return this.http.get(`catalogs/CfdiUses?keyword=${keyword}`);
  }
}
