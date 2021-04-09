import React from 'react';
import styled from 'styled-components';
import ControlsWrapper from './controlsWrapper';
import Button from '../../atoms/buttons';

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
            <Button theme='dark' onClick={showAll}>
                Show all
            </Button>
            <Button theme='light' onClick={showCurrentTasks}>
                Current tasks
            </Button>
            <Button theme='standard' onClick={showArchivedTasks}>
                Archived tasks
            </Button>            
        </LeftSide>
        <RightSide>        
            <Button theme='dark' onClick={createTask}>
                Create task
            </Button>
        </RightSide>
    </ControlsWrapper>
)

export default Controls;