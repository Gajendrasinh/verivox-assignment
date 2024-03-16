import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FilterOptionsComponent } from './filter-options.component';

describe('FilterOptionsComponent', () => {
  let component: FilterOptionsComponent;
  let fixture: ComponentFixture<FilterOptionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FilterOptionsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit event with search text when searchBy is called', () => {
    const searchText = 'test';
    spyOn(component.searchTextChanged, 'emit');
    
    // Mock search input element
    component.searchInput = { nativeElement: { value: searchText } };

    // Call searchBy method
    component.searchBy();
    
    // Expect searchTextChanged.emit to have been called with the search text
    expect(component.searchTextChanged.emit).toHaveBeenCalledWith(searchText);
  });
});
