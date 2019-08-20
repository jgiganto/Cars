import React from "react";
import { theme } from "./../../../../assets/styles";
import styled from "@emotion/styled";

const TrHead = styled.tr`
  color: ${({ theme: { white } }) => white};
  background-color: ${({ theme: { textDark } }) => textDark};
  display: table;
  width: 97%;
  table-layout: fixed;
`;

const Td = styled.td`
  border: 1px solid ${({ theme: { tableBorderColor } }) => tableBorderColor};
  text-align: center;
  padding: 8px;
  color: ${theme.lightgrey};
`;

const Tr = styled(TrHead)`
  &:nth-of-type(odd) {
    background-color: ${({ theme: { tableTrBGColor } }) => tableTrBGColor};
  }
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const Th = styled.th`
  padding: 8px;
  color: ${theme.lightgrey};
`;

const Button = styled.button`
  width: 50 px;
  height: 15px;
  border-radius: 5px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: none;
  color: ${({ theme: { tableBorderColor } }) => tableBorderColor};
  background: ${({ theme: { textDark } }) => textDark};
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    cursor: pointer;
    opacity: 0.8;
    background-color: ${({ theme: { tableTrBGColor } }) => tableTrBGColor};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ListItem = ({
  item: { id, carFrame, model, licensePlate, deliveryDate }
}) => (
  <Tr>
    <Td>{id}</Td>
    <Td>{carFrame}</Td>
    <Td>{model}</Td>
    <Td>{licensePlate}</Td>
    <Td>{deliveryDate}</Td>
    <Td>
      <ButtonWrapper>
        <Button>Detalle</Button> <Button>Borrar</Button>
      </ButtonWrapper>
    </Td>
  </Tr>
);

export { ListItem };
