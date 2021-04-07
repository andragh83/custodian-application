import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`   

    width: 100%;
    ${'' /* height: 270px; */}
    height: 35%;
    margin: 0;  

    .header_image {        
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 100% 38%; 
    }  
`
const HeaderImage = ({ src }) => (
    <ImageContainer>
        <img className="header_image" src={src} alt="header_image_cars" />
    </ImageContainer>
)

export default HeaderImage;