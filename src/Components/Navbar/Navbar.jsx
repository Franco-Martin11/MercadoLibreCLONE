import SearchBar from "./SearchBar";
import SubBar from "./SubBar";
import LibreMercadoLogo from '../../assets/LibreMercadoLogo.svg'
import Patrocinadores from "./Patrocinadores";
import { Stack, Box,Image } from "@chakra-ui/react";
import { Link } from "wouter";

const Navbar = () => {
  return (
    <Stack margin='0 auto !important' py={{ base: 4, md: 2 }} px={2} bg="ml.yellow" w="full">
      <Stack margin='0 auto !important' w='full' maxW="1200px">
        <Stack
          direction="row"
          alignItems="center"
          w="full"
          justify={"space-between"}
          gap={2}
        >
          <Link href="/">
            <Image maxW='75px' cursor='pointer' src={LibreMercadoLogo} alt='libre-mercado-logo'/>
          </Link>
          <SearchBar />
          <Box display={{ base: "none", md: "contents" }}>
            <Patrocinadores />
          </Box>
        </Stack>
        <Box directionrender={{ base: "column", md: "row" }}>
          <SubBar />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Navbar;
