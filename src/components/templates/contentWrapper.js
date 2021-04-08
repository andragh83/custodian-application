import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`   
    
    width: auto;
    display: grid;
    grid-template-columns: 525px 525px;   
    justify-items: streched; 
    grid-column-gap: 100px;
    grid-row-gap: 50px;
}

`
const ContentWrapper = ({ children }) => (
    <Wrapper>
        { children }
    </Wrapper>
)

export default ContentWrapper;