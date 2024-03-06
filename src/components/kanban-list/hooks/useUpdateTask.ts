import {useMutation, useQueryClient} from "@tanstack/react-query";
import {TtaskUpdate} from "@/services/tasks/tasks.type";
import TasksService from "@/services/tasks/tasks.service";

export const useUpdateTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['task update'],
        mutationFn: ({id, data}: {id: string, data: TtaskUpdate}) => TasksService.updateTask(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        }
    })
}