import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`   

    width: 1150px;    
    margin-top: 70px;
    margin-left: 60px;

`
const PageWrapper = ({ children }) => (
    <Wrapper>
        { children }
    </Wrapper>
)

export default PageWrapper;