'use client';

import React, {useState} from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import {CircularProgress, Grid, Paper, Typography} from '@mui/material';
import KanbanColumn from "@/components/kanban-list/columns";
import TasksService from "@/services/tasks/tasks.service";
import {useTasks} from "@/components/kanban-list/hooks/useTasks";
import {columnData, dataFilter} from "@/components/kanban-list/kanban-list.data";
import {useUpdateTask} from "@/components/kanban-list/hooks/useUpdateTask";
import {isColumnType} from "@/components/kanban-list/kanban-list.guard";
import {useTaskDrag} from "@/components/kanban-list/hooks/useTaskDrag";



const KanbanList = () => {
    const {isLoading} = useTasks();
    const {onDragEnd} = useTaskDrag();


    if(isLoading) return <CircularProgress sx={{margin: '0 auto'}}/>


    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Grid container style={{ flexWrap: 'nowrap', overflowX: 'auto' }} spacing={2}>
                {columnData.map(column => (
                    <KanbanColumn column={column}/>
                ))}
            </Grid>
        </DragDropContext>
    );
};

export default KanbanList;