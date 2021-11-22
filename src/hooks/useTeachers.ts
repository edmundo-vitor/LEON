import { useQuery } from "react-query";
import { queryClient } from "../utils/queryClient";
import { requestBackend } from "../utils/request";

export interface Teacher {
  id: number;
  name: string;
  address: string;
  telephone: string;
  createdAt: string;
  updatedAt: string;
}

interface GetTeachersQueryParams {
  name?: string;
}

const cacheName = "teachers";

export async function getTeachers(
  params?: GetTeachersQueryParams
): Promise<Teacher[]> {
  const { data } = await requestBackend({
    method: "GET",
    url: "/teachers",
    ...(params?.name && { params: { name: params.name } }),
  });

  return data.map(({ createdAt, updatedAt, ...rest }: Teacher) => {
    return {
      ...rest,
      createdAt: new Date(createdAt).toLocaleString("pt-BR"),
      updatedAt: new Date(updatedAt).toLocaleString("pt-BR"),
    };
  });
}

export async function getTeacher(id: number): Promise<Teacher> {
  const { data } = await requestBackend({
    method: "GET",
    url: `/teachers/${id}`,
  });

  return {
    ...data,
    createdAt: new Date(data.createdAt).toLocaleString("pt-BR"),
    updatedAt: new Date(data.updatedAt).toLocaleString("pt-BR"),
  };
}

export function useTeachers(params?: GetTeachersQueryParams) {
  return useQuery(
    [cacheName, params?.name],
    () => getTeachers(params?.name && { name: params.name }),
    {
      staleTime: 1000 * 60 * 10,
    }
  );
}

export function useTeacher(id: number) {
  return useQuery([cacheName, id], () => getTeacher(id), {
    staleTime: 1000 * 60 * 10,
  });
}

export async function prefetchTeacher(id: number) {
  await queryClient.prefetchQuery([cacheName, id], () => getTeacher(id), {
    staleTime: 1000 * 60 * 10,
  });
}
