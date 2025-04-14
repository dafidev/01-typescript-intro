import { Product, taxCalculation } from './06-function-destructuring'

const shoppingCard: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
]

const tax = 0.15; 

const [ total, taxtotal ] = taxCalculation({
    products: shoppingCard,
    tax: tax,
}
)

console.log('Total', total);
console.log('Tax', taxtotal);