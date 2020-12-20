import { ProjectsContainer } from './styled';
import ProjectCard from '../projectCard';
import { FlexRow, SectionHeading, HeadingLine, Grid, FlexColumn } from '../reUse';
export const Projects = () => {
    const data = require('../../data/info.json')
    return (
        <ProjectsContainer>
            <FlexRow aligned={'center'}>
                <HeadingLine />
                <SectionHeading>Featured Projects</SectionHeading>
                <HeadingLine />
            </FlexRow>
            <FlexColumn width={'90%'}margin={'100px auto'} jc={'center'}>
                <Grid template={'repeat(auto-fit, minmax(250px,1fr))'} margin={'25px 0px 0px 0px'} jc={'space-between'}>
                    {data.Projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </Grid>
            </FlexColumn>
        </ProjectsContainer>
    )
}