import { Component, Input, OnInit } from '@angular/core';
import { Field, FieldType } from '../../interfaces/form.interface';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
    @Input() fields: Array<Field> = [];

    ngOnInit() {
        // Inicializa los campos con su valor por defecto si se especifica.
        this.fields.forEach(field => {
            const defaultOption = field.options?.find(option => option.default);
            if (defaultOption) {
                field.value = defaultOption.value;
            }
        });
    }

    // Determina el tipo de entrada del campo
    getInputType(type: FieldType): string {
        switch (type) {
            case FieldType.text:
                return 'text';
            case FieldType.number:
                return 'number';
            case FieldType.select:
                return 'select';
            default:
                return 'text';
        }
    }

    convertToNumber(field: Field) {
        const num = Number(field.value);
        field.value = num;
    }
}
