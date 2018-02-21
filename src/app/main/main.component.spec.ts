import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { DataService } from './data.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let fixture: ComponentFixture<MainComponent>;
let mainComponent: MainComponent;

const dataServiceStub = <DataService>{
    getItem(): Observable<any> {
        return Observable.of({});
    }
};

describe('MainComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MainComponent
            ],
            providers: [
                { provide: DataService, useValue: dataServiceStub }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
        fixture = TestBed.createComponent(MainComponent);
        mainComponent = fixture.debugElement.componentInstance;
    }));
    it('should create main component', async(() => {
        expect(mainComponent).toBeTruthy();
    }));
});
