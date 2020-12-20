import styled from 'styled-components';
import { FlexColumn, FlexRow, blueT, offWhite } from '../reUse';
import { List, ListItem} from '../skills/styled'


export const WorkContainer = styled(FlexColumn)`
    width: clamp( 250px,95%,1650px);
`
export const Nav = styled(FlexRow)`
    width: 50%;
    border: 1px solid ${blueT};
    align-items: center;
    border-radius: 10px;
    @media (max-width: 1024px) {
        width: auto;
    }
    
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
    height: 100%;
    
`
export const JobContainer = styled(FlexColumn)`
    display: ${(props) => props.selected ? 'flex' : 'none'};
    
`
export const Image = styled.img`
   width: 100%;
   margin: ${(props) => props.margin || '0px'}
`
export const Card = styled(FlexColumn)`
    border-radius: 15px;
    align-items: center;
    background-color: rgb(255, 255, 255, 0.05);
`
export const ItemList = styled(List)`
    padding-left: 10px;
    align-self: start;
`
export const Item = styled(ListItem)`
    
`
export const ContentRow = styled(FlexRow)`
    @media (max-width: 1024px) {
        flex-direction: column;
    }

`
export const ClientContainer = styled(FlexColumn)`
    display: ${(props) => props.isDisplayed? 'flex' : 'none' };
`
