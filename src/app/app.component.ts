import { Component,VERSION } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  item: string;
  options: String[] = [];
  http: any;
 
  addToList(item: String) {
  
    this.options.push(item);
  }
  
  productForm: FormGroup;
  
   
  constructor(private fb:FormBuilder) {
   
    this.productForm = this.fb.group({
      stateName: ['', [Validators.required]],
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

