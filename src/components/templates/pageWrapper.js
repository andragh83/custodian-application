import React from 'react';
import styled from 'styled-components';

const PageWrapperStyle = styled.div`   

    width: 1150px;    
    margin-top: 70px;
    margin-left: 60px;

`
const PageWrapper = ({ children }) => (
    <PageWrapperStyle>
        {children}
    </PageWrapperStyle>
)

export default PageWrapper;