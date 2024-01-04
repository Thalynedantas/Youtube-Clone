import { 
    ButtonIcon, 
    MenuContainer, 
    MenuItem, 
    MenuItemDescription, 
    Link } from '../styles';
import HomeIcon from '../../../assets/botao-de-inicio.png';
import ShortsLogo from '../../../assets/shorts-logo.png';
import SubscribeIcon from '../../../assets/subscribe.png';
import LibraryIcon from '../../../assets/biblioteca.png';
import { useAppContext } from '../../../context/openMenu';


const items = [
    {icon: HomeIcon, description: 'Ínicio', link: '/'},
    {icon: ShortsLogo, description: 'Shorts', link: '/shorts',},
    {icon: SubscribeIcon, description: 'Incrições', link: '/subscribe',},
    {icon: LibraryIcon, description: 'Biblioteca', link: '/library',}
]

function HomeMenu() {
    const { openMenu, setOpenMenu } = useAppContext();

    return (
        <MenuContainer>
            {items.map((item, index) => (
                <Link key={index} to={item.link} onClick={() => setOpenMenu(false)}>
                    <MenuItem openMenu={openMenu}>
                        <ButtonIcon alt='ícone' src={item.icon}/>
                        <MenuItemDescription openMenu={openMenu}>{item.description}</MenuItemDescription>
                    </MenuItem>
                </Link>
            ))}
        </MenuContainer>
    )
}

export default HomeMenu;