import Header from "../../components/header";
import Menu from "../../components/menu/menu";
import { useAppContext } from "../../context/openMenu";
import { Container, ShortsContainer } from "./style";


function Shorts() {
    const { openMenu } = useAppContext();

    return (
        <ShortsContainer>
            <Header />
            <Menu />
            <Container openMenu={openMenu}>
                <h1> Página em Construção - Shorts </h1>
            </Container>
        </ShortsContainer>
    )
}

export default Shorts;