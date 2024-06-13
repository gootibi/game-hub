import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
    gameQuery: GameQuery
}

const GamesHeading = ({ gameQuery }: Props) => {

    const genre = useGenre(gameQuery.genreId);

    const platform = usePlatform(gameQuery.platformId);

    const heading = `${platform?.name ?? ''} ${genre?.name ?? ''} Games`

    return (
        <Heading as='h1' marginBottom={5} fontSize='5xl'>{heading}</Heading>
    )
}

export default GamesHeading