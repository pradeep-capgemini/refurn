import { Component } from '@angular/core';

@Component({
  selector: 'app-product-selling-history',
  templateUrl: './product-selling-history.component.html',
  styleUrls: ['./product-selling-history.component.css']
})
export class ProductSellingHistoryComponent {
  products = [
  {
    title: 'Wireless Headphones',
    amount: 2999,
    date: new Date('2025-07-15'),
    category: 'Electronics',
    quantity: 3,
    username: 'pradeep_kumar',
    imageUrl: 'assets/images/img1.jpeg'
  },
  {
    title: 'Yoga Mat',
    amount: 899,
    date: new Date('2025-07-20'),
    category: 'Fitness',
    quantity: 5,
    username: 'pradeep_kumar',
    imageUrl: 'assets/images/img2.jpeg'
  },
  {
    title: 'Smart Watch',
    amount: 4999,
    date: new Date('2025-07-25'),
    category: 'Wearables',
    quantity: 2,
    username: 'pradeep_kumar',
    imageUrl: 'assets/images/img3.jpeg'
  },
  {
    title: 'Bluetooth Speaker',
    amount: 1599,
    date: new Date('2025-07-28'),
    category: 'Audio',
    quantity: 4,
    username: 'pradeep_kumar',
    imageUrl: 'assets/images/img4.jpeg'
  },
  {
    title: 'Bluetooth Speaker',
    amount: 1599,
    date: new Date('2025-07-28'),
    category: 'Audio',
    quantity: 4,
    username: 'pradeep_kumar',
    imageUrl: 'assets/images/img4.jpeg'
  },
  {
    title: 'Yoga Mat',
    amount: 899,
    date: new Date('2025-07-20'),
    category: 'Fitness',
    quantity: 5,
    username: 'pradeep_kumar',
    imageUrl: 'assets/images/img2.jpeg'
  },
  {
    title: 'Smart Watch',
    amount: 4999,
    date: new Date('2025-07-25'),
    category: 'Wearables',
    quantity: 2,
    username: 'pradeep_kumar',
    imageUrl: 'assets/images/img3.jpeg'
  },
  {
    title: 'Bluetooth Speaker',
    amount: 1599,
    date: new Date('2025-07-28'),
    category: 'Audio',
    quantity: 4,
    username: 'pradeep_kumar',
    imageUrl: 'assets/images/img4.jpeg'
  },
];


}
