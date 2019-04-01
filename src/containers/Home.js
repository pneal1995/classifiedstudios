import React, { Component } from 'react';
import styled from "styled-components";
import { CenteredHeader, SubText } from './App.js';


const MainDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  margin-bottom:0rem;
  height: auto;
  width: 100%;
  
`;
const FakeDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  margin-bottom:0rem;
  height: auto;
  width: 100%;
  
`;

const Image = styled.img`

  max-width: 50%;
  height: auto;

`
class Home extends Component {
  render() {
    return (
      <div>
         <MainDiv>
        
        </MainDiv>
        <MainDiv style={{background: 'white'}}>
        <Image src={'https://res.cloudinary.com/pneal1995/image/upload/v1554075791/output-onlinepngtools.png'}/>
        </MainDiv>
       
      </div>
      
    );
  }
}

export default Home;
