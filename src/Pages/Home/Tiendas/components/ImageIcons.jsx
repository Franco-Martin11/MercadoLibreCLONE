import { Image } from "@chakra-ui/react";
import { Link } from "wouter";

const ImageIcons = ({ props, brand }) => {
  const { iconUrl, iconAlt, id } = props;
  return (
    <Link href={`/product/${brand.trim()}/${id}`}>
      <Image
        _hover={{ boxShadow: "md" }}
        cursor="pointer"
        boxSize="68px"
        src={iconUrl}
        alt={iconAlt}
        borderRadius="xl"
        border="1px solid #ccc"
      />
    </Link>
  );
};

export default ImageIcons;