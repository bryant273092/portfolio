import {CardContainer} from './styled';
import {FlexRow, SectionHeading, HeadingLine, Grid, FlexColumn, Button } from '../reUse';
import { List, ListItem} from '../skills/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,  } from '@fortawesome/free-brands-svg-icons'
import { faFile, faExternalLink } from '@fortawesome/free-regular-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import {Image} from '../work/styled'
export const ProjectCard = ({ project }) => {
    const iconMap = {
        'Github': faGithub,
        "File" : faFile,
        "External" : faExternalLinkAlt
    }
    
    return (
        <CardContainer>
                <SectionHeading color={'#1DA1F2'}>{project.name}</SectionHeading>
                <Image src={project.image} />
                <List height={'100%'} width={'90%'}>
                    {project.details.map((detail) => (
                        <ListItem>{detail}</ListItem>
                    ))}
                </List>
                <Button href={project.link} width={'auto'}>{project.linkName}<span > <FontAwesomeIcon color="#1DA1F2" icon={iconMap[project.icon]} /></span></Button>
        </CardContainer>
    )
}