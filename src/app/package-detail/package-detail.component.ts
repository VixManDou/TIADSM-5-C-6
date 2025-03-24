import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelPackage } from '../models/travel-package.model';

@Component({
  selector: 'app-package-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})
export class PackageDetailComponent {
  @Input() package!: TravelPackage;

  reserve() {
    alert(`Reserva confirmada para: ${this.package.name}`);
  }
}
