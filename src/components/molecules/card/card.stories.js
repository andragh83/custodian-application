import React from 'react';
import Card from './card';

export default {
    title: 'molecules/card',
    component: Card
}

const Template = args => <Card {...args} />

export const TaskCardOne = Template.bind({});
TaskCardOne.args = {
    title: "Renew Parking Permit",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.",
    isComplete: false,
    isArchived: false,
}

export const TaskCardTwo = Template.bind({});
TaskCardTwo.args = {
    title: "Organise a Photoshoot",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.",
    isComplete: true,
    isArchived: false,
}

export const TaskCardThree = Template.bind({});
TaskCardThree.args = {
    title: "Call insurance company",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.",
    isComplete: false,
    isArchived: false,
}

export const TaskCardFour = Template.bind({});
TaskCardFour.args = {
    title: "Change the tires",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.",
    isComplete: true,
    isArchived: true,
}