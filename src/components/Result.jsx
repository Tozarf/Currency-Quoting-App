import styled from "@emotion/styled";

const ResultDiv = styled.div`
    color: #fff;
    font-family: "Lato", sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`;

const Image = styled.img`
    display: block;
    width: 120px;
`;

const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`;
const Price = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`;

export const Result = ({ result }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
        result;
    return (
        <ResultDiv>
            <Image
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="Crypto Image"
            />
            <div>
                <Price>
                    Current price is: <span>{PRICE}</span>
                </Price>
                <Text>
                    Highest price today: <span>{HIGHDAY}</span>
                </Text>
                <Text>
                    Lowest price today: <span>{LOWDAY}</span>
                </Text>
                <Text>
                    Last 24 hours average price: <span>{CHANGEPCT24HOUR}</span>
                </Text>
                <Text>
                    Last update: <span>{LASTUPDATE}</span>
                </Text>
            </div>
        </ResultDiv>
    );
};
