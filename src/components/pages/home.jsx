import React from 'react'
import styled from 'styled-components';
import { connect } from "react-redux";
import { 
  archiveTask, 
  toggleCompletedTask, 
  showAllTasks,
  showTasksByArchived,
  createTask, 
} from "../../redux/actions";
import PageWrapper from "../templates/pageWrapper";
import GridWrapper from "../templates/gridWrapper";
import HeaderImage from '../atoms/images/image';
import Controls from '../molecules/controls/controls';
import image from '../../assets/images/garage.jpg';
import Card from '../molecules/card/card';


// Dont worry about mobile UI. Pretend this is only for Desktop.
// Hence why the media query below has been added.
// Feel free to add styling to the Desktop page wrapper on this styled component directly 
// rather than creating another one underneath.


const DesktopPageContainer = styled.div`  
    display: flex;
    justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const actionCreators = {
  archiveTask,
  toggleCompletedTask, 
  showAllTasks,
  showTasksByArchived,
  createTask,
}

const mapStateToProps = state => {
  return { tasks: state.tasks, displayTasks: state.displayTasks };
};

class Home extends React.Component {
  render() {

    const { 
      archiveTask, 
      toggleCompletedTask, 
      tasks, 
      createTask,
      displayTasks,
      showAllTasks,
      showTasksByArchived,
    } = this.props;


    const tasksToDisplay = !displayTasks.setDisplayCriteria ? tasks 
                            : tasks.filter(task => task[displayTasks.criteria] === displayTasks.criteriaValue)

    return (
    <DesktopPageContainer>    
      <PageWrapper>
        <HeaderImage src={image}/>
        <Controls 
          createTask={createTask}
          showCurrentTasks={() => showTasksByArchived('archived', false)}
          showArchivedTasks={() => showTasksByArchived('archived', true)}
          showAll={showAllTasks}
        />
        <GridWrapper>
            { 
            tasksToDisplay.map(task => 
              <Card 
                key={task.id}
                isComplete = {task.completed}
                onChange = {() => toggleCompletedTask(task.id)}
                title = {task.title}
                body = {task.body}
                archive = {() => archiveTask(task.id)}
                isArchived = {task.archived}
                // reminder = {}
              />
              )
             }
        </GridWrapper>
      </PageWrapper>  
    </DesktopPageContainer>)
  }
};


export default connect(mapStateToProps, actionCreators)(Home);
