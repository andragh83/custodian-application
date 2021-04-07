import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`   

    ${'' /* width: 1150px;    
    margin-top: 70px;
    margin-left: 60px; */}

    width: 80%;    
    margin-top: 5%;
    margin-left: 4%;

`
const MainWrapper = ({ children }) => (
    <Wrapper>
        { children }
    </Wrapper>
)

export default MainWrapper;