import styled from 'styled-components';
import {FlexColumn, FlexRow} from '../reUse';

export const BannerContainer = styled(FlexColumn)`
    width: clamp( 250px,95%,1650px);
    justify-content: center;
    align-items: center;
    height: 100%;
`
export const BannerHeader = styled.h1`
    width: auto;
    color: ${(props) => props.color || 'white'};
    text-align: left;
    border-radius: 20px;
    font-size: clamp(30px, 8vw, 75px);
    margin-left: 10px;
    margin-right: 10px;
    
`
export const ImageFilter = styled.div`
    width: 100%;
    height: inherit;
    
`
export const BannerText = styled.p`
    color: ${(props) => props.color || 'white'}; 
    font-size: clamp(15px, 3vw, 22.5px);
    width: ${(props) => props.width || "clamp(250px, 60%, 800px)"};
    margin-left: 10px;
    margin-right: 10px;
    line-height: 1.6;
    margin-top: clamp(20px, 7.5%, 45px)
`
