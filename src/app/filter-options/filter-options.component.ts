import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'verivox-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent {

  @ViewChild('searchInput')  searchInput! : ElementRef; // ViewChild to get a reference to the search input element

  sortDirection: 'asc' | 'desc' = 'asc';


  @Output() filterSelected = new EventEmitter<{ key: string, direction: 'asc' | 'desc' }>(); // Event emitter for filter selection

  @Output() searchTextChanged  = new EventEmitter<String>(); // Event emitter for search text change

  
  // Function to handle sorting
  sortBy(key: string, direction: 'asc' | 'desc'): void {
    // Toggle sorting direction
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    // Emit the selected filter
    this.filterSelected.emit({ key, direction });
  }

  // Function to handle search
  searchBy(){
    // Emit the search text
    this.searchTextChanged.emit(this.searchInput?.nativeElement?.value)
  }

}
