import { Box, Stack, Text, Button, ButtonGroup } from '@chakra-ui/react'

export function Header() {
    return (
        <>
            <Box 
                mx='20'
                maxW='100%' 
                h='450px' 
                mt='36' 
                bgImage='https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                bgPosition="center"
                bgRepeat="no-repeat" 
                color='white'>
                    <Text fontWeight='300' fontSize='44px' textAlign='center' pt='150px' pb='20px' px='150px' letterSpacing='widest'>
                        DOMINA EL TERRENO
                    </Text>
                    <Stack direction='column'>
                        <Box
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            h='20'
                            >
                            <ButtonGroup gap='4'>
                                <Button colorScheme='white' variant='outline' size='lg' w='220px'>VER DETALLES</Button>
                                <Button color='black' variant='solid' size='lg' w='180px'>VER VIDEO</Button>
                            </ButtonGroup>
                        </Box>
                    </Stack>
            </Box>
            <Box 
                mx='20'
                w='450px' 
                h='450px' 
                mt='28' 
                mb='16'
                bgImage='https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                bgPosition="center"
                bgRepeat="no-repeat" 
                objectFit='cover'
                color='white'>
                    <Text fontWeight='300' fontSize='36px' textAlign='center' pt='150px' pb='20px' px='15px' letterSpacing='widest'>
                        DOMINA EL TERRENO
                    </Text>
                    <Stack direction='column'>
                        <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='flex-start'
                            h='225px'
                            gap='4'
                        >
                            <Button colorScheme='white' variant='outline' size='lg' w='90%'>VER DETALLES</Button>
                            <Button colorScheme='white' variant='outline' size='lg' w='90%'>VER VIDEO</Button>
                        </Box>
                    </Stack>
            </Box>
        </>
    )
}