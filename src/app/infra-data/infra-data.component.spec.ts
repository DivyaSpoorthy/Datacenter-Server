import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraDataComponent } from './infra-data.component';

describe('InfraDataComponent', () => {
  let component: InfraDataComponent;
  let fixture: ComponentFixture<InfraDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfraDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


