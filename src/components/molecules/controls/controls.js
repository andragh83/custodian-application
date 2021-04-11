import React from 'react';
import styled from 'styled-components';
import ControlsWrapper from './controlsWrapper';
import Button from '../../atoms/buttons/buttons';

const LeftSide = styled.div`   
    display: inline-flex;
    flex-wrap: wrap;
    gap: 5px;
    
`

const RightSide = styled.div`   
    display: flex;
    justify-content: flex-end;
`

const Controls = ( { createTask, showCurrentTasks, showArchivedTasks, showAll, sortTasksByTitle }) => (
    <ControlsWrapper>
        <LeftSide>
            <Button variant='dark' onClick={showAll}>
                    Show All
            </Button>
            <Button variant='light' onClick={sortTasksByTitle}>
                    Sort
            </Button>
            <Button variant='standard' onClick={showCurrentTasks}>
                Current
            </Button>
            <Button variant='standard' onClick={showArchivedTasks}>
                Archived
            </Button>                         
        </LeftSide>
        <RightSide>        
            <Button variant='dark' onClick={createTask}>
                Create task
            </Button>
        </RightSide>
    </ControlsWrapper>
)

export default Controls;