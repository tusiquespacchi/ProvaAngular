import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    number: ''
  });

  constructor( private cartService: CartService,
    private formBuilder: FormBuilder,) { }

    onSubmit(): void {
      // Process checkout data here
      this.items = this.cartService.clearCart();
      console.warn('Your order has been submitted', this.checkoutForm.value);
      localStorage.setItem('session', JSON.stringify(this.checkoutForm.value));
      this.checkoutForm.reset();
    }
    
  ngOnInit(): void {
  }

  items = this.cartService.getItems();

}
