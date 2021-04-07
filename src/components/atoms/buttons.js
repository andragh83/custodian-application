import React from 'react';
import styled from 'styled-components';

const StandardButton = styled.button`   
        
    padding: 12px 32px;
    display: flex;
    justify-content: space-around;
    ${'' /* align-itmes: center; */}
    border: 1px solid rgb(0, 132, 137);
    border-radius: 4px;
    outline: none;
    background-color: transparent;
    color: rgb(0, 132, 137);
    text-transform: uppercase;

`
const DarkButton = styled(StandardButton)`   
                
    background-color: rgb(0, 132, 137);   
    color: #FFFFFF;        
    font-weight: 700;

`

const LightButton = styled(StandardButton)`   
        
    background-color: rgba(0, 132, 137, .1);
    font-weight: 400;   

`
const IconButton = styled(StandardButton)`   
        
    text-transform: lowercase;
    padding: 8px 32px;
    line-height: 1.5rem;

`

const Icon = styled.img`
    margin-right: 10px;         
`


const Button = ({ type, icon, onClick, children }) => (
    type === 'icon' ? (
        <IconButton 
            onClick = {onClick}    
            icon={icon ? true: false}        
        >            
            {icon && <Icon src={icon} />}
            <span>{children}</span>
        </IconButton>

    ) : type === 'dark' ? (

        <DarkButton onClick = {onClick} >
            {children}
        </DarkButton>
    ) : type === 'light' ? (
        <LightButton onClick = {onClick} >
            {children}
        </LightButton>
    ) : (
        <StandardButton 
            onClick = {onClick}
        >            
            {children}
        </StandardButton>
    )
)

export default Button;