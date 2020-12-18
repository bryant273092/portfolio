import { AboutContainer } from './styled';
import { SectionHeading, HeadingLine, FlexColumn, FlexRow, Image, Text } from '../reUse';


const data = require('../../data/info.json')
export const About = () => {
    return (
        <AboutContainer>
            <FlexRow aligned={'center'}>
                <SectionHeading>About Me</SectionHeading>
                <HeadingLine />
            </FlexRow>
            <FlexRow margin={'100px 0px'}>
                <FlexColumn jc={'center'} aligned={'center'} >
                    <Image width={'50%'} src={'/headshot.jpg'} />
                </FlexColumn>
                <FlexColumn width={'80%'} aligned={'center'}>
                    <Text color={'#8892b0'} width={'80%'}>{data.about.who}</Text>
                    <Text color={'#8892b0'} width={'80%'}>{data.about.experience}</Text>
                    <Text color={'#8892b0'} width={'80%'}>{data.about.education}</Text>
                </FlexColumn>
            </FlexRow>
        </AboutContainer>
    )
}