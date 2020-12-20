import styled from 'styled-components';

export const blueT = '#1DA1F2'
export const offWhite = '#8892b0'

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.aligned || ''};
    margin: ${(props) => props.margin || '0'};
    height: ${(props) => props.height || 'auto'};
    width: ${(props) => props.width || 'auto'};
    justify-content: ${(props) => props.jc || ''};
    background-color: ${(props) => props.bg || 'none'};
    border-radius: ${(props) => props.br || '0'};
    
`
export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: ${(props) => props.aligned || ''};
    margin: ${(props) => props.margin || '0'};
    justify-content: ${(props) => props.jc || ''};
    
`
export const Grid = styled(FlexColumn)`
    display: grid;
    grid-template-columns: ${(props) => props.template || 'repeat(auto-fit, minmax(120px, 1fr))'};
    width: ${(props) => props.width || 'auto'};
    margin: ${(props) => props.margin || '0'};
    grid-row-gap: 25px;
    grid-column-gap: 15px;
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
    font-size: ${(props) => props.size || 'clamp(20px, 4vw, 30px)'};
    padding: ${(props) => props.padding || '10px 10px 10px 10px'};
    margin: ${(props) => props.margin || ''};
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
    @media (max-width: 1024px) {
        width: 35%;
    }
`
export const Text = styled.p`
    color: ${(props) => props.color || 'white'}; 
    font-size: clamp(15px, 1.7vw, 22.5px);
    width: ${(props) => props.width || "clamp(250px, 60%, 800px)"};
    margin-left: 10px;
    margin-right: 10px;
    line-height: 1.8;
    margin-top: ${(props) => props.top || 'clamp(20px, 7.5%, 45px)'};
`