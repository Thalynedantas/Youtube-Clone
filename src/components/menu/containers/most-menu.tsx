import Premium from '../../../assets/premium.png';
import Studio from '../../../assets/studio.png';
import Music from '../../../assets/music.png';
import Kids from '../../../assets/kids.png';
import { useAppContext } from '../../../context/openMenu';
import { ButtonIcon, MenuContainer, MenuItem, MenuItemDescription, MenuTitle } from '../styles';

const items = [
    {icon: Premium, description: 'Youtube Premium'},
    {icon: Studio, description: 'Youtube Studio'},
    {icon: Music, description: 'Youtube Music'},
    {icon: Kids, description: 'Youtube Kids'}
]

function MostMenu() {
    
    const { openMenu } = useAppContext();

    return (
        <MenuContainer>
            <MenuTitle>
                <span>Mais do Youtube</span>
            </MenuTitle>
            {items.map((item, index) => (
                <MenuItem key={index} openMenu={openMenu}>
                    <ButtonIcon alt='ícone' src={item.icon}/>
                    <MenuItemDescription openMenu={openMenu}>{item.description}</MenuItemDescription>
                </MenuItem>
            ))}
        </MenuContainer>
    )
}

export default MostMenu;