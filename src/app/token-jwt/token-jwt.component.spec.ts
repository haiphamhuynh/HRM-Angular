import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenJWTComponent } from './token-jwt.component';

describe('TokenJWTComponent', () => {
  let component: TokenJWTComponent;
  let fixture: ComponentFixture<TokenJWTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenJWTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenJWTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
