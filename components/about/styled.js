import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../reUse';

export const AboutContainer = styled(FlexColumn)`
    width: clamp( 250px,95%,1650px);
`
export const ContentContainer = styled(FlexRow)`
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`
export const ImageContainer = styled(FlexColumn)`
    
   
`
export const TextContainer = styled(FlexColumn)`
    @media (max-width: 1024px) {
        width: 100%
    }
`