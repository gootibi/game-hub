import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSceleton from "./GameCardSkeleton";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {

    const { error, data, isLoading, fetchNextPage, hasNextPage } = useGames(gameQuery);

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    if (error) {
        return <Text>{error.message}</Text>;
    }

    const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) ?? 0;

    return (

        <InfiniteScroll
            dataLength={fetchedGamesCount}
            next={() => fetchNextPage()}
            hasMore={!!hasNextPage}
            loader={<Spinner />}
            endMessage={<Text padding={'10px'} marginY={5} fontSize='xl'>No more games!</Text>}
        >

            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding={'10px'} >
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSceleton />
                    </GameCardContainer>
                )}
                {data?.pages.map((page, index) =>
                    <React.Fragment key={index * 10}>
                        {page.results.map(game => (
                            <GameCardContainer key={game.id}>
                                <GameCard game={game} />
                            </GameCardContainer>
                        ))}
                    </React.Fragment>
                )}
            </SimpleGrid>

        </InfiniteScroll>

    );
};

export default GameGrid;