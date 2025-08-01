import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product.model';
import { PageEvent } from '@angular/material/paginator';
import { ProductServiceService } from '../services/product-service.service';
import { Router } from '@angular/router';
import { CartItem } from '../model/cart-item.model';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  products: Product[] = [];
  quantity: number = 1;
  address:string = '';


  constructor(private productService: ProductServiceService, private router: Router, private authService: AuthService, private cartService: CartService) { }

  username: string = this.authService.getUserName() ?? '';
  userType: string = this.authService.getUserType() ?? '';

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        console.log("Data available");
        this.products = data;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }


  updateQuantity(): void {
    console.log('Updated quantity:', this.quantity);
  }

  // goToCart(product: Product) {
  //   this.router.navigate(['/cart'], { state: { product } });
  // }

  goToCart(product: Product) {
    const cartItem: CartItem = {
      cartProductId: product.productId,
      cartProductTitle: product.productTitle,
      cartProductRating: product.productRating,
      cartProductReviews: product.productReviews,
      cartProductDescription: product.productDescription,
      cartProductPrice: product.productPrice,
      cartProductDiscount: product.productDiscount,
      cartProductImage: product.productImage,
      cartUserName: this.username,
      cartUserType: this.userType,
      cartProductOwnerName: '',
      cartProductQuantity: this.quantity,
      cartProductAddress: this.address
    };
    console.log("address=> " + this.address);
    this.cartService.addToCart(cartItem).subscribe({
      next: (response) => {
        console.log('Cart data saved:', response);
        this.router.navigate(['/cart'], { state: { product } });
      },
      error: (err) => {
        console.error('Error saving cart item:', err);
      }
    });
  }


  shareProduct(product: any) {
    const shareData = {
      title: product.title,
      text: `Check out this product: ${product.title} for ₹${product.amount} in ${product.category}. Sold by ${product.username}.`,
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Product shared successfully'))
        .catch((error) => console.error('Error sharing', error));
    } else {
      alert('Sharing is not supported in this browser.');
    }
  }

}



