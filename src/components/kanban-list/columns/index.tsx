'use client';

import React, {FC} from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Grid, Paper, Typography } from '@mui/material';
import {IcolumnData, IdragColumn} from "@/components/kanban-list/kanban-list.type";
import KanbanItem from "@/components/kanban-list/items";
import {useTasks} from "@/components/kanban-list/hooks/useTasks";
import {dateFilter} from "@/components/kanban-list/utils";

interface Iprops {
    column: IcolumnData
}

const KanbanColumn: FC<Iprops> = ({column}) => {

    const {data} = useTasks();
    return (
        <Grid item style={{minWidth: '30%'}} key={column.value}>
            <Paper style={{ padding: 16 }}>
                <Typography variant="h6" align="center">{column.label}</Typography>
                <Droppable droppableId={column.value}>
                    {({ innerRef, droppableProps, placeholder }) => (
                        <div
                            ref={innerRef}
                            {...droppableProps}
                            style={{
                                minHeight: '100px',
                                backgroundColor: 'lightgrey',
                                padding: '8px',
                                borderRadius: '4px'
                            }}
                        >
                            {dateFilter(data, column.value).map((item, index) => (

                               <KanbanItem key={item.id} item={item} index={index}/>

                            ))}
                            {placeholder}
                        </div>
                    )}
                </Droppable>
            </Paper>
        </Grid>

    );
};

export default KanbanColumn;