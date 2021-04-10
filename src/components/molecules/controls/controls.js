import React from 'react';
import styled from 'styled-components';
import ControlsWrapper from './controlsWrapper';
import Button from '../../atoms/buttons/buttons';

const LeftSide = styled.div`   
    display: inline-flex;
    flex-wrap: wrap;
    gap: 12px;
    
`

const RightSide = styled.div`   
    display: flex;
    justify-content: flex-end;
`

const Controls = ( { createTask, showCurrentTasks, showArchivedTasks, showAll }) => (
    <ControlsWrapper>
        <LeftSide>
            <Button variant='dark' onClick={showAll}>
                Show all
            </Button>
            <Button variant='light' onClick={showCurrentTasks}>
                Current tasks
            </Button>
            <Button variant='standard' onClick={showArchivedTasks}>
                Archived tasks
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