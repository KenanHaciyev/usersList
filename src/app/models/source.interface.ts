import { FormDataInterface } from './formData.interface'

export interface SourceInterface {
	dataFields: SourceObjects[]
	dataType: string
	localdata?: FormDataInterface[]
}

export interface SourceObjects {
	name: string
	type: string
}
