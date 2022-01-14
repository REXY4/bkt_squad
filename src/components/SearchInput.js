import React from "react";
import {Image} from "native-base";
import { Input, Icon, Stack, Center, NativeBaseProvider } from "native-base";

const SearchInput = () => {
  return (
    <Stack  w="100%" alignItems="center" >
      <Input
        style={{
          backgroundColor: "#004463",
          color : "white",
          borderRadius : 10,
        }}RR
        w={{
          base: "75%",
          md: "100%",
        }}
      
        placeholder="Apa yang anda pikirkan ?"
      />
    </Stack>
  )
}

export default SearchInput;