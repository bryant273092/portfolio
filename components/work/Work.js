import { FlexColumn, FlexRow, SectionHeading, Button, HeadingLine, Text, Grid } from '../reUse';
import { WorkContainer, Nav, NavItem, NavDiv, RenderBox, JobContainer, Image, Card, ContentRow, ClientContainer } from './styled';
import ProjectCard from '../projectCard';
import { useState } from 'react';


export const Work = () => {
    const data = require('../../data/info.json')
    const [ btnState, setisbtnState] = useState('View Clients')
    const [isDisplayed, setisDisplayed] = useState(false)
    const [firstBtn, setfirstBtn] = useState(true)
    const [secondBtn, setsecondBtn] = useState(false);
    const [thirdBtn, setthirdBtn] = useState(false)
    const handleClick = (btn) => {
        switch (btn) {
            case 'first':
                setsecondBtn(false)
                setthirdBtn(false)
                setfirstBtn(true)
                break;
            case 'second':
                setsecondBtn(true)
                setthirdBtn(false)
                setfirstBtn(false)
                break;
            case 'third':
                setsecondBtn(false)
                setthirdBtn(true)
                setfirstBtn(false)
                break;
        }
    }
    return (
        <WorkContainer>
            <FlexRow aligned={'center'}>
                <SectionHeading>Where I've Worked</SectionHeading>
                <HeadingLine />
            </FlexRow>
            <FlexColumn margin={'100px 0px 0px 0px'} width={'100%'} aligned={'center'}>
                <Nav>
                    <NavDiv  onClick={() => {
                            handleClick('first')
                        }}selected={firstBtn}>
                        <NavItem selected={firstBtn} >
                            Paciolan
                    </NavItem>
                    </NavDiv>
                    <NavDiv onClick={() => {
                            handleClick('second')
                        }}selected={secondBtn}>
                        <NavItem selected={secondBtn} >
                            Givsum
                    </NavItem>
                    </NavDiv>
                    <NavDiv onClick={() => {
                            handleClick('third')
                        }}selected={thirdBtn}>
                        <NavItem selected={thirdBtn}>
                            Dreamware
                    </NavItem>
                    </NavDiv>
                </Nav>
            </FlexColumn>
            <FlexColumn margin={'50px 0px '} width={'100%'} aligned={'center'}>
                <RenderBox>
                    <JobContainer selected={firstBtn}>               
                            <FlexColumn width={'100%'}  >
                                <SectionHeading padding={'0px 0px 0px 10px'} size={'clamp(20px, 4vw, 30px)'} color={'#1DA1F2'}>Paciolan LLC</SectionHeading>
                                <ContentRow aligned={'left'}>
                                    <SectionHeading padding={'0px 0px 0px 10px'} size={'clamp(15px, 3vw, 25px)'}>{data.Experience["Paciolan LLC"].title}</SectionHeading>
                                    <SectionHeading padding={'0px 0px 0px 10px'} size={'clamp(15px, 3vw, 25px)'} color={'#8892b0'}>( Sept - Dec 2020 )</SectionHeading>
                                </ContentRow>
                                <ContentRow margin={'50px 0px 0px 0px'} >
                                    <FlexColumn width={'100%'}>
                                        <Text top={'0px'} width={'100%'} color={'#8892b0'} >
                                            {data.Experience["Paciolan LLC"].description}
                                        </Text>
                                    </FlexColumn>
                                    <FlexColumn margin={'0px 0px 0px 0px'} aligned={'center'} >
                                        <Image src={'/paciolan.png'} />
                                        <Button href={'https://uhcougars.evenue.net/events/houston-cougars-football'}>View Site</Button>
                                    </FlexColumn>
                                </ContentRow>
                            </FlexColumn>
                    </JobContainer>
                    <JobContainer selected={secondBtn}>
                        <FlexRow>
                            <FlexColumn width={'100%'}  >
                                <SectionHeading padding={'0px 0px 0px 10px'} size={'clamp(20px, 4vw, 30px)'} color={'#1DA1F2'}>Givsum INC</SectionHeading>
                                <ContentRow aligned={'left'}>
                                    <SectionHeading padding={'0px 0px 0px 10px'} size={'clamp(15px, 3vw, 25px)'}>{data.Experience["Givsum INC"].title}</SectionHeading>
                                    <SectionHeading padding={'0px 0px 0px 10px'} size={'clamp(15px, 3vw, 25px)'} color={'#8892b0'}>( Jan - July 2020 )</SectionHeading>
                                </ContentRow>
                                <ContentRow margin={'50px 0px 0px 0px'}>
                                    <FlexColumn width={'100%'}>
                                        <Text top={'0px'} width={'100%'} color={'#8892b0'} >
                                            {data.Experience["Givsum INC"].description}
                                        </Text>
                                    </FlexColumn>
                                    <FlexColumn margin={'0px 0px 0px 0px'} aligned={'center'} >
                                        <Image src={'/givsum.png'} />
                                        <Button href={'https://www.givsum.com/'}>View Site</Button>
                                    </FlexColumn>
                                </ContentRow>
                            </FlexColumn>
                        </FlexRow>
                    </JobContainer>
                    <JobContainer selected={thirdBtn}>
                        <FlexRow>
                            <FlexColumn width={'100%'}  >
                                <SectionHeading padding={'0px 0px 0px 10px'} size={'clamp(20px, 4vw, 30px)'} color={'#1DA1F2'}>Dream Ware LLC</SectionHeading>
                                <ContentRow aligned={'left'}>
                                    <SectionHeading padding={'0px 0px 0px 10px'} size={'clamp(15px, 3vw, 25px)'}>{data.Experience["DreamWare LLC"].title}</SectionHeading>
                                    <SectionHeading padding={'0px 0px 0px 10px'} size={'clamp(15px, 3vw, 25px)'} color={'#8892b0'}>( Jan 2019 - Current )</SectionHeading>
                                </ContentRow>
                                <ContentRow margin={'50px 0px 0px 0px'}>
                                    <FlexColumn width={'100%'}>
                                        <Text top={'0px'} width={'100%'} color={'#8892b0'} >
                                            {data.Experience["DreamWare LLC"].description}
                                        </Text>
                                    </FlexColumn>
                                    <FlexColumn margin={'0px 0px 0px 0px'} aligned={'center'} >
                                        <Image src={'/soon.png'} />
                                        <Button onClick={ ()=> {
                                            setisDisplayed(!isDisplayed)
                                            if (!isDisplayed){
                                                setisbtnState ("Hide Clients")
                                                
                                            }else{
                                                setisbtnState('View Clients')
                                            }
                                            
                                        }}>{btnState}</Button>
                                    </FlexColumn>
                                </ContentRow>
                                <ClientContainer isDisplayed={isDisplayed} >
                                    <SectionHeading padding={'0px 0px 0px 10px'} size={'clamp(20px, 4vw, 30px)'}>Clients</SectionHeading>
                                    <Grid template={'repeat(auto-fit, minmax(250px, 1fr))'}margin={'25px 0px 0px 0px'} jc={'space-between'} >
                                        {data.clients.map((client) => (
                                            <ProjectCard key={client.name} project={client} />
                                        ))}
                                    </Grid>
                                </ClientContainer>
                            </FlexColumn>
                        </FlexRow>
                    </JobContainer>
                </RenderBox>
            </FlexColumn>
        </WorkContainer>
    )
}