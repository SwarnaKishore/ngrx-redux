import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

    createDb() {
        const products: Product[] = [
            {
                'id': 1,
                'productName': 'Editor.js',
                'productCode': '231312',
                'description': 'A block-styled editor with clean JSON output',
                'starRating': 4
            },
            {
                'id': 2,
                'productName': 'Spark for Android',
                'productCode': '454543',
                'description': 'The much beloved email client now on Android',
                'starRating': 3
            },
            {
                'id': 3,
                'productName': 'Hotjar',
                'productCode': '4343434',
                'description': 'The fast & visual way to understand your users',
                'starRating': 5
            },
            {
                'id': 4,
                'productName': 'Sheetlist',
                'productCode': '4535453',
                'description': 'Discover free Google Sheets for marketing, finance and more',
                'starRating': 2
            },
            {
                'id': 5,
                'productName': 'Pyrismic',
                'productCode': '45646456',
                'description': 'Find the perfect remote UI/UX freelancer in just 24 hours.',
                'starRating': 3
            }
        ];
        return { products };
    }
}