// products = [
//   {
//     title: 'Modern Sofa Set',
//     rating: 4.6,
//     reviews: 210,
//     description: 'Elegant 3-seater with plush cushions and solid wood frame.',
//     price: 499.99,
//     discount: '25%',
//     image: 'assets/images/modern-curved-sofa-set.png'
//   },
//   {
//     title: 'Wooden Dining Table',
//     rating: 4.7,
//     reviews: 185,
//     description: '6-seater table crafted from premium Sheesham wood.',
//     price: 699.99,
//     discount: '20%',
//     image: 'assets/images/Wooden-Dining-Table.png'
//   },
//   {
//     title: 'Ergonomic Office Chair',
//     rating: 4.5,
//     reviews: 320,
//     description: 'Adjustable lumbar support and breathable mesh back.',
//     price: 149.99,
//     discount: '15%',
//     image: 'assets/images/Ergonomic-Office-Chair.jpg'
//   },
//   {
//     title: 'Queen Size Bed',
//     rating: 4.8,
//     reviews: 275,
//     description: 'Sturdy frame with headboard and under-bed storage.',
//     price: 799.99,
//     discount: '30%',
//     image: 'assets/images/queen-size-bed.png'
//   },
//   {
//     title: 'TV Unit Cabinet',
//     rating: 4.4,
//     reviews: 198,
//     description: 'Spacious shelves and cable management system.',
//     price: 249.99,
//     discount: '18%',
//     image: 'assets/images/tv-unit-cabinet.png'
//   },
//   {
//     title: 'Bookshelf Organizer',
//     rating: 4.6,
//     reviews: 142,
//     description: '5-tier open shelf with modern industrial design.',
//     price: 129.99,
//     discount: '10%',
//     image: 'assets/images/bookself-organizer.jpeg'
//   },
//   {
//     title: 'Recliner Armchair',
//     rating: 4.7,
//     reviews: 190,
//     description: 'Comfortable recliner with adjustable footrest.',
//     price: 399.99,
//     discount: '22%',
//     image: 'assets/images/recliner-armchair.jpeg'
//   },
//   {
//     title: 'Coffee Table',
//     rating: 4.5,
//     reviews: 160,
//     description: 'Minimalist design with tempered glass top.',
//     price: 99.99,
//     discount: '12%',
//     image: 'assets/images/coffee-table.png'
//   },
//   {
//     title: 'Wardrobe Closet',
//     rating: 4.6,
//     reviews: 210,
//     description: '3-door wardrobe with mirror and hanging space.',
//     price: 599.99,
//     discount: '20%',
//     image: 'assets/images/Wardrobe-Closet.png'
//   },
//   {
//     title: 'Study Desk',
//     rating: 4.4,
//     reviews: 130,
//     description: 'Compact desk with drawers and cable slots.',
//     price: 179.99,
//     discount: '15%',
//     image: 'assets/images/study-desk.jpeg'
//   },
//   {
//     title: 'Bar Stool Set',
//     rating: 4.3,
//     reviews: 95,
//     description: 'Set of 2 adjustable stools with chrome base.',
//     price: 149.99,
//     discount: '10%',
//     image: 'assets/images/bar-stool-set.jpeg'
//   },
//   {
//     title: 'Shoe Rack Cabinet',
//     rating: 4.5,
//     reviews: 110,
//     description: 'Multi-tier rack with closed doors and ventilation.',
//     price: 89.99,
//     discount: '18%',
//     image: 'assets/images/shoe-rack.jpeg'
//   },
//   {
//     title: 'Accent Chair',
//     rating: 4.6,
//     reviews: 145,
//     description: 'Stylish lounge chair with velvet upholstery.',
//     price: 199.99,
//     discount: '20%',
//     image: 'assets/images/accent-chair.jpeg'
//   },
//   {
//     title: 'Kitchen Trolley',
//     rating: 4.4,
//     reviews: 88,
//     description: 'Rolling cart with shelves and utensil hooks.',
//     price: 79.99,
//     discount: '12%',
//     image: 'assets/images/kitchen-trolley.jpeg'
//   },
//   {
//     title: 'Wall Mounted Shelf',
//     rating: 4.5,
//     reviews: 102,
//     description: 'Floating shelf for books and decor.',
//     price: 49.99,
//     discount: '10%',
//     image: 'assets/images/wall-mounted-self.jpeg'
//   },
//   {
//     title: 'Dressing Table',
//     rating: 4.7,
//     reviews: 165,
//     description: 'Mirror, drawers, and stool included.',
//     price: 299.99,
//     discount: '25%',
//     image: 'assets/images/dressing-table.jpeg'
//   },
//   {
//     title: 'Outdoor Patio Set',
//     rating: 4.6,
//     reviews: 120,
//     description: 'Weather-resistant table and chairs for garden.',
//     price: 349.99,
//     discount: '20%',
//     image: 'assets/images/outdoor-patio-set.jpeg'
//   },
//   {
//     title: 'Kids Study Table',
//     rating: 4.3,
//     reviews: 90,
//     description: 'Colorful desk with storage and ergonomic design.',
//     price: 129.99,
//     discount: '15%',
//     image: 'assets/images/kids-study-table.jpeg'
//   },
//   {
//     title: 'Side Table',
//     rating: 4.4,
//     reviews: 75,
//     description: 'Compact table with drawer and open shelf.',
//     price: 59.99,
//     discount: '10%',
//     image: 'assets/images/side-table.jpeg'
//   },
//   {
//     title: 'Bean Bag Chair',
//     rating: 4.5,
//     reviews: 140,
//     description: 'Comfortable seating with durable fabric cover.',
//     price: 89.99,
//     discount: '18%',
//     image: 'assets/images/bean-bag-chair.jpeg'
//   }
// ];

// quantity = 1;
// address = '';
//}
// export class HomeComponent {


