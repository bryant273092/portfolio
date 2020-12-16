import { FlexColumn, FlexRow, SectionHeading, HeadingLine } from '../reUse';
import { List, ListItem, SkillContainer } from './styled';

const data = require('../../data/info.json')

export const Skills = () => {
    return (
        <SkillContainer aligned={'stretch'}>
            <FlexRow aligned={'center'}>
                <HeadingLine />
                <SectionHeading>Skills</SectionHeading>
                <HeadingLine />
            </FlexRow>
            <FlexRow width={'100%'} >
                <FlexColumn aligned={'center'} width={'100%'}>
                    <SectionHeading color={'#1DA1F2'}>Languages</SectionHeading>
                    <List>
                        {data.about.skills.languages.map((language) => (
                            <ListItem>{language}</ListItem>
                        ))}
                    </List>
                </FlexColumn>
                <FlexColumn aligned={'center'} width={'100%'}>
                    <SectionHeading color={'#1DA1F2'}>Frameworks</SectionHeading>
                    <List>
                        {data.about.skills.frameworks.map((framework) => (
                            <ListItem>{framework}</ListItem>
                        ))}
                    </List>
                </FlexColumn>
                <FlexColumn aligned={'center'} width={'100%'}>
                    <SectionHeading color={'#1DA1F2'}>Tools</SectionHeading>
                    <List>
                        {data.about.skills.tools.map((tool) => (
                            <ListItem>{tool}</ListItem>
                        ))}
                    </List>
                </FlexColumn>
                <FlexColumn aligned={'center'} width={'100%'}>
                    <SectionHeading color={'#1DA1F2'}>Methods</SectionHeading>
                    <List>
                        {data.about.skills.methods.map((method) => (
                            <ListItem>{method}</ListItem>
                        ))}
                    </List>
                </FlexColumn>
            </FlexRow>
        </SkillContainer>

    )
}