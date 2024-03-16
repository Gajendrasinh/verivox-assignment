import { Component, OnInit } from '@angular/core';
import { Tariff } from '../model/tariff';
import { TariffService } from '../services/tariff.service';
import { DynamicSortPipe } from '../pipes/dynamic-sort.pipe';

@Component({
  selector: 'verivox-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

  sortDirection: 'asc' | 'desc' = 'asc'; // Variable to hold the sorting direction

  tariffs: Tariff[] = []; // Array to hold all tariffs
  filteredTariffs: Tariff[] = []; // Array to hold filtered tariffs

  constructor(private tariffService: TariffService, private dynamicSortPipe : DynamicSortPipe) { }

  ngOnInit(): void {
    // Fetch tariffs from the service when component initializes
    this.getTariffs()
  }

  getTariffs(){
    this.tariffService.getTariffs().subscribe(tariffs => {
      this.tariffs = tariffs;
      this.filteredTariffs = [...this.tariffs]; // Copying for initial display
    });
  }

   // Function to handle sorting
  onFilterSelected(event : { key: string, direction: 'asc' | 'desc'}): void {
    if(!event){
      return;
    }
    // Applying sorting using DynamicSortPipe
    this.filteredTariffs = this.dynamicSortPipe.transform(this.filteredTariffs, event?.key, event?.direction);
  }

  // Function to filter tariffs by name
  filterTariffsByName(searchQuery:any): void {
    if (!searchQuery) {
      this.filteredTariffs = [...this.tariffs]; // Reset to original data if search query is empty
      return;
    }

    // Filtering tariffs based on name
    this.filteredTariffs = this.tariffs.filter(tariff =>
      tariff.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

}