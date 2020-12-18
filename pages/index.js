import Layout from '../components/layout';
import Banner from '../components/banner';
import { FlexColumn } from '../components/reUse';
import About from '../components/about';
import Skills from '../components/skills';
import Work from '../components/work';
export const Page = () => {
  return (
    <FlexColumn aligned={'center'}>
      <FlexColumn aligned={'center'} height={'100vh'} width={'100%'}>
        <Banner />
      </FlexColumn>
      <FlexColumn aligned={'center'} width={'100%'}>
        <About />
      </FlexColumn>
      <FlexColumn aligned={'center'} width={'100%'}>
        <Skills />
      </FlexColumn>
      <FlexColumn aligned={'center'} width={'100%'}>
        <Work />
      </FlexColumn>
    </ FlexColumn >
  )

}

export default function Home() {
  return (
    <Layout PageContent={Page} />
  )
}
