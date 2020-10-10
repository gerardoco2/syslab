import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalistasComponent } from './analistas.component';

describe('AnalistasComponent', () => {
  let component: AnalistasComponent;
  let fixture: ComponentFixture<AnalistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
