import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSceleton = () => {
    return (
        <Card width={'300px'} borderRadius={10} overflow="hidden">
            <Skeleton height={200} />
            <CardBody>
                <SkeletonText height={100} />
            </CardBody>
        </Card>
    )
}

export default GameCardSceleton