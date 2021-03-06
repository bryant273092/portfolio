import { BannerContainer, BannerHeader, ImageFilter, BannerText } from './styled';
import { Button, FlexColumn, ButtonGrid, Text } from '../reUse';


export const Banner = () => {
    return (
        <BannerContainer id={'banner'}>
            <FlexColumn >
                <BannerHeader>Bryant Hernandez</BannerHeader>
                <BannerHeader topMargin={'0px'} color={'#8892b0'}>Creator with a passion for design and engineering.</BannerHeader>
                <Text color={'#8892b0'}>
                    I'm a software engineer based in Orange and Los Angeles County specializing in designing, and building of exceptional websites, applications, and everything in between.
                </Text>
                <ButtonGrid aligned={'left'}>
                    <Button href={'#experience'}>View Experience</Button>
                    <Button href={'/Resume_BryantH.pdf'}>View Resume</Button>
                </ButtonGrid>
            </FlexColumn>
        </BannerContainer>
    )
}


