import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultListComponent } from './result-list.component';
import { Tariff } from '../model/tariff';
import { TariffService } from '../services/tariff.service';
import { DynamicSortPipe } from '../pipes/dynamic-sort.pipe';
import { of } from 'rxjs';
import { FilterOptionsComponent } from '../filter-options/filter-options.component';

describe('ResultListComponent', () => {
  let component: ResultListComponent;
  let fixture: ComponentFixture<ResultListComponent>;
  let mockTariffService: jasmine.SpyObj<TariffService>;
  let mockDynamicSortPipe: jasmine.SpyObj<DynamicSortPipe>;

  const mockTariffs: Tariff[] = [
    {
      "id":1,
      "name":"Tarif Name 1",
      "downloadSpeed":12,
      "uploadSpeed":6,
      "price":12345,
      "benefits":[
         "Tarif Benefit 1",
         "Tarif Benefit 2",
         "Tarif Benefit 3"
      ]
    },
    {
      "id":2,
      "name":"Tarif Name 2",
      "downloadSpeed":14,
      "uploadSpeed":7,
      "price":12346,
      "benefits":[
         "Tarif Benefit 1",
         "Tarif Benefit 2",
         "Tarif Benefit 3"
      ]
    },
    {
      "id":3,
      "name":"Tarif Name 3",
      "downloadSpeed":20,
      "uploadSpeed":10,
      "price":12347,
      "benefits":[
         "Tarif Benefit 1",
         "Tarif Benefit 2",
         "Tarif Benefit 3"
      ]
    },
    {
        "id":4,
        "name":"Tarif Name 4",
        "downloadSpeed":10,
        "uploadSpeed":5,
        "price":12349,
        "benefits":[
           "Tarif Benefit 1",
           "Tarif Benefit 2",
           "Tarif Benefit 3"
        ]
     },
     {
        "id":5,
        "name":"Tarif Name 5",
        "downloadSpeed":50,
        "uploadSpeed":40,
        "price":340,
        "benefits":[
           "Tarif Benefit 1",
           "Tarif Benefit 2",
           "Tarif Benefit 3"
        ]
     }
  ];

  beforeEach(async () => {
    mockTariffService = jasmine.createSpyObj('TariffService', ['getTariffs']);
    mockDynamicSortPipe = jasmine.createSpyObj('DynamicSortPipe', ['transform']);

    await TestBed.configureTestingModule({
      declarations: [
        ResultListComponent,
        FilterOptionsComponent // Declare the FilterOptionsComponent here
      ],
      providers: [
        { provide: TariffService, useValue: mockTariffService },
        { provide: DynamicSortPipe, useValue: mockDynamicSortPipe }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize tariffs and filteredTariffs on ngOnInit', () => {
    mockTariffService.getTariffs.and.returnValue(of(mockTariffs));

    component.ngOnInit();

    expect(component.tariffs).toEqual(mockTariffs);
    expect(component.filteredTariffs).toEqual(mockTariffs);
  });

  it('should sort filteredTariffs by price', () => {
    component.filteredTariffs = [...mockTariffs]; // Initialize filteredTariffs
    const sortedTariffs = [...mockTariffs].sort((a, b) => a.price - b.price);
    mockDynamicSortPipe.transform.and.returnValue(sortedTariffs);

    component.onFilterSelected({ key: 'price', direction: 'asc' });

    expect(component.filteredTariffs).toEqual(sortedTariffs);
  });

  it('should sort filteredTariffs by download speed', () => {
    component.filteredTariffs = [...mockTariffs]; // Initialize filteredTariffs
    const sortedTariffs = [...mockTariffs].sort((a, b) => a.downloadSpeed - b.downloadSpeed);
    mockDynamicSortPipe.transform.and.returnValue(sortedTariffs);

    component.onFilterSelected({ key: 'downloadSpeed', direction: 'asc' });

    expect(component.filteredTariffs).toEqual(sortedTariffs);
  });

  it('should sort filteredTariffs by upload speed', () => {
    component.filteredTariffs = [...mockTariffs]; // Initialize filteredTariffs
    const sortedTariffs = [...mockTariffs].sort((a, b) => a.uploadSpeed - b.uploadSpeed);
    mockDynamicSortPipe.transform.and.returnValue(sortedTariffs);

    component.onFilterSelected({ key: 'uploadSpeed', direction: 'asc' });

    expect(component.filteredTariffs).toEqual(sortedTariffs);
  });

  it('should filter tariffs by name', () => {
    const searchTerm = 'Tarif Name 1';
    component.tariffs = mockTariffs;

    component.filterTariffsByName(searchTerm);

    expect(component.filteredTariffs.length).toBe(1);
    expect(component.filteredTariffs[0].name).toBe(searchTerm);
  });

  it('should reset filteredTariffs when filterTariffsByName is called with empty search query', () => {
    component.tariffs = mockTariffs;
    component.filteredTariffs = [mockTariffs[0]]; // Simulate filtered data

    component.filterTariffsByName('');

    expect(component.filteredTariffs.length).toBe(mockTariffs.length);
  });
});
