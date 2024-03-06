import moment from "moment";
import {Itask} from "@/services/tasks/tasks.type";
import {dataFilter} from "@/components/kanban-list/kanban-list.data";
import {Tcolumns} from "@/components/kanban-list/kanban-list.type";

export const dateFilter = (tasks: Itask[] | undefined, value: Tcolumns) => {
    switch (value) {
        case 'today':
            return tasks?.filter(task =>
                moment(task.createdAt).isSame(dataFilter["today"], 'day')
                && !task.isCompleted
            )
        case 'tomorrow':
            return tasks?.filter(task =>
                moment(task.createdAt).isSame(dataFilter["tomorrow"], 'day')
                && moment(task.createdAt).isAfter(dataFilter["today"])
                && !task.isCompleted
            )
        case 'on-this-week':
            return tasks?.filter(task =>
                moment(task.createdAt).isSame(dataFilter["on-this-week"], 'week')
                && moment(task.createdAt).isAfter(dataFilter["tomorrow"], 'week')
                && !task.isCompleted
            )
        case 'on-next-week':
            return tasks?.filter(task =>
                moment(task.createdAt).isSame(dataFilter["on-next-week"], 'week')
                && moment(task.createdAt).isAfter(dataFilter["on-this-week"], 'week')
                && !task.isCompleted
            )
        case 'later':
            return tasks?.filter(task => moment(task.createdAt).isAfter(dataFilter["on-next-week"], 'day')
                && !task.isCompleted
            )
        case 'complete':
            return tasks?.filter(task => task.isCompleted)
        default:
            return [];
    }
}