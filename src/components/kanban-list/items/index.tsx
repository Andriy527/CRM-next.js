'use client';
import React, {FC} from 'react';
import {IdragItem} from "@/components/kanban-list/kanban-list.type";
import {Typography} from "@mui/material";
import {Draggable} from "@hello-pangea/dnd";
import {Itask} from "@/services/tasks/tasks.type";

interface Iprops {
    item: Itask,
    index: number
}

const KanbanItem: FC<Iprops> = ({item, index}) => {

    return (
            <Draggable key={item.id} draggableId={item.id} index={index}>
                {({ innerRef, draggableProps, dragHandleProps }) => (
                    <div
                        ref={innerRef}
                        {...draggableProps}
                        {...dragHandleProps}
                        style={{
                            userSelect: 'none',
                            padding: '8px',
                            margin: '0 0 8px 0',
                            backgroundColor: 'white',
                            ...draggableProps.style
                        }}
                    >
                        <Typography>{item.name}</Typography>
                    </div>
                )}
            </Draggable>
    );
};

export default KanbanItem;