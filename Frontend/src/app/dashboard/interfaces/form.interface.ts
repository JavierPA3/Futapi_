export interface Field {
    name: string;
    label: string;
    type: FieldType;
    options?: Option[]
    disabled: boolean;
    min?:number;
    max?:number;
    value?: number | string;
  }
  

export enum  FieldType {
    'number',
    'text' ,
    'select'
  }

interface  Option {
    value: number,
    description: string,
    default: boolean,
  }