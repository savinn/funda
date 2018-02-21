import { TestBed, async } from '@angular/core/testing';
import { TopMenuComponent } from './top-menu.component';
describe('TopMenuComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopMenuComponent
      ],
    }).compileComponents();
  }));
  it('should create top-menu component', async(() => {
    const fixture = TestBed.createComponent(TopMenuComponent);
    const topMenu = fixture.debugElement.componentInstance;
    expect(topMenu).toBeTruthy();
  }));
});
