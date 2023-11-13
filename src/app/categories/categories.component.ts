import { Component } from '@angular/core';
import { TABLEAUCATEGORIES } from '../mock-categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  tableauCategories: string[] = TABLEAUCATEGORIES;
}
