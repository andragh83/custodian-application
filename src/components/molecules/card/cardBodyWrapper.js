import React from 'react';
import styled from 'styled-components';

const BodyWrapper = styled.div`   

    max-width: 400px;        
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 30px 30px;    
    padding-bottom: 0px;
    border: none;      
    background-color: transparent;    

`

const CardBodyWrapper = ({ children }) => (
   
        <BodyWrapper>
            {children}
        </BodyWrapper>          
)
export default CardBodyWrapper;