//   products = [
//     {
//       title: 'Modern Sofa Set',
//       rating: 4.6,
//       reviews: 210,
//       description: 'Elegant 3-seater with plush cushions and solid wood frame.',
//       price: 499.99,
//       discount: '25%',
//       image: 'assets/images/modern-curved-sofa-set.png'
//     },
//     {
//       title: 'Wooden Dining Table',
//       rating: 4.7,
//       reviews: 185,
//       description: '6-seater table crafted from premium Sheesham wood.',
//       price: 699.99,
//       discount: '20%',
//       image: 'assets/images/Wooden-Dining-Table.png'
//     },
//     {
//       title: 'Ergonomic Office Chair',
//       rating: 4.5,
//       reviews: 320,
//       description: 'Adjustable lumbar support and breathable mesh back.',
//       price: 149.99,
//       discount: '15%',
//       image: 'assets/images/Ergonomic-Office-Chair.jpg'
//     },
//     {
//       title: 'Queen Size Bed',
//       rating: 4.8,
//       reviews: 275,
//       description: 'Sturdy frame with headboard and under-bed storage.',
//       price: 799.99,
//       discount: '30%',
//       image: 'assets/images/queen-size-bed.png'
//     },
//     {
//       title: 'TV Unit Cabinet',
//       rating: 4.4,
//       reviews: 198,
//       description: 'Spacious shelves and cable management system.',
//       price: 249.99,
//       discount: '18%',
//       image: 'assets/images/tv-unit-cabinet.png'
//     },
//     {
//       title: 'Bookshelf Organizer',
//       rating: 4.6,
//       reviews: 142,
//       description: '5-tier open shelf with modern industrial design.',
//       price: 129.99,
//       discount: '10%',
//       image: 'assets/images/bookself-organizer.jpeg'
//     },
//     {
//       title: 'Recliner Armchair',
//       rating: 4.7,
//       reviews: 190,
//       description: 'Comfortable recliner with adjustable footrest.',
//       price: 399.99,
//       discount: '22%',
//       image: 'assets/images/recliner-armchair.jpeg'
//     },
//     {
//       title: 'Coffee Table',
//       rating: 4.5,
//       reviews: 160,
//       description: 'Minimalist design with tempered glass top.',
//       price: 99.99,
//       discount: '12%',
//       image: 'assets/images/coffee-table.png'
//     },
//     {
//       title: 'Wardrobe Closet',
//       rating: 4.6,
//       reviews: 210,
//       description: '3-door wardrobe with mirror and hanging space.',
//       price: 599.99,
//       discount: '20%',
//       image: 'assets/images/Wardrobe-Closet.png'
//     },
//     {
//       title: 'Study Desk',
//       rating: 4.4,
//       reviews: 130,
//       description: 'Compact desk with drawers and cable slots.',
//       price: 179.99,
//       discount: '15%',
//       image: 'assets/images/study-desk.jpeg'
//     },
//     {
//       title: 'Bar Stool Set',
//       rating: 4.3,
//       reviews: 95,
//       description: 'Set of 2 adjustable stools with chrome base.',
//       price: 149.99,
//       discount: '10%',
//       image: 'assets/images/bar-stool-set.jpeg'
//     },
//     {
//       title: 'Shoe Rack Cabinet',
//       rating: 4.5,
//       reviews: 110,
//       description: 'Multi-tier rack with closed doors and ventilation.',
//       price: 89.99,
//       discount: '18%',
//       image: 'assets/images/shoe-rack.jpeg'
//     },
//     {
//       title: 'Accent Chair',
//       rating: 4.6,
//       reviews: 145,
//       description: 'Stylish lounge chair with velvet upholstery.',
//       price: 199.99,
//       discount: '20%',
//       image: 'assets/images/accent-chair.jpeg'
//     },
//     {
//       title: 'Kitchen Trolley',
//       rating: 4.4,
//       reviews: 88,
//       description: 'Rolling cart with shelves and utensil hooks.',
//       price: 79.99,
//       discount: '12%',
//       image: 'assets/images/kitchen-trolley.jpeg'
//     },
//     {
//       title: 'Wall Mounted Shelf',
//       rating: 4.5,
//       reviews: 102,
//       description: 'Floating shelf for books and decor.',
//       price: 49.99,
//       discount: '10%',
//       image: 'assets/images/wall-mounted-self.jpeg'
//     },
//     {
//       title: 'Dressing Table',
//       rating: 4.7,
//       reviews: 165,
//       description: 'Mirror, drawers, and stool included.',
//       price: 299.99,
//       discount: '25%',
//       image: 'assets/images/dressing-table.jpeg'
//     },
//     {
//       title: 'Outdoor Patio Set',
//       rating: 4.6,
//       reviews: 120,
//       description: 'Weather-resistant table and chairs for garden.',
//       price: 349.99,
//       discount: '20%',
//       image: 'assets/images/outdoor-patio-set.jpeg'
//     },
//     {
//       title: 'Kids Study Table',
//       rating: 4.3,
//       reviews: 90,
//       description: 'Colorful desk with storage and ergonomic design.',
//       price: 129.99,
//       discount: '15%',
//       image: 'assets/images/kids-study-table.jpeg'
//     },
//     {
//       title: 'Side Table',
//       rating: 4.4,
//       reviews: 75,
//       description: 'Compact table with drawer and open shelf.',
//       price: 59.99,
//       discount: '10%',
//       image: 'assets/images/side-table.jpeg'
//     },
//     {
//       title: 'Bean Bag Chair',
//       rating: 4.5,
//       reviews: 140,
//       description: 'Comfortable seating with durable fabric cover.',
//       price: 89.99,
//       discount: '18%',
//       image: 'assets/images/bean-bag-chair.jpeg'
//     }
//   ];

//   quantity = 1;
//   address = '';


//   shareProduct(product: any) {
//     const shareData = {
//       title: product.title,
//       text: `Check out this product: ${product.title} for ₹${product.amount} in ${product.category}. Sold by ${product.username}.`,
//       url: window.location.href
//     };

//     if (navigator.share) {
//       navigator.share(shareData)
//         .then(() => console.log('Product shared successfully'))
//         .catch((error) => console.error('Error sharing', error));
//     } else {
//       alert('Sharing is not supported in this browser.');
//     }
//   }


// }
