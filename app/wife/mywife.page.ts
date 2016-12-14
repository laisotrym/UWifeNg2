//import dependency
import { Component } from '@angular/core';

//view model
export class MyWife {
    name: string;
    age: number;
    address: any;
    sex: string; //male, female ->radio button

    eye: string; //oc nhoi, bo cau, ti hi
    nose: string;//
    mouth: string[]; // -> checkbox

    baddies: string[];

    constructor(){
        this.name = "Thi No";
        this.age = 28;
        this.address = {
            city: "Lang Vu Dai",
            district: "Nha Chi Pheo"
        }

        this.sex = 'female';
        this.eye = "oc_nhoi";
        this.nose = "ngam_mua";

        this.baddies = ["ham choi", "nong tinh", "thich shoping"];
    }
}

//decorator @Component({})
@Component({
    selector: "mywife",
    templateUrl: "app/wife/mywife.page.html"
})
//view controller
export class MyWifePage {
    mywife: MyWife;

    constructor(){
        this.mywife = new MyWife();
    }

    addBad(morebad: string){
        //add to array
        this.mywife.baddies.push(morebad);

        //clear input


        //write log
    }

    deleteBad(postion: number){
        this.mywife.baddies.splice(postion, 1);
    }
}
