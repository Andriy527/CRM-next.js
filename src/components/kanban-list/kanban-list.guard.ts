import {Tcolumns} from "@/components/kanban-list/kanban-list.type";

export const isColumnType = (value: any): value is Tcolumns => {
    return ['today', 'tomorrow', 'on-this-week', 'on-next-week', 'later', 'complete'].includes(value);
}