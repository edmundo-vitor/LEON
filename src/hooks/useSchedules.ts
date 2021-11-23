import { useQuery } from "react-query";
import { queryClient } from "../utils/queryClient";
import { requestBackend } from "../utils/request";

interface Schedule {
  id: string;
  startDate: string;
  endDate: string;
  maxUsers: number;
}

const cacheName = "schedules";

export async function getSchedulesFromModality(
  modalityId: number
): Promise<Schedule[]> {
  const { data } = await requestBackend({
    method: "GET",
    url: `/modalities/${modalityId}/schedules`,
  });

  return data.map((schedule: Schedule) => {
    return {
      ...schedule,
      startDate: new Date(schedule.startDate).toLocaleString("pt-BR"),
      endDate: new Date(schedule.endDate).toLocaleString("pt-BR")
    }
  });
}

export function useSchedulesFromModality(modalityId: number) {
  return useQuery(
    [cacheName, modalityId],
    () => getSchedulesFromModality(modalityId),
    {
      staleTime: 1000 * 60 * 10,
    }
  );
}
