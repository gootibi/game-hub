import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {

    // const color = (item: number) => {
    //     if (item > 75) return "green";
    //     if (item > 60) return "yellow";
    //     return "";
    // };

    let color = score > 75 ? 'green' : score > 60 ? "yellow" : "";

    return (
        <Badge colorScheme={color} fontSize={"14px"} borderRadius={'4px'} paddingX={2}>{score}</Badge>
    )
}

export default CriticScore