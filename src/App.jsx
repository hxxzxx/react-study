import {
    EachPostLi,
    Footer,
    FooterBig,
    FooterSmall,
    Header,
    LoadingDiv,
    LoadingImg,
    Main,
    MediaDiv,
    PagenumberDiv,
    PagingSection,
    PostLink,
    PostListDiv,
    PostRepl,
    PostSection,
    PostTitle,
    PostTitleDiv,
    SlogunBig,
    SlogunSection,
    SlogunSmall,
    SubHeaderDiv,
    TitleBig,
    TitleLogoDiv,
    TitleSmall,
} from './styledComponent';

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
import {
    faSun,
    faMoon,
    faArrowsRotate,
    faPenToSquare,
    faLocationPin,
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { GlobalStyles,darkTheme,lightTheme } from './styles';
import { ThemeProvider } from "styled-components";
import lodingIcon from './loading.svg';

function App() {
    const darkmode =false;
    const loading = false;
    const isPost = true;
    return (
         <>
         <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
            <GlobalStyles />
                <MediaDiv>
                    <Header>
                        <TitleLogoDiv>
                            <TitleBig>멋사</TitleBig>
                            <TitleSmall>익명게시판</TitleSmall>
                        </TitleLogoDiv>
                        <SubHeaderDiv>
                            {darkmode ? 
                            <div> <FontAwesomeIcon icon ={faMoon}/></div>
                            :
                            <div> <FontAwesomeIcon icon ={faSun}/> </div>}
                        </SubHeaderDiv>
                    </Header>
                    <Main>
                        <SlogunSection>
                            <SlogunBig>HACK YOUR LIFE</SlogunBig>
                            <SlogunSmall>내 아이디어를 내 손으로 실현한다.</SlogunSmall>
                        </SlogunSection>
                        <PostSection>
                            <PostTitleDiv>
                                <FontAwesomeIcon icon ={faArrowsRotate}/>
                                <PostTitle>익명게시판</PostTitle>
                                <FontAwesomeIcon icon ={faPenToSquare}/>
                            </PostTitleDiv>
                        
                            <PostListDiv>
                            {loading ? 
                            <LoadingDiv>
                                <LoadingImg src={lodingIcon}/>
                            </LoadingDiv> : 
                            isPost?(<ul>
                                <EachPostLi>
                                    <div>
                                        <FontAwesomeIcon icon={faLocationPin}/>
                                        <PostLink>이희주 리액트 부셔버리다.</PostLink>
                                    </div>
                                    <PostRepl>[40]</PostRepl>
                                </EachPostLi>
                            </ul>):(<LoadingDiv>등록된 글이 없습니다.</LoadingDiv>)}
                            </PostListDiv>
                        </PostSection>
                        <PagingSection>
                        <PagenumberDiv><FontAwesomeIcon icon ={faArrowLeft}/></PagenumberDiv>
                            <PagenumberDiv>2</PagenumberDiv>
                            <PagenumberDiv><FontAwesomeIcon icon ={faArrowRight}/></PagenumberDiv>

                        </PagingSection>
                    </Main>
                    <Footer>
                        <FontAwesomeIcon icon ={faReact}/>
                        <FooterBig>Study For React</FooterBig>
                        <FooterSmall>2022.07.03 by HeeJu</FooterSmall>

                    </Footer>
                </MediaDiv>

        </ThemeProvider>
    </>
    );
}

export default App;
