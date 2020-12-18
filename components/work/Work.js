import { FlexColumn, FlexRow, SectionHeading, Button, HeadingLine, Text } from '../reUse';
import { WorkContainer, Nav, NavItem, NavDiv, RenderBox, JobContainer, Image } from './styled';
import { useState } from 'react';
import { List, ListItem} from '../skills/styled'

export const Work = () => {
    const data = require('../../data/info.json')
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
                    <NavDiv selected={firstBtn}>
                        <NavItem selected={firstBtn} onClick={() => {
                            handleClick('first')
                        }}>
                            Paciolan
                    </NavItem>
                    </NavDiv>
                    <NavDiv selected={secondBtn}>
                        <NavItem selected={secondBtn} onClick={() => {
                            handleClick('second')
                        }} >
                            Givsum
                    </NavItem>
                    </NavDiv>
                    <NavDiv selected={thirdBtn}>
                        <NavItem selected={thirdBtn} onClick={() => {
                            handleClick('third')
                        }}>
                            Dreamware
                    </NavItem>
                    </NavDiv>
                </Nav>
            </FlexColumn>
            <FlexColumn margin={'50px 0px 0px 0px'} width={'100%'} aligned={'center'}>
                <RenderBox>
                    <JobContainer selected={firstBtn}>
                        <FlexRow>
                            <FlexColumn width={'100%'}  >
                                <SectionHeading padding={'0px 0px 0px 10px'} size={'clamp(20px, 4vw, 30px)'} color={'#1DA1F2'}>Paciolan LLC</SectionHeading>
                                <FlexRow aligned={'center'}>
                                    <SectionHeading padding={'0px 0px 0px 10px'} size={'clamp(15px, 4vw, 25px)'}>{data.Experience["Paciolan LLC"].title}</SectionHeading>
                                    <SectionHeading padding={'0px 0px 0px 10px'} size={'20px'} color={'#8892b0'}>( Sept - Dec 2020 )</SectionHeading>
                                </FlexRow>
                                <FlexRow margin={'50px 0px 0px 0px'} >
                                    <FlexColumn width={'100%'}>
                                        <Text top={'0px'} width={'100%'} color={'#8892b0'} >
                                            {data.Experience["Paciolan LLC"].description}
                                        </Text>
                                    </FlexColumn>
                                    <FlexColumn margin={'0px 0px 0px 50px'} aligned={'center'} >
                                        <Image src={'/paciolan.png'} />
                                        <Button>View Site</Button>
                                    </FlexColumn>
                                </FlexRow>

                            </FlexColumn>
                        </FlexRow>

                    </JobContainer>
                    <JobContainer selected={secondBtn}>
                        <FlexRow>
                            <FlexColumn width={'100%'}  >
                                <SectionHeading padding={'0px 0px 0px 10px'} size={'clamp(20px, 4vw, 30px)'} color={'#1DA1F2'}>Givsum INC</SectionHeading>
                                <FlexRow aligned={'center'}>
                                    <SectionHeading padding={'0px 0px 0px 10px'} size={'clamp(15px, 4vw, 25px)'}>{data.Experience["Givsum INC"].title}</SectionHeading>
                                    <SectionHeading padding={'0px 0px 0px 10px'} size={'20px'} color={'#8892b0'}>( Jan - July 2020 )</SectionHeading>
                                </FlexRow>
                                <FlexRow margin={'50px 0px 0px 0px'}>
                                    <FlexColumn width={'100%'}>
                                        <Text top={'0px'} width={'100%'} color={'#8892b0'} >
                                            {data.Experience["Givsum INC"].description}
                                        </Text>
                                    </FlexColumn>
                                    <FlexColumn margin={'0px 0px 0px 50px'} aligned={'center'} >
                                        <Image src={'/givsum.png'} />
                                        <Button>View Site</Button>
                                    </FlexColumn>
                                </FlexRow>
                            </FlexColumn>
                        </FlexRow>
                    </JobContainer>
                    <JobContainer selected={thirdBtn}>
                        <FlexRow>
                            <FlexColumn width={'100%'}  >
                                <SectionHeading padding={'0px 0px 0px 10px'} size={'clamp(20px, 4vw, 30px)'} color={'#1DA1F2'}>Dream Ware LLC</SectionHeading>
                                <FlexRow aligned={'center'}>
                                    <SectionHeading padding={'0px 0px 0px 10px'} size={'clamp(15px, 4vw, 25px)'}>{data.Experience["DreamWare LLC"].title}</SectionHeading>
                                    <SectionHeading padding={'0px 0px 0px 10px'} size={'20px'} color={'#8892b0'}>( Jan 2019 - Current )</SectionHeading>
                                </FlexRow>
                                <FlexRow margin={'50px 0px 0px 0px'}>
                                    <FlexColumn width={'100%'}>
                                        <Text top={'0px'} width={'100%'} color={'#8892b0'} >
                                            {data.Experience["DreamWare LLC"].description}
                                        </Text>
                                    </FlexColumn>
                                    <FlexColumn margin={'0px 0px 0px 50px'} aligned={'center'} >
                                        <Image src={'/paciolan.png'} />
                                        <Button>View Site</Button>
                                    </FlexColumn>
                                </FlexRow>
                                <FlexColumn margin={'50px 0px 0px 0px'}>
                                    <SectionHeading>Clients</SectionHeading>
                                    <List>
                                        <ListItem as='a' href={'//taco-nacion.com'}>Taco Nacion</ListItem>
                                        <ListItem>ADA WebPro</ListItem>
                                        <ListItem>Fromthescene</ListItem>
                                        <ListItem>Magical Rentals</ListItem>
                                    </List>
                                </FlexColumn>

                            </FlexColumn>
                        </FlexRow>
                    </JobContainer>
                    <FlexColumn height={'100vh'}></FlexColumn>
                </RenderBox>
            </FlexColumn>
        </WorkContainer>
    )
}