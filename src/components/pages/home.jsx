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

    console.log(displayCriteria);

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
            { displayCriteria === "current" ?
            tasks.filter(task => task.archived === false).map(task => 
              <Card 
                key={task.id}
                completed = {task.completed}
                onChange = {() => toggleTask(task.id)}
                title = {task.title}
                body = {task.body}
                archive = {() => archiveTask(task.id)}
                isArchived = {task.archived}
                // reminder = {}
              />
            ) : displayCriteria === "archived" ?
            tasks.filter(task => task.archived === true).map(task => 
              <Card 
                key={task.id}
                completed = {task.completed}
                onChange = {() => toggleTask(task.id)}
                title = {task.title}
                body = {task.body}
                archive = {() => archiveTask(task.id)}
                isArchived = {task.archived}
                // reminder = {}
              />
            ) : tasks.map(task => 
              <Card 
                key={task.id}
                completed = {task.completed}
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
        
        
        {/* <div>This is the main page</div>

        <button onClick={() => {
        this.props.archiveTask(3)
      }}>
        Redux action example: by clicking this, you archive the task of ID 3. 
        </button> */}

      {/* On clicking, check what happens in the Redux Dev Tools. It is going to be helpful for your own debugging. */}      
      </PageWrapper>  
    </DesktopPageContainer>)
  }
};


export default connect(mapStateToProps, actionCreators)(Home);
