import * as moment from 'moment';

export interface IdragColumn {
    id: string,
    title: string,
    items: IdragItem[]
}

export interface IdragItem {
    id: string,
    content: string
}


export type Tcolumns = 'today' | 'tomorrow' | 'on-this-week' | 'on-next-week' | 'later' | 'complete';

export interface IcolumnData {
    label: string,
    value: Tcolumns
}

export type TfilerData = Record<Tcolumns, moment.Moment>