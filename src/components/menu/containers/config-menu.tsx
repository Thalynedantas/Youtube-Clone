import { 
    ButtonIcon, 
    MenuContainer, 
    MenuItem, 
    MenuItemDescription } from '../styles';
import Config from '../../../assets/config.png';
import Complaint from '../../../assets/flag.png';
import Help from '../../../assets/ajuda.png';
import Feedback from '../../../assets/feedback.png';
import { useAppContext } from '../../../context/openMenu';

const items = [
    {icon: Config, description: 'Configurações'},
    {icon: Complaint, description: 'Histórico de denúncias'},
    {icon: Help, description: 'Ajuda'},
    {icon: Feedback, description: 'Enviar Feedback'},
]

function ConfigMenu() {
    
    const { openMenu } = useAppContext();

    return (
        <MenuContainer>
            {items.map((item, index) => (
                <MenuItem key={index} openMenu={openMenu}>
                    <ButtonIcon alt='ícone' src={item.icon}/>
                    <MenuItemDescription openMenu={openMenu}>{item.description}</MenuItemDescription>
                </MenuItem>
            ))}
        </MenuContainer>

    )
}

export default ConfigMenu;