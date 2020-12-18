import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../reUse';

const blueT = '#1DA1F2'

export const WorkContainer = styled(FlexColumn)`
    width: clamp( 250px,95%,1650px);
`
export const Nav = styled(FlexRow)`
    width: 50%;
    border: 1px solid ${blueT};
    align-items: center;
    border-radius: 10px;
    
`
export const NavDiv = styled(FlexColumn)`
    :hover{
        text-decoration: none;
        background-color: rgb(255, 255, 255, 0.1);
    };
    background-color: ${(props) => props.selected ? 'rgb(255, 255, 255, 0.1)' : 'transparent'};
    width: 100%;
    padding: 10px;
`
export const NavItem = styled.a`
    color: white;
    text-align: center;
    width: auto;
    border-bottom: ${(props) => '2px solid ' + props.click || '2px solid transparent'} ;
    font-size: 18px;
    :hover{
        text-decoration: none;
        color: ${(props) => props.selected ? blueT : 'white'}
    }
    color: ${(props) => props.selected ? blueT : 'white'}
`
export const RenderBox = styled(FlexColumn)`
    width: 90%;
    
`
export const JobContainer = styled(FlexColumn)`
    display: ${(props) => props.selected ? 'flex' : 'none'};
    
`
export const Image = styled.img`
   width: 100%;
   margin: ${(props) => props.margin || '0px'}
`