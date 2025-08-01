import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../model/cart-item.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private apiUrl = 'http://localhost:8002/api/refurn/cart';

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiUrl);
  }

  addToCart(item: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(this.apiUrl, item);
  }


  getCartItemsByUsername(username: string): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiUrl + `/${username}`);
  }


  deleteProduct(productId: number, userName: string): Observable<any> {
    // return this.http.delete(this.apiUrl+`/${productId}/${userName}`);
    console.log("productId =>"+productId);
    return this.http.delete(`${this.apiUrl}/remove`, {
      params: {
        cartUserName: userName,
        cartProductId: productId
      }
    });

  }


}

