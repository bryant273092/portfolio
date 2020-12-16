import NavBar from '../navBar';
import {FlexColumn} from '../reUse';

export default function Layout({PageContent}) {
    return (
        <FlexColumn >
            <NavBar />
            <PageContent />
        </FlexColumn>
        
    )
}