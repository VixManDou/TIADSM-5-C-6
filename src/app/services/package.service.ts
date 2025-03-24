import { Injectable } from '@angular/core';
import { TravelPackage } from '../models/travel-package.model';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private packages: TravelPackage[] = [
    { name: 'Playa Paraíso', description: 'Disfruta de una semana en el Caribe.', price: 1500 },
    { name: 'Montaña Aventura', description: 'Explora paisajes increíbles.', price: 1200 },
    { name: 'Ciudad Histórica', description: 'Descubre cultura y tradición.', price: 900 }
  ];

  getPackages(): TravelPackage[] {
    return this.packages;
  }
}
