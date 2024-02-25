import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe, NgStyle } from '@angular/common';
import { CreditCardPipePipe } from "../../pipes/credit-card-pipe.pipe";

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    imports: [FormsModule, CommonModule, CreditCardPipePipe]
})
export class ProductsComponent {
  ClientName: string = 'Ahmed Khaled';
  @Input() products: Iproduct[];
  @Output() addToCartEvent = new EventEmitter<Iproduct>();
  filteredproduct:Iproduct[]=[];
  togglepurchase(id:number){
    const product =this.products.find((item)=>item.id===id);
    if(product)
    {
      product.isPurchased=!product.isPurchased;
      product.quantity-=1;
    }
  }
  addToCart(product: Iproduct) {
    // Emit the addToCartEvent with the selected product
    this.addToCartEvent.emit(product);
  }
  constructor(){
    this.products=[
      {
        id: 1,
        name: 'Odense 8-Seater Top Dining Table',
        price: 21500,
        quantity: 5,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: "Table",
        Material: 'Engineered Wood',
        cardNumber:"123456789125",
        isPurchased:false,
        productInCart:2,
        purchaseDate:new Date(),
      },
      {
        id: 5,
        name: 'Trixia 4-Seater Glass Dining Table',
        price: 30000,
        quantity: 0,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: "Table",
        Material: 'Metal',
        cardNumber:"123456789125",
        isPurchased:false,
        productInCart:1,
        purchaseDate:new Date(),
      },
      {
        id: 25,
        name: 'Gasha Marble Top Side Table',
        price: 14000,
        quantity: 1,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: "Table",
        Material: 'Metal',
        cardNumber:"123456789125",
        isPurchased:false,
        productInCart:1,
        purchaseDate:new Date(),

      },
      {
        id: 7,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 2,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category:"Chair" ,
        Material: 'Upholstered Seating',
        cardNumber:"123456789125",
        isPurchased:false,
        productInCart:3,
        purchaseDate:new Date(),
      },
      {
        id: 17,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 3,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: "Chair",
        Material: 'Upholstered Seating',
        cardNumber:"123456789125",
        isPurchased:false,
        productInCart:1,
        purchaseDate:new Date(),

      },
      {
        id: 9,
        name: 'Boston Study Chair',
        price: 1000,
        quantity: 10,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: "Chair",
        Material: 'Upholstered Seating',
        cardNumber:"123456789125",
        isPurchased:true,
        productInCart:1,
        purchaseDate:new Date(),

      },
      {
        id: 10,
        name: 'Coby Extendable TV Unit',
        price: 13000,
        quantity: 10,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: "TV",
        Material: 'Wood',
        cardNumber:"123456789125",
        isPurchased:false,
        productInCart:1,
        purchaseDate:new Date(),

      },
      {
        id: 15,
        name: 'Accent TV Unit',
        price: 36999,
        quantity: 4,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: "TV",
        Material: 'MDF',
        cardNumber:"123456789125",
        isPurchased:true,
        productInCart:1,
        purchaseDate:new Date(),

      },
      {
        id: 55,
        name: 'Plymouth TV Unit',
        price: 36999,
        quantity: 3,
        PrdimgURL:'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: "TV",
        Material: 'wood',
        cardNumber:"123456789125",
        isPurchased:false ,
        productInCart:1,
        purchaseDate:new Date(),
      }
    ];
    this.filteredproduct=this.products;
  }
  @Input() set filteredproducts(value:string)
{
  this.filteredproduct=this.filterSelectedProduct(value);
}
filterSelectedProduct(value:string){
  if (value==='all')
  {
    return this.products;
  }else{
    return this.products.filter((product:Iproduct)=>product.category===value);
  }
}
/*
  product: IProduct = {
    ID: 123456,
    Name: 'Ahmed khaled',
    Quantity: 1,
    Price: 300000000,
    Img : '../../../assets/2151134109.jpg',
    CategoryID: 5678,
  };
  store: Store = {
    name: 'Monkey D Luffy',
    branches: ['One Piece', 'Blue Sea'],
    logo: '../../../assets/bottle-love-potion-with-heart-pink-background.jpg',
  };*/
}
