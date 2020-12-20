import { AboutContainer,ContentContainer, ImageContainer, TextContainer } from './styled';
import { SectionHeading, HeadingLine, FlexColumn, FlexRow, Image, Text} from '../reUse';


const data = require('../../data/info.json')
export const About = () => {
    return (
        <AboutContainer>
            <FlexRow aligned={'center'}>
                <SectionHeading>About Me</SectionHeading>
                <HeadingLine />
            </FlexRow>
            <ContentContainer aligned={'center'}margin={'50px 0px'}>
                <ImageContainer jc={'center'} aligned={'center'} >
                    <Image  width={'45%'}src={'/headshot.jpg'} />
                </ImageContainer>
                <TextContainer width={'80%'} aligned={'center'}>
                    <Text color={'#8892b0'} width={'90%'}>{data.about.who}</Text>
                    <Text color={'#8892b0'} width={'90%'}>{data.about.experience}</Text>
                    <Text color={'#8892b0'} width={'90%'}>{data.about.education}</Text>
                </TextContainer>
            </ContentContainer>
        </AboutContainer>
    )
}