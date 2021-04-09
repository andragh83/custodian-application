import React from 'react';
import styled from 'styled-components';
import CheckboxInput from '../../atoms/checkboxInput';
import Arrow from '../../atoms/arrow';
import CardHeaderWrapper from './cardHeaderWrapper';
import CardBodyWrapper from './cardBodyWrapper';
import CardFooterWrapper from './cardFooterWrapper';
import Button from '../../atoms/buttons';
import archiveIcon from '../../../assets/icons/archive.svg';
import reminderIcon from '../../../assets/icons/reminder.svg';


const CardWrapper = styled.div`
    max-width: 550px;
    display: flex;    
    flex-direction: column;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: -2px -2px 20px 0 rgba(228, 233, 237, .5), 10px 10px 20px 0 rgba(228, 233, 237, .5);    
    color: rgba(46, 49, 49, 1);

    .title {
        font-size: 16px;     
        font-weight: 500;    
        margin-bottom: 10px;      
    }

    .body {
        font-size: 14px;
        line-height: 1.2rem;
        text-align: left;
    }
`

const Card = ({ title, body, isComplete, onChange, archive, isArchived, reminder, isReminderSet }) => (
    <CardWrapper>

        <CardHeaderWrapper>
            <CheckboxInput isChecked={isComplete} onChange={onChange}/>
            <Arrow />
        </CardHeaderWrapper>
        
        <CardBodyWrapper>
            <div className="title">{title}</div>
            <div className="body">{body}</div>
        </CardBodyWrapper>

        <CardFooterWrapper>
            {
                !isArchived ?
                <Button theme='iconLight' icon={archiveIcon} onClick = {archive}>
                    Archive the task
                </Button>
                :
                <Button theme='dark' icon={archiveIcon} onClick = {archive}>
                    Archived
                </Button>
            }            
            <Button theme='iconLight' icon={reminderIcon} onClick = {reminder}>
                set a reminder
            </Button>
        </CardFooterWrapper>

    </CardWrapper>
)

export default Card;