import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortyComponent } from './morty.component';

describe('MortyComponent', () => {
  let component: MortyComponent;
  let fixture: ComponentFixture<MortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
