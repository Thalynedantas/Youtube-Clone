import Popular from '../../../assets/fogo.png';
import Shopping from '../../../assets/sacola.png';
import Music from '../../../assets/musica.png';
import Films from '../../../assets/filme.png';
import Live from '../../../assets/live.png';
import Games from '../../../assets/joystick.png';
import News from '../../../assets/news.png';
import Sports from '../../../assets/troféu.png';
import Learn from '../../../assets/lampada.png';
import { useAppContext } from '../../../context/openMenu';
import { ButtonIcon, MenuContainer, MenuItem, MenuItemDescription, MenuTitle } from '../styles';


const items = [

    {icon: Popular, description: 'Em alta'}, 
    {icon: Shopping, description: 'Shopping'},
    {icon: Music, description: 'Música'},
    {icon: Films, description: 'Filmes'},
    {icon: Live, description: 'Ao vivo'},
    {icon: Games, description: 'Jogos'},
    {icon: News, description: 'Notícias'},
    {icon: Sports, description: 'Esportes'},
    {icon: Learn, descripition: 'Aprender'}

]

function ExplorerMenu() {
    const { openMenu } = useAppContext();

    return (
        <MenuContainer>
            <MenuTitle>
                <span>Explorar</span>
            </MenuTitle>
            {items.map((item, index) => (
                <MenuItem key={index} openMenu={openMenu}>
                    <ButtonIcon alt='ícone' src={item.icon} />
                    <MenuItemDescription openMenu={openMenu}>{item.description}</MenuItemDescription>
                </MenuItem>
            ))}
        </MenuContainer>
    )
}

export default ExplorerMenu;