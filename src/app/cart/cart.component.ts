import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  selectedPayment: string = '';
  loading:boolean = true;
  
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  products = [
    {
      image: 'assets/images/modern-curved-sofa-set.png',
      title: 'Modern Sofa Set',
      description: 'Elegant 3-seater with plush cushions and solid wood frame.',
      rating: 4.6,
      reviews: 210,
      price: 499.99,
      quantity: 2,
      address: "Pune",
      selectedPayment:  '',
      loading: false
    },
    {
      image: 'assets/images/Wooden-Dining-Table.png',
      title: 'Wooden Dining Table',
      description: 'Elegant 3-seater with plush cushions and solid wood frame.',
      rating: 4.7,
      reviews: 185,
      price: 699.99,
      quantity: 1,
      address: "Mumbai",
      selectedPayment:  '',
      loading: false 
    }];
    quantity = 2;

    
    // removeFromCart1(product: any) {
    //   const index = this.products.indexOf(product);
    //   if (index > -1) {
    //     this.products.splice(index, 1);
    //     console.log('Removed product:', product.title);
    //   }
    // }
    


paymentModes = [
  { name: 'PhonePe', image: 'assets/images/phonepe.png' },
  { name: 'Google Pay', image: 'assets/images/googlepay.png' },
  { name: 'UPI', image: 'assets/images/upi.png' },
  { name: 'Paytm', image: 'assets/images/paytm.png' },
  { name: 'Cash on Delivery', image: 'assets/images/cash.png' }
];



removeFromCart(product: any) {
const index = this.products.indexOf(product);
if (index > -1) {
  this.products.splice(index, 1);
}
}


buyNow(product: any) {
  product.loading = true;


  setTimeout(() => {
    this.http.post('http://localhost:8080/api/buy', {
      productId: product.id,
      quantity: product.quantity,
      paymentMode: product.selectedPayment,
      address: product.address
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
