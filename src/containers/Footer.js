import React, { Component } from 'react';
import styled from 'styled-components';

import { ColorScheme } from '../theme/styleConstants.js'

const FooterDiv = styled.div`
  padding-top: 3rem;
  padding-bottom: 0;
  
  text-align: center;
  height: 150px;
`;

const SocialIconList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SocialIcon = styled.li`
  display: inline;
  color: red;
`;

const FAIcon = styled.i`
  &:hover {
    color: ${ColorScheme.third}
    transition: all .3s ease;
    transform: scale(1.1) translateY(-5px);
  }
`;


class Footer extends Component {
  render() {
    return (
      <FooterDiv>
            <div className="row social" style={{ margin: 0}}>
              <div className="col-lg-12">
                <SocialIconList>
                  <SocialIcon><a href="" target="_blank" rel="noopener noreferrer"><FAIcon className="fa fa-instagram fa-fw fa-2x" /></a></SocialIcon>
                  <SocialIcon><a href="" target="_blank" rel="noopener noreferrer"><FAIcon className="fa fa-facebook fa-fw fa-2x" /></a></SocialIcon>
                  <SocialIcon><a href="" target="_blank" rel="noopener noreferrer"><FAIcon className="fa fa-envelope fa-fw fa-2x" /></a></SocialIcon>
                </SocialIconList>
                <br />
              </div>
            </div>
            <div className="row" id="copyright" style={{ margin: 0, color: '#D3D3D3'}}>
              <div className="col-lg-12">
                <p className="small" >© ClassifiedStudios </p>
              </div>
            </div>
      </FooterDiv>
        );
  }
}

export default Footer;
