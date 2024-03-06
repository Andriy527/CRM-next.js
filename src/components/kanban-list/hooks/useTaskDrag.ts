import {useUpdateTask} from "@/components/kanban-list/hooks/useUpdateTask";
import {isColumnType} from "@/components/kanban-list/kanban-list.guard";
import {dataFilter} from "@/components/kanban-list/kanban-list.data";

export const useTaskDrag = () => {
    const {mutate} = useUpdateTask();

    const onDragEnd = (result) => {
        const { source, destination, draggableId } = result;

        if(source.droppableId === destination.droppableId) return

        if(destination.droppableId === 'complete') {
            mutate({
                id: draggableId,
                data: {
                    isCompleted: true
                }
            })

            return
        }

        if(isColumnType(destination.droppableId)) {
            const newItemDate = dataFilter[destination.droppableId].format('YYYY-MM-DDTHH:mm:ssZ');

            mutate({
                id: draggableId,
                data: {
                    createdAt: newItemDate,
                    isCompleted: false
                }
            })
        }

        return
    };

    return {onDragEnd}
}