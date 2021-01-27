import Layout from '../components/layout';
import Banner from '../components/banner';
import { FlexColumn } from '../components/reUse';
import About from '../components/about';
import Skills from '../components/skills';
import Work from '../components/work';
import Projects from '../components/projects';



export const Page = () => {
  return (
    <FlexColumn aligned={'center'}>
      <title>Bryant's Portfolio</title>
      
      <FlexColumn id='banner' aligned={'center'} height={'100vh'} width={'100%'}>
        <Banner />
        
      </FlexColumn>
      <FlexColumn id='about' aligned={'center'} width={'100%'}>
        <About />
      </FlexColumn>
      <FlexColumn id='skills' aligned={'center'} width={'100%'}>
        <Skills />
      </FlexColumn>
      <FlexColumn id='experience' aligned={'center'} width={'100%'}>
        <Work />
      </FlexColumn>
      <FlexColumn id='projects' aligned={'center'} width={'100%'}>
        <Projects />
        
      </FlexColumn>
    </ FlexColumn >
  )

}

export default function Home() {
  return (
    <Layout PageContent={Page} />
  )
}
