// export default function SideBar(){
//     return 

import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Radio, RadioGroup, Stack, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

// }
export default function PlacementExample() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [state,setState] = useState(false);
  const [placement, setPlacement] = useState("left");

  const handleClick = ()=>{
        state?onOpen():onClose();
        setState(!state)
  }
  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction="row" mb="4">
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </Stack>
      </RadioGroup>
      <Button colorScheme="blue" onClick={handleClick}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}