import React from 'react';
import CheckboxInput from './checkboxInput';

export default {
    title: 'atoms/inputs/checkbox',
    component: CheckboxInput,
    argTypes: {
        onChange: { action: 'clicked'}
    }
}

const Template = args => <CheckboxInput {...args} />

export const CheckedInput = Template.bind({});
CheckedInput.args = {
    isChecked: true
}

export const UheckedInput = Template.bind({});
UheckedInput.args = {
    isChecked: false
}

