import styled from "@emotion/styled/";
import React, { useEffect, useState } from "react";
import { coins } from "../data/coins";
import { useSelectCoins } from "../hooks/useSelectCoins";
import { Error } from "./Error";

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
export const Form = ({ setCoins }) => {
    const [cryptos, setCryptos] = useState([]);
    const [error, setError] = useState(false);
    const [coin, SelectCoins] = useSelectCoins("Choose your currency", coins);
    const [crypto, SelectCrypto] = useSelectCoins(
        "Choose your crypto",
        cryptos
    );
    useEffect(() => {
        const apiRequest = async () => {
            const url =
                "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
            const response = await fetch(url);
            const result = await response.json();

            const cryptoArray = result.Data.map((crypto) => {
                const object = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName,
                };
                return object;
            });
            setCryptos(cryptoArray);
        };
        apiRequest();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        if ([coin, crypto].includes("")) {
            setError(true);
            return;
        }
        setError(false);
        setCoins({
            coin,
            crypto,
        });
    };

    return (
        <>
            {error && <Error>All fields are required</Error>}
            <form onSubmit={handleSubmit}>
                <SelectCoins />
                <SelectCrypto />
                <InputSubmit type="submit" value="Quote" />
            </form>
        </>
    );
};
