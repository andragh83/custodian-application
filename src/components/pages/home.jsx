import React from 'react'
import styled from 'styled-components';
import { connect } from "react-redux";
import { archiveTask, toggleTask } from "../../redux/actions";
import MainWrapper from "../templates/mainWrapper";
import ControlsWrapper from "../templates/controlsWrapper";
import ContentWrapper from "../templates/contentWrapper";
import HeaderImage from '../atoms/image';
import Button from '../atoms/buttons';
import image from '../../assets/images/garage.jpg';
import Card from '../molecules/card';


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
  toggleTask
}


const mapStateToProps = state => {
  return { tasks: state };
};

class Home extends React.Component {
  render() {

    const { archiveTask, toggleTask, tasks } = this.props;

    return (
    <DesktopPageContainer>    
      <MainWrapper>
        <HeaderImage src={image}/>
        <ControlsWrapper>          
          <Button theme='dark'>
            Create task
          </Button>
        </ControlsWrapper>
        <ContentWrapper>
            {tasks.map(task => 
              <Card 
                key={task.id}
                completed = {task.completed}
                onChange = {() => toggleTask(task.id)}
                title = {task.title}
                body = {task.body}
                archive = {() => archiveTask(task.id)}
                // reminder = {}
              />
            )}
        </ContentWrapper>
        
        
        {/* <div>This is the main page</div>

        <button onClick={() => {
        this.props.archiveTask(3)
      }}>
        Redux action example: by clicking this, you archive the task of ID 3. 
        </button> */}

      {/* On clicking, check what happens in the Redux Dev Tools. It is going to be helpful for your own debugging. */}      
      </MainWrapper>  
    </DesktopPageContainer>)
  }
};


export default connect(mapStateToProps, actionCreators)(Home);
