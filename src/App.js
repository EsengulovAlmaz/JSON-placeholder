
import React from "react";
import Container from "./components/Container/Container";

import "./App.css";
import { Provider } from "./provider";
import { Sidebar } from "./components/Sidebar/Sidebar";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text
} from "@chakra-ui/react";

function App() {
  const { data } = Provider.useAuth();

  return (
    <Container>
      <div className="App">
        <Sidebar />
      </div>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={10}
        m="60px 0"
      >
        {data && data.map(item => (
          <SimpleGrid
            spacing={4}
            templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
            display={"flex"}
            w="40%"
          >
            <Card w="100%">
              <CardHeader>
                <Heading size='md'>
                  {item?.title && item.title}
                  {item?.name && item.name}
                  {item?.username && item.username}
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  {item?.email && item.email}
                  {item?.url && <img src={item?.url} alt="" />}
                </Text>
              </CardBody>
              <CardFooter>
                {item?.body && item.body}
              </CardFooter>
            </Card>
          </SimpleGrid>
        ))}
      </Box>
    </Container>
  );
}

export default App;
