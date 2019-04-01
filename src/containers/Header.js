import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';
import { ColorScheme } from '../theme/styleConstants.js';

const ProfileTitle = styled.h1`
  color: #4c3f77;

`

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  color: ${ColorScheme.third};
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: #a4bcbc;
  font-size: 20px;
`
const NavLink2 = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: #a4bcbc;
  font-size: 20px;
`

const IconImage = styled.img`

  max-width: 5%;
  height: auto;

`



class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        {/* <IconImage src={'https://res.cloudinary.com/pneal1995/image/upload/v1554053977/unnamed_cut.png'}/> */}
        <NavLink2 to="/">
          Studios
        </NavLink2>
       
        <NavLink to="/">
          Events
        </NavLink>
       
        <NavLink to="/">
          Media
        </NavLink>
        <NavLink to="/">
          Artists
        </NavLink>  
       
  
        <div>

       
        </div>

        
      </HeaderDiv>
    );
  }
}

export default Header;