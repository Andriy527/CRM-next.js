import {useQuery} from "@tanstack/react-query";
import TasksService from "@/services/tasks/tasks.service";

export const useTasks = () => {
    return useQuery({
        queryKey: ['tasks'],
        queryFn: TasksService.getTasks,
    })
}