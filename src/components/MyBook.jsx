import HTMLFlipBook from 'react-pageflip';
import coverImg from "../assets/989747_OHIGE10.jpg";
import Page from "./page";
import Cover from './pages/Cover';
import Firstpage from './pages/Firstpage';
import SamplePage from './pages/samplePage';
import Scenemodel from './pages/Scenemodel';

function MyBook(props) {
    return (
        <HTMLFlipBook width={450} height={550} showCover>
            <Page number={1}  >
                <Cover coverImg={coverImg} title={"Title"}/>
            </Page>
            <Page number={2} >
                <Firstpage/>
            </Page>
            <Page number={3} >
                <SamplePage/>
            </Page>
            <Page number={4} >
                <Scenemodel/>
            </Page>
            <Page number={5} >
                <div className="demoPage text-black">Page 5</div>
            </Page>
        </HTMLFlipBook>
    );
}

export default MyBook