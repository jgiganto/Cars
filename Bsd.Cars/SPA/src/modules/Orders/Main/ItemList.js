import React from "react";
import styled from "@emotion/styled";
import { ListItem } from "./ItemList/ListItem";
import { theme } from "./../../../assets/styles";

const Table = styled.table`
  width: 97%;
  display: block;
`;

const Thead = styled.thead`
  color: ${({ theme: { lightgrey } }) => lightgrey};
  font-weight: 600;
  display: table;
  width: 97%;
  table-layout: fixed;
`;

const Tbody = styled.tbody`
  max-height: calc(100vh - 18rem);
  display: block;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Td = styled.td`
  border: 1px solid ${({ theme: { tableBorderColor } }) => tableBorderColor};
  text-align: left;
  padding: 8px;
`;

const TrHead = styled.tr`
  color: ${({ theme: { lightgrey } }) => lightgrey};
  background-color: ${({ theme: { textDark } }) => textDark};
  display: table;
  width: 97%;
  table-layout: fixed;
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

const ItemList = ({ items = [] }) => (
  <Table>
    <Thead>
      <TrHead>
        <Th>Nº Pedido</Th>
        <Th>Bastidor</Th>
        <Th>Modelo</Th>
        <Th>Matrícula</Th>
        <Th>Fecha entrega</Th>
        <Th>Actions</Th>
      </TrHead>
    </Thead>
    <Tbody>
      {items.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </Tbody>
  </Table>
);

export { ItemList };
