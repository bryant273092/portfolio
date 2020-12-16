import styled from 'styled-components';

const blueT = '#1DA1F2'
const offWhite = '#8892b0'

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.aligned || ''};
    margin: ${(props) => props.margin || '0'};
    height: ${(props) => props.height || 'auto'};
    width: ${(props) => props.width || 'auto'};
    justify-content: ${(props) => props.jc || ''};
    
`
export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: ${(props) => props.aligned || ''};
    margin: ${(props) => props.margin || '0'}
    
`
export const Button = styled.a`
    color: ${(props) => props.color || blueT};
    padding: ${(props) => props.padding || '15px'}; 
    width: ${(props) => props.width || '30%'};
    border-radius: ${(props) => props.br || '10px'};
    margin: ${(props) => props.margin || '10px'};
    border: 2px solid ${blueT};
    text-align: center;
    @media (max-width: 1024px) {
        width: clamp(250px, 60%, 400px);
    };
    text-decoration: none;
    :hover {
        color: white;
        
        text-decoration: none;
    }
`
export const ButtonGrid = styled(FlexRow)`
    width: 100%;
    margin-top: clamp(20px,7.5%,45px);
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`
export const SectionHeading = styled.h3`
    color: ${(props) => props.color || 'white'};
    font-size: clamp(20px, 4vw, 30px);
    padding: ${(props) => props.padding || '10px 10px 10px 10px'};
    white-space: nowrap;

`
export const HeadingLine = styled.hr`
    border-top: 2px solid ${offWhite};
    width: 100%;
    margin: 0px 10px;
`
export const Image = styled.img`
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    border-radius: 100%;
    filter: grayscale(60%);
`