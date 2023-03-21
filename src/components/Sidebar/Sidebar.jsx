

import React from 'react';

import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure
} from '@chakra-ui/react';
import { BtnList } from '../../utils/BtnList';
import { Provider } from '../../provider';




export const Sidebar = () => {
    const { setRoute } = Provider.useAuth();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();


    return (
        <>
            <Button
                ref={btnRef}
                colorScheme='telegram'
                onClick={onOpen}
                m="20px"
            >
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>JSON placeholder</DrawerHeader>


                    <DrawerBody>
                        {BtnList.map(item => (
                            <Button
                                key={item.id}
                                fontSize='20px'
                                height='50px'
                                width='250px'
                                border='2px'
                                borderColor='green.500'
                                m="20px 0"
                                onClick={() => setRoute(item.route)}
                            >
                                {item.caption}
                            </Button>
                        ))}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )

}