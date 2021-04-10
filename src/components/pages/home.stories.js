import React from 'react';
import { Image } from '../atoms/images/image.stories';
import { ControlsSection } from '../molecules/controls/controls.stories';
import PageWrapper from '../templates/pageWrapper';
import GridWrapper from '../templates/gridWrapper';
import { TaskCardOne, TaskCardTwo, TaskCardThree, TaskCardFour  } from '../molecules/card/card.stories';



export default {
    title: 'pages/home'
}

const HomePageGrid = ({items, ...args}) => (
    <GridWrapper {...args}>
        <TaskCardOne {...TaskCardOne.args}/>
        <TaskCardTwo {...TaskCardTwo.args}/>
        <TaskCardThree {...TaskCardThree.args}/>
        <TaskCardFour {...TaskCardFour.args}/>
    </GridWrapper>  
)

export const HomePage = (args) => (
        <PageWrapper {...args}>
            <Image />
            <ControlsSection />
            <HomePageGrid {...HomePageGrid.args} />
        </PageWrapper>
)