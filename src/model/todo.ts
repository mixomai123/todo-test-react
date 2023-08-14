export interface TodoItem {
    id: string,
    title: string,
    completed: boolean
}

export enum TodoFilter {
    'all',
    'completed',
    incomplete
}
