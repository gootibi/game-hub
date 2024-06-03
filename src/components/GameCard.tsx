import { Card, CardBody, CardHeader, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
    game: Game;
};

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={game.background_image} />
            <CardBody>
                <CardHeader fontSize='2xl'>{game.name}
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                </CardHeader>
            </CardBody>
        </Card>
    )
}

export default GameCard