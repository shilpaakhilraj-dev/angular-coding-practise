import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit{

  public form!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      firstName: '',
      lastName: '',
      emailId: '',
      contactNo: '',
      address: this._formBuilder.group({
        addressLine1: '',
        addressLine2: '',
        street: '',
        city: '',
        state: '',
        pincode: ''
      }),
      experience: this._formBuilder.array([this.newExperience()])
    })
  }

  newExperience(): FormGroup {
    return this._formBuilder.group({
      companyName: '',
      currentlyWorking: [{ value: '', disabled: false }],
      startDate: '',
      endDate: [{ value: '', disabled: false }]
    })
  }

  experience(): FormArray {
    return this.form.get('experience') as FormArray;
  }

  addExperience() {
    this.experience().push(this.newExperience());
  }

  removeExperience(index: number) {
    this.experience().removeAt(index);
  }

  onCurrentlyWorkingChange(index: number) {
    const currentlyWorkingControlValue = this.experience().at(index).get('currentlyWorking')?.value;
    const endDateControl = this.experience().at(index).get('endDate');
    if (currentlyWorkingControlValue) {
      endDateControl?.disable();
    } else {
      endDateControl?.enable();
    }
  }

  onSubmit(formEvent: FormGroup) {
    console.log(formEvent)
  }

}
