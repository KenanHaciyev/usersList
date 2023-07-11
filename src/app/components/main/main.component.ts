import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit,
} from '@angular/core'
import { ColumnsTypesInterface } from '../../models/columnsTypes.interface'
import { FormDataInterface } from '../../models/formData.interface'
import { FormDataService } from '../../services/form-data.service'
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs'

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit, OnDestroy {
	public users: FormDataInterface[] = []
	public destroyed$: Subject<boolean> = new Subject<boolean>()

	columns: ColumnsTypesInterface[] = [
		{ text: 'Firstname', dataField: 'Firstname', width: 200 },
		{ text: 'Surname', dataField: 'Surname', width: 200 },
		{ text: 'Date Of Birth', dataField: 'DateOfBirth', width: 200 },
		{ text: 'Gender', dataField: 'Gender', width: 100 },
		{ text: 'Mark', dataField: 'Mark', width: 250 },
	]
	constructor(
		private formDataService: FormDataService,
		private cdRef: ChangeDetectorRef,
	) {}

	ngOnInit(): void {
		this.formDataService.formData$
			.pipe(takeUntil(this.destroyed$))
			.subscribe((data: FormDataInterface[]) => {
				this.users.push(...data)
				this.cdRef.detectChanges()
			})
	}

	ngOnDestroy(): void {
		this.destroyed$.next(true)
		this.destroyed$.complete()
	}
}
