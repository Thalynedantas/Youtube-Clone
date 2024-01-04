import styled from "styled-components";

interface ContainerpProps {
    openMenu: boolean;
}

export const Container = styled.div<ContainerpProps>`
    width: 100%;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding: ${({openMenu}) => openMenu? '100px 50px 0 330px' : '100px 10px 0 100px'};
    box-sizing: border-box;

    @media (max-width: 834px) {
        padding: 100px 10px 0 100px;
    }

    @media (max-width: 600) {
        row-gap: 30px;
    }

    @media (max-width: 414px) {
        padding: 100px 10px 0 10px;
    }
`;

export const SearchContainer = styled.div`
    width: 100%;
`;  