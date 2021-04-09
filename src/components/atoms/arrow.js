import React from 'react';
import styled from 'styled-components';

const ArrowStyle = styled.i`   

    margin-top: 10px;
    width: 0.5em;
    height: 0.5em;
    border-right: 1px solid rgb(32, 147, 152);
    border-top: 1px solid rgb(32, 147, 152);
    transform: rotate(45deg);

`
const Arrow = () => (
    <ArrowStyle></ArrowStyle>
)

export default Arrow;