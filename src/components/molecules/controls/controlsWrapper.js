import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`   
    
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const ControlsWrapper = ({ children }) => (
    <Wrapper>
        { children }
    </Wrapper>
)

export default ControlsWrapper;