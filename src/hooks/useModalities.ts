import { useQuery } from "react-query";
import { queryClient } from "../utils/queryClient";
import { requestBackend } from "../utils/request";

interface Modality {
  id: number;
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

export async function getModality(id: number): Promise<Modality> {
  const { data } = await requestBackend({
    method: "GET",
    url: `/modalities/${id}`,
  });

  return {
    ...data,
    createdAt: new Date(data.createdAt).toLocaleString("pt-BR"),
    updatedAt: new Date(data.updatedAt).toLocaleString("pt-BR"),
  };
}

export function useModalities() {
  return useQuery([cacheName], getModalities, {
    staleTime: 1000 * 60 * 10,
  });
}

export function useModality(id: number) {
  return useQuery([cacheName, id], () => getModality(id), {
    staleTime: 1000 * 60 * 10,
  });
}

export async function prefetchModality(id: number) {
  await queryClient.prefetchQuery([cacheName, id], () => getModality(id), {
    staleTime: 1000 * 60 * 10,
  });
}
