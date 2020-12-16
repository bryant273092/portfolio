import { AboutContainer } from './styled';
import { SectionHeading, HeadingLine, FlexColumn, FlexRow, Image } from '../reUse';
import { BannerText } from '../banner/styled';

const data = require('../../data/info.json')
export const About = () => {
    return (
        <AboutContainer>
            <FlexRow aligned={'center'}>
                <SectionHeading>About Me</SectionHeading>
                <HeadingLine />
            </FlexRow>
            <FlexRow>
                <FlexColumn jc={'center'} aligned={'center'} >
                    <Image width={'50%'} src={'/headshot.jpg'} />
                </FlexColumn>
                <FlexColumn width={'80%'} aligned={'center'}>
                    <BannerText color={'#8892b0'} width={'80%'}>{data.about.who}</BannerText>
                    <BannerText color={'#8892b0'} width={'80%'}>{data.about.experience}</BannerText>
                    <BannerText color={'#8892b0'} width={'80%'}>{data.about.education}</BannerText>
                </FlexColumn>
            </FlexRow>
        </AboutContainer>
    )
}