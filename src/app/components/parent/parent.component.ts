import { Component } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Iproduct } from '../../models/iproduct';

@Component({
    selector: 'app-parent',
    standalone: true,
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss',
    imports: [ProductsComponent ,FormsModule,CommonModule]
})
export class ParentComponent {
    filteredproducts:string='all';
    cart:Iproduct[]=[];
    addToCart(product: Iproduct) {
        let cartItem = this.cart.find(item => item.id === product.id);
        if (cartItem) {
          cartItem.productInCart += 1;
        }else
        {
            product.productInCart=1;
            this.cart.push(product);
        }
    }
    totalPrice(){
        return this.cart.reduce((total,item)=>total=(item.price*item.productInCart),0);
    }

}
