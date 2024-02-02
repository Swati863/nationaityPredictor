import React, { useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
  
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'


const Result = ({data}) => {
   console.log("dataaaaaaaa",data)
    return (
<>
<TableContainer>
  <Table size='md' colorScheme='blue'>
    <Tbody>
      <Tr>
        <Td>Name</Td>
        <Td >{data?.name}</Td>
        <Td></Td>
</Tr>
<Tr>
<Td>Count</Td>
        <Td >{data?.count}</Td>
        <Td></Td>

</Tr>

      <Tr>  
      <Td>Country</Td>
        {data?.country?.map((elem,index)=>(
        
          <Td key={index}>{elem?.country_id}</Td>
      
      ))} 
<Td></Td>
        
      </Tr>
      
    </Tbody>
  
  </Table>
</TableContainer>
</>
    )
}

export default Result