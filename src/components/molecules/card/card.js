import React from 'react';
import styled from 'styled-components';
import CheckboxInput from '../../atoms/inputs/chekbox/checkboxInput';
import Arrow from '../../atoms/arrow/arrow';
import CardHeaderWrapper from './cardHeaderWrapper';
import CardBodyWrapper from './cardBodyWrapper';
import CardFooterWrapper from './cardFooterWrapper';
import Button from '../../atoms/buttons/buttons';
import Title from '../../atoms/typography/title';
import Paragraph from '../../atoms/typography/paragraph';
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
            <Title>
                {title}
            </Title>
            <Paragraph>
                {body}
            </Paragraph>
        </CardBodyWrapper>

        <CardFooterWrapper>
            {
                !isArchived ?
                <Button variant='iconLight' icon={archiveIcon} onClick = {archive}>
                    Archive the task
                </Button>
                :
                <Button variant='dark' icon={archiveIcon} onClick = {archive}>
                    Archived
                </Button>
            }            
            <Button variant='iconLight' icon={reminderIcon} onClick = {reminder}>
                set a reminder
            </Button>
        </CardFooterWrapper>

    </CardWrapper>
)

export default Card;