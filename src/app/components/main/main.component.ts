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
import { SourceInterface } from '../../models/source.interface'
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs'

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit, OnDestroy {
	public destroyed$: Subject<boolean> = new Subject<boolean>()

	source: SourceInterface = {
		dataFields: [
			{ name: 'name', type: 'string' },
			{ name: 'surname', type: 'string' },
			{ name: 'dateOfBirth', type: 'string' },
			{ name: 'gender', type: 'string' },
			{ name: 'mark', type: 'text' },
		],
		dataType: 'array',
	}

	constructor(
		private formDataService: FormDataService,
		private cdRef: ChangeDetectorRef,
	) {}

	ngOnInit(): void {
		this.formDataService.formData$
			.pipe(takeUntil(this.destroyed$))
			.subscribe((data: FormDataInterface[]) => {
				this.source.localdata = data
				this.cdRef.detectChanges()
			})
	}

	dataAdapter: any = new jqx.dataAdapter(this.source)

	columns: ColumnsTypesInterface[] = [
		{ text: 'Name', dataField: 'name', width: 110 },
		{ text: 'Surname', dataField: 'surname', width: 130 },
		{ text: 'Date of Birth', dataField: 'dateOfBirth', width: 120 },
		{ text: 'Gender', dataField: 'gender', width: 80 },
		{ text: 'Mark', dataField: 'mark', width: 180 },
	]

	ngOnDestroy(): void {
		this.destroyed$.next(true)
		this.destroyed$.complete()
	}
}
