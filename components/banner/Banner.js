import { BannerContainer, BannerHeader, ImageFilter, BannerText } from './styled';
import { Button, FlexColumn, ButtonGrid } from '../reUse';
export const Banner = () => {
    return (
        <BannerContainer>
            <FlexColumn >
                <BannerHeader>Bryant Hernandez.</BannerHeader>
                <BannerHeader topMargin={'0px'} color={'#8892b0'}>Creator with a passion for design and engineering.</BannerHeader>
                <BannerText color={'#8892b0'}>
                    I'm a software engineer based in Orange and Los Angeles County specializing in designing, and building of exceptional websites, applications, and everything in between.
                </BannerText>
                <ButtonGrid aligned={'left'}>
                    <Button>View Experience</Button>
                    <Button href={'/Resume_BryantH.pdf'}>View Resume</Button>
                </ButtonGrid>
            </FlexColumn>
        </BannerContainer>
    )
}