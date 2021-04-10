import React from 'react';
import { StandardTitle } from './title.stories';
import { StandardParagraph } from './paragraph.stories';

export default {
    title: 'molecules/typography'
}

export const Typography = () => (
    <>
    <StandardTitle />
    <StandardParagraph />
    </>
)