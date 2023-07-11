import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { FormDataInterface } from '../../../../models/formData.interface'
import { FormDataService } from '../../../../services/form-data.service'

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
	public form!: FormGroup
	public submitted: boolean = false
	constructor(
		private fb: FormBuilder,
		private formDataService: FormDataService,
	) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			name: ['', [Validators.required, Validators.minLength(3)]],
			surname: ['', [Validators.required, Validators.minLength(3)]],
			dateOfBirth: ['', Validators.required],
			gender: ['', Validators.required],
			mark: [''],
		})
	}

	onSubmit() {
		this.submitted = true

		const userObj: FormDataInterface = {
			name: this.form.value.name,
			surname: this.form.value.surname,
			dateOfBirth: this.form.value.dateOfBirth,
			gender: this.form.value.gender,
			mark: this.form.value.mark,
		}

		this.formDataService.getUser(userObj)
		this.submitted = false
	}
}
