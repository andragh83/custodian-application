import React from 'react'
import styled from 'styled-components';
import { connect } from "react-redux";
import { archiveTask } from "../../redux/actions";
import MainWrapper from "../templates/mainWrapper";
import ControlsWrapper from "../templates/controlsWrapper";
import ContentWrapper from "../templates/contentWrapper";
import HeaderImage from '../atoms/image';
import Button from '../atoms/buttons';
import image from '../../assets/images/garage.jpg';
import icon from '../../assets/icons/archive.svg';

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
}


const mapStateToProps = state => {
  return { tasks: state.tasks };
};

class Home extends React.Component {
  render() {
    return (
    <DesktopPageContainer>    
      <MainWrapper>
        <HeaderImage src={image}/>
        <ControlsWrapper>
          <Button type='standard'>
            Create task
          </Button>
          <Button type='dark'>
            Create task
          </Button>
          <Button type='light'>
            Create task
          </Button>
          <Button type='icon' icon={icon}>
            Archive the task
          </Button>
        </ControlsWrapper>
        <ContentWrapper>
          
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
