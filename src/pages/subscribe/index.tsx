import Header from "../../components/header";
import Menu from "../../components/menu/menu";
import { useAppContext } from "../../context/openMenu";
import { Container, SubscribeContainer } from "./style";

function Subscribe() {
    const { openMenu } = useAppContext();

    return (
        <SubscribeContainer>
            <Header />
            <Menu />
            <Container openMenu={openMenu}>
                <h1> Página em construção </h1>
            </Container>
        </SubscribeContainer>

    )
}

export default Subscribe;