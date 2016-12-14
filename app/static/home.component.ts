//import dependency
import { Component } from '@angular/core';
import {Http} from "@angular/http";

//decorator @Component({})
@Component({
    templateUrl: 'app/static/home.component.html'
})

//view controller
export class HomeComponent {

    pageTitle: string = "Homepage";
    
    //collection of sexybongs
    sexybongs: any[];

    constructor(private _http: Http){
    }

    ngOnInit() : void {
        //display iframe
        console.log("Display?");

    }
}
