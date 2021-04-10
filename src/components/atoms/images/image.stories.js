import React from 'react';
import HeaderImage from './image';
import image from '../../../assets/images/garage.jpg';

export default {
    title: 'atoms/headerImage',
    component: HeaderImage
}

export const Image = () => <HeaderImage src = {image}/>
