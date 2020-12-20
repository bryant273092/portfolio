import { FlexColumn, FlexRow, SectionHeading, HeadingLine, Grid } from '../reUse';
import { List, ListItem, SkillContainer } from './styled';

const data = require('../../data/info.json')

export const Skills = () => {
    return (
        <SkillContainer aligned={'stretch'}>
            {/* <FlexRow aligned={'center'}>
                <HeadingLine />
                <SectionHeading>Skills</SectionHeading>
                <HeadingLine />
            </FlexRow> */}
            <Grid margin={'100px 0px'} width={'100%'} >
            
                <FlexColumn aligned={'center'} width={'100%'}>
                    <SectionHeading color={'#1DA1F2'}>Languages</SectionHeading>
                    <List key={'Languages'}>
                        {data.about.skills.languages.map((language) => (
                            <ListItem key={language}>{language}</ListItem>
                        ))}
                    </List>
                </FlexColumn>
                <FlexColumn aligned={'center'} width={'100%'}>
                    <SectionHeading color={'#1DA1F2'}>Frameworks</SectionHeading>
                    <List key={'Frameworks'}>
                        {data.about.skills.frameworks.map((framework) => (
                            <ListItem key={framework}>{framework}</ListItem>
                        ))}
                    </List>
                </FlexColumn>
                <FlexColumn aligned={'center'} width={'100%'}>
                    <SectionHeading color={'#1DA1F2'}>Tools</SectionHeading>
                    <List key={'Tools'}>
                        {data.about.skills.tools.map((tool) => (
                            <ListItem key={tool}>{tool}</ListItem>
                        ))}
                    </List>
                </FlexColumn>
                <FlexColumn aligned={'center'} width={'100%'}>
                    <SectionHeading color={'#1DA1F2'}>Methods</SectionHeading>
                    <List key={'Methods'}>
                        {data.about.skills.methods.map((method) => (
                            <ListItem key={method}>{method}</ListItem>
                        ))}
                    </List>
                </FlexColumn>
            </Grid>
        </SkillContainer>

    )
}