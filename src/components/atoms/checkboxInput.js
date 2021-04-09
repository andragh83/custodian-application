import React from 'react';
import styled from 'styled-components';

const Input = styled.div`   
    position: relative;    
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    align-itmes: center;
    border: none;
    border-bottom: 1px solid #ccc;    
    background-color: transparent;
    color: ${({ completed }) => completed? "rgb(32, 147, 152)" : "#FF3F40"}; 
    text-transform: lowercase;
    font-weight: 400; 
    font-size: .8em;
    
    .checkbox {
        display: block;
        position: relative;
        padding-left: 25px;
        
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the default checkbox */
    .checkbox input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
        position: absolute;
        top: 5px;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: transparent;
        border: 1px solid #FF3F40;
    }

    /* On mouse-over, add a grey background color */
    .checkbox:hover input ~ .checkmark {
        background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .checkbox input:checked ~ .checkmark {
        background-color: transparent;
        border: 1px solid rgb(32, 147, 152);
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .checkbox input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .checkbox .checkmark:after {
        left: 7px;
        top: 3px;
        width: 5px;
        height: 10px;
        border: solid rgb(32, 147, 152);
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }


    .label {
        margin-left: 10px;
        font-size: .8rem;
        padding-bottom: 10px !important;
        letter-spacing: -1px;
    }

    .arrow {
        margin-top: 10px;
        width: 0.5em;
        height: 0.5em;
        border-right: 1px solid rgb(32, 147, 152);
        border-top: 1px solid rgb(32, 147, 152);
        transform: rotate(45deg);
    }

`

const CheckboxInput = ({ onChange, completed }) => (
   
        <Input completed={ completed }>
            <label className="checkbox">                
                <input                     
                    type="checkbox" 
                    name="cardInput"                 
                    checked={ completed ? "checked" : ""} 
                    onChange={onChange}            
                />
                <span className="checkmark"></span> 
                <span className="label">{ !completed ? 'outstanding' : 'completed'}</span>  
            </label>

                {/* we can replace the bellow chevron coded in css with an icon and put it inside a button
                but since there are no such icons in the assets folder, I just put it here like this
                to match the design */}

                <i className="arrow"></i>            
        </Input>             
)
export default CheckboxInput;