export interface Itask {
    createdAt: string
    id: string
    isCompleted: boolean
    name: string
    priority: null | string
    updatedAt: string
    userId: string
}

export type TtaskUpdate = Partial<Omit<Itask, 'id' | 'updatedAt'>>