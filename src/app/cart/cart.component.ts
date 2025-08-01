import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { CartItem } from '../model/cart-item.model';
import { CartService } from '../services/cart-service.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: CartItem[] = [];
  selectedPayment: string = '';
  loading: boolean = true;
  userName!: string | null;
  userType!: string | null;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.userName = this.authService.getUserName();
    this.userType = this.authService.getUserType();

    if (this.userName) {
      this.cartService.getCartItemsByUsername(this.userName).subscribe({
        next: (data) => {
          this.products = data;
          this.loading = false;
        },
        error: (err) => {
          this.snackBar.open('Failed to load cart items', 'Close', { duration: 3000 });
          this.loading = false;
        }
      });
    }
  }






  paymentModes = [
    { name: 'PhonePe', image: 'assets/images/phonepe.jpeg' },
    { name: 'Google Pay', image: 'assets/images/googlepay.png' },
    { name: 'UPI', image: 'assets/images/upi.png' },
    { name: 'Paytm', image: 'assets/images/paytm.png' },
    { name: 'Cash on Delivery', image: 'assets/images/cash.jpeg' }
  ];



  // removeFromCart(product: any) {
  //   const index = this.products.indexOf(product);
  //   if (index > -1) {
  //     this.products.splice(index, 1);
  //   }
  // }

  removeFromCart(product: any) {
    this.cartService.deleteProduct(product.cartProductId, this.userName!).subscribe({
      next: () => {
        const index = this.products.indexOf(product);
        if (index > -1) {
          this.products.splice(index, 1);
        }
      },
      error: (err) => {
        console.error('Error deleting product:', err);
      }
    });
  }



  buyNow(product: any) {
    product.loading = true;


    setTimeout(() => {
      this.http.post('http://localhost:8002/api/refurn/cart/buy', {
        cartId: product.cartId,
        cartProductId: product.cartProductId,
        cartProductTitle: product.cartProductTitle,
        cartProductRating: product.cartProductRating,
        cartProductReviews: product.cartProductReviews,
        cartProductDescription: product.cartProductDescription,
        cartProductPrice: product.cartProductPrice,
        cartProductDiscount: product.cartProductDiscount,
        cartProductImage: product.cartProductImage,
        cartProductOwnerName: product.cartProductOwnerName,
        cartProductQuantity: product.cartProductQuantity,
        cartProductAddress: product.cartProductAddress,
        userName: this.userName,
        userType: this.userType
      }).subscribe({
        next: () => {
          this.snackBar.open('Purchase successful!', 'Close', {
            duration: 2000,
            panelClass: ['snackbar-success']
          });

          setTimeout(() => {
            this.removeFromCart(product);
            product.loading = false;
          }, 300);
        },
        error: () => {
          this.snackBar.open('Purchase failed. Please try again.', 'Close', {
            duration: 3000,
            panelClass: ['snackbar-error']
          });
          product.loading = false;
        }
      });
    }, 2000);
  }


}
