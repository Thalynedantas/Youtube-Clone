import Header from "../../components/header";
import Menu from "../../components/menu/menu";
import { useAppContext } from "../../context/openMenu";
import { Container, LibraryContainer } from "./styles";


function Library (){
    
    const { openMenu } = useAppContext();
    
    return (
        <LibraryContainer>
            <Header />
            <Menu />
            <Container openMenu={openMenu}>
                <h1> Página em Construção - Library </h1>
            </Container>
        </LibraryContainer>    
    )
}

export default Library;