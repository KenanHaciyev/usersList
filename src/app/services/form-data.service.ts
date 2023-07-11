import { FormDataInterface } from '../models/formData.interface'
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
@Injectable({
	providedIn: 'root',
})
export class FormDataService {
	public users: FormDataInterface[] = []
	public formData$: Subject<FormDataInterface[]> = new Subject<FormDataInterface[]>()

	getUser(user: FormDataInterface) {
		this.users.push(user)
		setTimeout(() => this.formData$.next(this.users), 0)
	}
}
