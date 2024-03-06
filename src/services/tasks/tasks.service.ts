import $auth from "@/api/auth";
import {Itask, TtaskUpdate} from "@/services/tasks/tasks.type";


class TasksService {
    async getTasks(): Promise<Itask[]> {
        const response = await $auth.get('/user/tasks');

        return response.data;
    }

    async updateTask(id: string, task: TtaskUpdate):Promise<Itask> {
        const response = await $auth.put(`/user/tasks/${id}`, task);

        return response.data;
    }

    async removeTask(id: string) {
        const response = await $auth.delete(`/user/tasks/${id}`);

        return response.data;
    }
}

export default new TasksService();