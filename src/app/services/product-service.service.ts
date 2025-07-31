import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private apiUrl = 'http://localhost:8002/api/refurn/products';

  constructor(private http: HttpClient) { }

  

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }


  
addProduct(product: Product): Observable<Product> {
  return this.http.post<Product>(this.apiUrl, product);
}

}
