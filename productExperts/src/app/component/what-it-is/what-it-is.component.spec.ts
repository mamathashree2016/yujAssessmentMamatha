import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatItIsComponent } from './what-it-is.component';

describe('WhatItIsComponent', () => {
  let component: WhatItIsComponent;
  let fixture: ComponentFixture<WhatItIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatItIsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatItIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
