import React from 'react'
import styled from 'styled-components';
import { connect } from "react-redux";
import { 
  archiveTask, 
  toggleTask, 
  setDisplayCriteria,
  createTask, 
} from "../../redux/actions";
import PageWrapper from "../templates/pageWrapper";
import GridWrapper from "../templates/gridWrapper";
import HeaderImage from '../atoms/image';
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
    backgound-color: #FBFBFB;

  @media (max-width: 768px) {
    display: none;
  }
`

const actionCreators = {
  archiveTask,
  toggleTask,
  createTask,
  setDisplayCriteria,
}

const mapStateToProps = state => {
  return { tasks: state.tasks, displayCriteria: state.displayTasks.displayCriteria };
};

class Home extends React.Component {
  render() {

    const { 
      archiveTask, 
      toggleTask, 
      tasks, 
      setDisplayCriteria,
      createTask,
      displayCriteria
    } = this.props;

    const filteredTasks = displayCriteria === "current" ?
                            tasks.filter(task => task.archived === false) 
                        : displayCriteria === "archived" ?
                            tasks.filter(task => task.archived === true) 
                        : tasks;

    return (
    <DesktopPageContainer>    
      <PageWrapper>
        <HeaderImage src={image}/>
        <Controls 
          createTask={createTask}
          showCurrentTasks={() => setDisplayCriteria("current")}
          showArchivedTasks={() => setDisplayCriteria("archived")}
          showAll={() => setDisplayCriteria("")}
        />
        <GridWrapper>
            { 
            filteredTasks.map(task => 
              <Card 
                key={task.id}
                isComplete = {task.completed}
                onChange = {() => toggleTask(task.id)}
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
