import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true, // Proyecto sin módulos
  imports: [CommonModule, HeaderComponent, PackageListComponent, PackageDetailComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedPackage: any = null;
}
