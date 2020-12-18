import styled from 'styled-components';
import { FlexColumn } from '../reUse';

export const SkillContainer = styled(FlexColumn)`
    width: clamp( 250px,95%,1650px);
    
`
export const List = styled.ul`
    padding: 0px;
`
export const ListItem = styled.li`
    line-height: 1.8;
    color: #8892b0;
    font-size: clamp(15px, 3vw, 20px);
    display: list-item;
    list-style: none;
    padding: 0px;
    ::before {
        content: '¤';
        color: #1DA1F2;
        padding: 5px;
    }

`