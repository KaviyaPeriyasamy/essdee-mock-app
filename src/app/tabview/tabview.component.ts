import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { ToastService } from './tabview.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


const lot = ['L232', 'FY-34', 'ER-34', 'GY-903', 'Lot-2021','HY-3143', 'GY-34534'];
const item = ['A T-shirt', 'B T-shirt', 'A Pant', 'B Pant', 'C Pant','A Shirt', 'C Shirt'];
const colour = ['Black', 'Brown', 'White', 'Pink', 'Red','Yellow', 'Blue'];

  @Component({
    selector: 'app-tabview',
    templateUrl: './tabview.component.html',
    styleUrls: ['./tabview.component.css'],
    encapsulation: ViewEncapsulation.None,
  })
  export class TabviewComponent{
    constructor(private modalService: NgbModal) {}
  public model: any;

  search_lot: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : lot.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
    search_item: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : item.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
    search_colour: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : colour.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  suppliers = [
    {id: 1, name: 'Test1', address: 'NO 5.VINAYAGA PURAM LAYOUT,,RAYAPURAM EXTN,,TIRUPUR, TAMIL NADU` - 641601.GSTIN: 33ABRFA0622L1Z'},
    {id: 2, name: 'A', address: 'NO 6.VINAYAGA PURAM LAYOUT,,RAYAPURAM EXTN,,TIRUPUR, TAMIL NADU` - 641601.GSTIN: 33ABRFA0622L1Z'},
    {id: 3, name: 'Test Knitters', address: 'NO 7.VINAYAGA PURAM LAYOUT,,RAYAPURAM EXTN,,TIRUPUR, TAMIL NADU` - 641601.GSTIN: 33ABRFA0622L1Z'},
    {id: 4, name: 'SS Garments', address: 'NO 8.VINAYAGA PURAM LAYOUT,,RAYAPURAM EXTN,,TIRUPUR, TAMIL NADU` - 641601.GSTIN: 33ABRFA0622L1Z'},
    {id: 5, name: 'AM Dyers', address: 'NO 9.VINAYAGA PURAM LAYOUT,,RAYAPURAM EXTN,,TIRUPUR, TAMIL NADU` - 641601.GSTIN: 33ABRFA0622L1Z'},
    {id: 6, name: 'BB Textiles', address: 'NO 10.VINAYAGA PURAM LAYOUT,,RAYAPURAM EXTN,,TIRUPUR, TAMIL NADU` - 641601.GSTIN: 33ABRFA0622L1Z'},
    {id: 7, name: 'LT Garments', address: 'NO 11.VINAYAGA PURAM LAYOUT,,RAYAPURAM EXTN,,TIRUPUR, TAMIL NADU` - 641601.GSTIN: 33ABRFA0622L1Z'},
    {id: 8, name: 'BMK Knitters', address: 'NO 12.VINAYAGA PURAM LAYOUT,,RAYAPURAM EXTN,,TIRUPUR, TAMIL NADU` - 641601.GSTIN: 33ABRFA0622L1Z'},
    {id: 9, name: 'PK Processors', address: 'NO 13.VINAYAGA PURAM LAYOUT,,RAYAPURAM EXTN,,TIRUPUR, TAMIL NADU` - 641601.GSTIN: 33ABRFA0622L1Z'},
    {id: 10, name: 'SS Printers', address: 'NO 15.VINAYAGA PURAM LAYOUT,,RAYAPURAM EXTN,,TIRUPUR, TAMIL NADU` - 641601.GSTIN: 33ABRFA0622L1Z'}
];
processes = [
  {id: 1, name: 'Dyeing'},
  {id: 2, name: 'Bleaching'},
  {id: 3, name: 'Packing'},
  {id: 4, name: 'Knitting'},
  {id: 5, name: 'Stitching'},
  {id: 6, name: 'Printing'},
  {id: 7, name: 'Fusing'},
  {id: 8, name: 'Compacting'},
  {id: 9, name: 'Steaming'},
  {id: 10, name: 'Roll Printing'}
];
selectedSupplier: any;
selectedProcess: any;
public selected_type='';
public val: string | undefined;
public enabled: number | undefined;
public address: string | undefined;
public series ='DC-2122-';
changeFn(val: any) {
    this.address = val['address'];
}
setSeries(enabled: any) {
  if(enabled){
    this.series = 'GT-2122-'
  }
  else{
    this.series ='DC-2122-';
  }
}
ClearFields() {
  this.address = ''
  this.selectedSupplier = ''
  this.selectedProcess =''
  this.series ='DC-2122-'
  this.enabled = 0
}
// constructor(public toastService: ToastService) {}
// showSuccess() {
//   this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
// }
openLg(content: any) {
  this.modalService.open(content, { size: 'lg' });
}
}

