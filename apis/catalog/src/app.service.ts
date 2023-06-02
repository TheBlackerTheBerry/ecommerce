import { Injectable } from '@nestjs/common';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

@Injectable()
export class AppService {
  getCatalog(): Product[] {
    const catalogMock = [
      {
        id: 1,
        name: 'Linda blusa vermelha e rosa',
        description: 'Product 1 description',
        image: 'https://picsum.photos/200/300',
        price: 100,
      },
    ];

    return catalogMock;
  }
}
