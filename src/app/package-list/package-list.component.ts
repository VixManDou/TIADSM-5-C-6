import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageService } from '../services/package.service';
import { TravelPackage } from '../models/travel-package.model';

@Component({
  selector: 'app-package-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent {
  packages: TravelPackage[] = [];

  @Output() selectPackage = new EventEmitter<TravelPackage>();

  constructor(private packageService: PackageService) {
    this.packages = this.packageService.getPackages();
  }
}

