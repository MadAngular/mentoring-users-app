import { Component, EventEmitter, inject, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-user-filter',
    templateUrl: './user-filter.component.html',
    styleUrls: ['./user-filter.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule],
})

export class UserFilterComponent{
    @Output()
    filterChange = new EventEmitter<string>();
    
    public formGroup: FormGroup;
    private formBuilder = inject(FormBuilder);
    
    constructor(){
        this.formGroup = this.formBuilder.group({
            name: ['', Validators.required],
            
        })
        
        this.formGroup.get('name')?.valueChanges.subscribe((value) =>{
            this.filterChange.emit(value)
        })
    }
    resetFilter(): void {
        this.formGroup.reset({ name: '' });
        this.filterChange.emit('');
      }
    
}