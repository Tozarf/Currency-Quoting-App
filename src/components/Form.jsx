import styled from "@emotion/styled/";
import React from "react";
import { coins } from "../data/coins";
import { useSelectCoins } from "../hooks/useSelectCoins";

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    margin-top: 20px;

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`;
export const Form = () => {
    const [coin, SelectCoins] = useSelectCoins("Choose your currency", coins);

    return (
        <form>
            <SelectCoins />
            <InputSubmit type="submit" value="Quote" />
        </form>
    );
};
