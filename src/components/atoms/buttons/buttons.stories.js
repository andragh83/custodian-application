import React from 'react';
import Button from './buttons';
import archiveIcon from '../../../assets/icons/archive.svg';
import archiveIconWhite from '../../../assets/icons/archiveWhite.svg';

export default {
    title: 'atoms/button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked'}
    }
}

const Template = args => <Button {...args} />

export const StandardButton = Template.bind({});
StandardButton.args = {
    variant: 'standard',
    children: 'Standard button'
}

export const DarkButton = Template.bind({});
DarkButton.args = {
    variant: 'dark',
    children: 'Dark button'
}

export const LightButton = Template.bind({});
LightButton.args = {
    variant: 'light',
    children: 'Light button'
}

export const IconButtonLight = Template.bind({});
IconButtonLight.args = {
    variant: 'iconLight',
    icon: archiveIcon,
    children: 'Icon button light'
}

export const IconButtonDark = Template.bind({});
IconButtonDark.args = {
    variant: 'iconDark',
    icon: archiveIconWhite,
    children: 'Icon button dark'
}
