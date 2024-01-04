import History from '../../../assets/historia.png';
import Videos from '../../../assets/video.png';
import Watch from '../../../assets/relogio.png';
import Like from '../../../assets/gostar.png';
import Play from '../../../assets/botao-play.png';
import { useAppContext } from '../../../context/openMenu';
import { ButtonIcon, MenuContainer, MenuItem, MenuItemDescription } from '../styles';

const items = [
    {icon: History, description: 'Histórico'},
    {icon: Videos, description: 'Seus Vídeos'},
    {icon: Watch, description: 'Assistir mais tarde'},
    {icon: Like, description: 'Vídeos marcados como "gostei"'},
    {icon: Play, description: 'Mix - cd completo gospel'}
]

function LibraryMenu() {
    const { openMenu } = useAppContext();

    return (
        <MenuContainer>
            {items.map((item, index) => (
                <MenuItem key={index} openMenu={openMenu}>
                    <ButtonIcon alt='ícone' src={item.icon} />
                    <MenuItemDescription openMenu={openMenu}>{item.description}</MenuItemDescription>
                </MenuItem>
            ))}
        </MenuContainer>
    )
}

export default LibraryMenu;