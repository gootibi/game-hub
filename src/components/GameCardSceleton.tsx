import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSceleton = () => {
    return (
        <Card>
            <Skeleton height={200} />
            <CardBody>
                <SkeletonText height={100} />
            </CardBody>
        </Card>
    )
}

export default GameCardSceleton