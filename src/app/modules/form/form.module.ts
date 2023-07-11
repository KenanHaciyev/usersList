import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormComponent } from './components/form/form.component'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

const routes: Routes = [
	{
		path: '',
		component: FormComponent,
	},
]

@NgModule({
	declarations: [FormComponent],
	exports: [],
	imports: [CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
})
export class FormModule {}
