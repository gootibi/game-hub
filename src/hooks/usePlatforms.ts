import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platform"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),   //24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms,
});

export default usePlatforms