import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`   

    position: relative;    
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    align-itmes: center;
    border: none;
    border-bottom: 1px solid #DBDBDB;    
    background-color: transparent;   

`

const CardHeaderWrapper = ({ children }) => (
   
        <HeaderWrapper>
            {children}
        </HeaderWrapper>          
)
export default CardHeaderWrapper;