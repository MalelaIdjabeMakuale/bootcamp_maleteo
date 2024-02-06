import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsPagesComponent } from './ads-pages.component';

describe('AdsPagesComponent', () => {
  let component: AdsPagesComponent;
  let fixture: ComponentFixture<AdsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdsPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
