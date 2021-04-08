import React from 'react';
import styled from 'styled-components';
import CardInput from '../atoms/cardInput';
import CardBody from '../atoms/cardBody';
import CardFooter from '../atoms/cardFooter';
import Button from '../atoms/buttons';
import archiveIcon from '../../assets/icons/archive.svg';
import reminderIcon from '../../assets/icons/reminder.svg';


const CardWrapper = styled.div`
    max-width: 550px;
    display: flex;    
    flex-direction: column;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: -2px -2px 20px 0 rgba(228, 233, 237, .5), 10px 10px 20px 0 rgba(228, 233, 237, .5);    
    color: rgba(46, 49, 49, 1);

    .title {
        font-size: 1.1em;     
        font-weight: 700;    
        margin-bottom: 20px;       
    }

    .body {
        font-size: .9rem;
        line-height: 1.5rem;
        text-align: left;
    }
`

const Card = ({ completed, onChange, title, body, archive, reminder }) => (
    <CardWrapper>
        <CardInput completed={completed} onChange={onChange}/>
        <CardBody>
            <div className="title">{title}</div>
            <div className="body">{body}</div>
        </CardBody>
        <CardFooter>
            <Button theme='icon' icon={archiveIcon} onClick = {archive}>
                Archive the task
            </Button>
            <Button theme='icon' icon={reminderIcon} onClick = {reminder}>
                set a reminder
            </Button>
        </CardFooter>
    </CardWrapper>
)

export default Card;