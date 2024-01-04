import { 
    BackButton,
    ButtonContainer, 
    ButtonIcon, 
    ClearButton, 
    CloseImg, 
    Container, 
    DropDownMenu, 
    DropDownMenuContent, 
    HeaderButtons, 
    Logo,
    LinkLogo, 
    LogOutButton, 
    LoginButton, 
    LoginContainer, 
    LoginIcon, 
    LogoContainer, 
    SearchButton, 
    SearchButtonResponsive, 
    SearchContainer, 
    SearchInput, 
    SearchInputContainer,
    Span,
    UserInfoContainer,
    UserName
} from "./styles";
import Logoyt from '../../assets/YouTube-Logo_2cad60d8881f48c099a2043ad35e0b4b.png';
import SearchIcon from '../../assets/search_117b78df834249fdb899e63f5f5a8aac.png';
import CloseIcon from '../../assets/close.png';
import MicIcon from '../../assets/microfone-gravador_5aec03c3660f4d97b7d99219e43f0185.png';
import VideoIcon from '../../assets/video_1a3f517c18cd4d86ab8f61fabd033f5a.png';
import BackButtonIcon from '../../assets/voltar.png';
import NotificationIcon from '../../assets/sino_382bed4de97b4204abbd5eb05c8795d9.png';
import Logout from '../../assets/logout.png';
import LoginIconPng from '../../assets/login-icon.png';
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useAppContext } from "../../context/openMenu";
import { useSearchContext } from "../../context/searchContext";
import { useCategoryContext } from "../../context/searchCategories";
import Menu from "../../assets/menu.png";


const Header: React.FC = () => {
    const { openMenu, setOpenMenu } = useAppContext();
    
    const [clearButton, setClearButton] = useState(false)
    
    const [openSearch, setOpenSearch] = useState(false);
    
    const inputRef = useRef<HTMLInputElement>(null);

    const Search = () => {
        setOpenSearch(true)
        if(inputRef.current) {
            inputRef.current.focus()
        }
    }
    
    const navigate = useNavigate();
    
    const handleMenuClick = () => {
        setOpenMenu(!openMenu);
    };
    
    const { login, logOut, user, openDropDownMenu, setOpenDropDownMenu} = useContext(UserContext)

    const handleDropDownMenu = () => {
        setOpenDropDownMenu(!openDropDownMenu)
    }

    const {setSearch} = useSearchContext()

    const [inputValue, setInputValue] = useState('')

    function handleInput(inputValue: string) {
        setInputValue(inputValue)
        if(inputValue === '') {
            setClearButton(false)
        } else (
            setClearButton(true)
        )
    }

    const clearInput = () => {
        setInputValue('')
        setClearButton(false)
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    const goOut = () => {
        logOut()
        handleDropDownMenu()
        navigate('/')
    }

    const goYourVideos = () => {
        navigate('/yourvideos')
        handleDropDownMenu()
    }
    
    const {setCategoryId} = useCategoryContext()


    return (
        <Container>

            <LogoContainer>

                <ButtonContainer onClick={handleMenuClick} margin='0 10px 0 0'>
                    <ButtonIcon alt="logo menu" src={Menu} />
                </ButtonContainer>

                <LinkLogo to="/" onClick={() => setCategoryId('0')}>
                    <Logo alt="logo youtube" src={Logoyt} />
                </LinkLogo>

            </LogoContainer>

            <SearchButtonResponsive onClick={Search}>
                <ButtonIcon alt="ícone lupa" src={SearchIcon}/>
            </SearchButtonResponsive>

            <SearchContainer openSearch={openSearch}>

                <BackButton openSearch={openSearch} onClick={() => setOpenSearch(false)}>
                    <img alt="Botão voltar" src={BackButtonIcon} style={{width: '20px'}} />
                </BackButton>

                <SearchInputContainer>

                    <SearchInput
                        ref={inputRef}
                        value={inputValue}
                        placeholder="Pesquisar"
                        onChange={(e) => {
                            handleInput(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setSearch(inputValue)
                                navigate('/search')
                                setOpenSearch(false)
                            }
                        }}
                    />

                    <ClearButton
                        clearButton={clearButton}
                        onClick={clearInput}
                        >
                            <CloseImg src={CloseIcon}/>
                    </ClearButton>

                </SearchInputContainer>

                <SearchButton onClick={() => {
                    if (inputValue.trim() === '') {
                        alert('Digite alguma palavra chave antes de tentar pesquisar')
                        return;
                    }
                    setSearch(inputValue)
                    navigate('/search')
                }}
                >
                    <ButtonIcon alt="ícone lupa" src={SearchIcon}/>
                </SearchButton>

                <ButtonContainer margin='0 0 0 10px' responsive688>
                    <ButtonIcon alt="ícone microfone" src={MicIcon} />
                </ButtonContainer>


            </SearchContainer>

            {login?
                <HeaderButtons>

                    <ButtonContainer onClick={() => navigate('/yourvideos')}>
                        <ButtonIcon alt="ícone vídeo" src={VideoIcon} />
                    </ButtonContainer>

                    <ButtonContainer margin="0 0 0 10px" responsive600>
                        <ButtonIcon alt="ícone notificação" src={NotificationIcon} />
                    </ButtonContainer>

                    <ButtonContainer margin="0 0 0 10px" onClick={handleDropDownMenu} >
                        {user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}
                    </ButtonContainer>

                    <DropDownMenu openDropDownMenu={openDropDownMenu}>

                        <UserInfoContainer>
                            <ButtonContainer 
                            margin="0 0 0 10px" 
                            onClick={handleDropDownMenu} 
                            style={{backgroundColor: '#f2f2f2'}}
                            >
                                {user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}
                            </ButtonContainer>
                            <UserName>{user && user.nome ? user.nome : ''}</UserName>
                        </UserInfoContainer>

                        <DropDownMenuContent onClick={goOut}>
                            <ButtonIcon alt="ícone logout" src={Logout} />
                            <LogOutButton>
                                Sair
                            </LogOutButton>
                        </DropDownMenuContent>

                        <DropDownMenuContent onClick={goYourVideos}>
                            <ButtonIcon alt="ícone logout" src={VideoIcon} />
                            <LogOutButton>
                                Seus Vídeos
                            </LogOutButton>
                        </DropDownMenuContent>

                    </DropDownMenu>
            
                </HeaderButtons>
                :
                <LoginContainer onClick={() => navigate('/login')}>
                    <LoginButton>
                        <LoginIcon alt="login icon" src={LoginIconPng} />
                        <Span>Fazer Login</Span>
                    </LoginButton>
                </LoginContainer>
            }

        </Container>            
    )
}

export default Header;