import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  item: string;
  options: String[] = [];
  http: any;
 
  addToList(item: String) {
  
    this.options.push(item);
  }
  
  productForm: FormGroup;
  
   
  constructor(private fb:FormBuilder) {
   
    this.productForm = this.fb.group({
      stateName1: ['', [Validators.required]],
      quantities: this.fb.array([]) ,
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
     
    })
  }
   
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
   
  onSubmit() {
    console.log(this.productForm.value);
  }
  

}

