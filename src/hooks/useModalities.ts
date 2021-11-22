import { useQuery } from "react-query";
import { queryClient } from "../utils/queryClient";
import { requestBackend } from "../utils/request";

interface Modality {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const cacheName = "modalities";

export async function getModalities(): Promise<Modality[]> {
  const { data } = await requestBackend({
    method: "GET",
    url: "/modalities",
  });

  return data.map(({ createdAt, updatedAt, ...rest }: Modality) => {
    return {
      ...rest,
      createdAt: new Date(createdAt).toLocaleString("pt-BR"),
      updatedAt: new Date(updatedAt).toLocaleString("pt-BR"),
    };
  });
}

export function useModalities() {
  return useQuery([cacheName], getModalities, {
    staleTime: 1000 * 60 * 10,
  });
}

// export function useTeacher(id: string) {
//   return useQuery([cacheName, id], () => getTeacher(id), {
//     staleTime: 1000 * 60 * 10,
//   });
// }

// export async function prefetchTeacher(id: string) {
//   await queryClient.prefetchQuery([cacheName, id], () => getTeacher(id), {
//     staleTime: 1000 * 60 * 10,
//   });
// }
