import React from 'react';
import styled from 'styled-components';

const StandardButton = styled.button`   
        
    padding: 12px 32px;
    max-width: 200px;
    display: flex;
    justify-content: space-around;   
    border: 1px solid rgb(32, 147, 152);
    border-radius: 4px;
    outline: none;
    background-color: transparent;
    color: rgb(0, 132, 137);
    text-transform: uppercase;
    cursor: pointer;
    :hover {
        box-shadow: -2px -2px 5px 0 rgba(32, 147, 152, .3), 2px 2px 5px 0 rgba(32, 147, 152, .3);    
    }
    :active {
            transform: scale(0.98);
    }

`
const DarkButton = styled(StandardButton)`   
                
    background-color: rgb(32, 147, 152);   
    color: #FFFFFF;        
    font-weight: 700;

`

const LightButton = styled(StandardButton)`   
        
    background-color: rgba(32, 147, 152, .1);
    font-weight: 400;   

`
const IconButtonLight = styled(StandardButton)`   
        
    text-transform: lowercase;
    padding: 8px 25px;
    line-height: 1.5rem;
    justify-content: flex-start;

`
const IconButtonDark = styled(IconButtonLight)`
    background-color: rgb(32, 147, 152);   
    color: #FFFFFF;        
    font-weight: 700;
`

const Icon = styled.img`
    margin-right: 10px;         
`


const Button = ({ variant, icon, onClick, children }) => (
    
    variant === 'iconLight' ? (
        <IconButtonLight 
            onClick = {onClick}    
            icon={icon ? true: false}        
        >            
            {icon && <Icon src={icon} />}
            <span>{children}</span>
        </IconButtonLight>

    ) : variant === 'iconDark' ? (
        <IconButtonDark 
            onClick = {onClick}    
            icon={icon ? true: false}        
        >            
            {icon && <Icon src={icon} />}
            <span>{children}</span>
        </IconButtonDark>

    ) : variant === 'dark' ? (

        <DarkButton onClick = {onClick} >
            {children}
        </DarkButton>

    ) : variant === 'light' ? (
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