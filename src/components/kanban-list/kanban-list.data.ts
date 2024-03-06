import {IcolumnData, TfilerData} from "@/components/kanban-list/kanban-list.type";
import moment from "moment";


export const columnData: IcolumnData[] = [
    {
        label: 'Today',
        value: 'today'
    },
    {
        label: 'Tomorrow',
        value: 'tomorrow'
    },
    {
        label: 'On this week',
        value: 'on-this-week'
    },
    {
        label: 'On next week',
        value: 'on-next-week'
    },
    {
        label: 'Later',
        value: 'later'
    },
    {
        label: 'Complete',
        value: 'complete'
    }
]

export const dataFilter: TfilerData = {
    'today': moment(),
    'tomorrow': moment().add(1, 'day'),
    'on-this-week': moment().endOf('isoWeek'),
    'on-next-week': moment().add(1, 'week').endOf('isoWeek'),
    'later': moment().add(2, 'week').endOf('isoWeek')
}