import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilialTreeComponent } from './filial-tree.component';

describe('FilialTreeComponent', () => {
  let component: FilialTreeComponent;
  let fixture: ComponentFixture<FilialTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilialTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
