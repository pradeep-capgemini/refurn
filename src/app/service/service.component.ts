import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  services = [
    {
      icon: 'store',
      title: 'Shop Refurbished Furniture',
      description: 'Browse quality second-hand pieces restored for a fresh look.',
      color: 'primary'
    },
    {
      icon: 'sell',
      title: 'Sell Your Furniture',
      description: 'Upload photos and let us evaluate your items for purchase.',
      color: 'accent'
    },
    {
      icon: 'person',
      title: 'User Profiles',
      description: 'Create an account to manage purchases, uploads, and deliveries.',
      color: 'warn'
    },
    {
      icon: 'local_shipping',
      title: 'Delivery & Tracking',
      description: 'Track orders and get accurate delivery timelines via email and dashboard.',
      color: 'primary'
    }
  ];

}
