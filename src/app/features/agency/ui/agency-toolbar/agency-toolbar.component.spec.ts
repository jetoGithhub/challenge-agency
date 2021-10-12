import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyToolbarComponent } from './agency-toolbar.component';

describe('AgencyToolbarComponent', () => {
  let component: AgencyToolbarComponent;
  let fixture: ComponentFixture<AgencyToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
