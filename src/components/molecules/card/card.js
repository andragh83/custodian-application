import React from 'react';
import styled from 'styled-components';
import CheckboxInput from '../../atoms/checkboxInput';
import CardBody from './cardBody';
import CardFooter from './cardFooter';
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

const Card = ({ completed, onChange, title, body, archive, isArchived, reminder, isReminderSet }) => (
    <CardWrapper>
        <CheckboxInput completed={completed} onChange={onChange}/>
        <CardBody>
            <div className="title">{title}</div>
            <div className="body">{body}</div>
        </CardBody>
        <CardFooter>
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
        </CardFooter>
    </CardWrapper>
)

export default Card;