import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement pointerEvents='none'>
                <BsSearch />
            </InputLeftElement>
            <Input borderRadius={20} color='lightgray' type="text" placeholder="Search game..." variant="filled" />
        </InputGroup>
    )
}

export default SearchInput