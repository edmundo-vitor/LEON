import { useContext, useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import { requestBackend } from "../utils/request";

interface Teacher {
  id: number;
  name: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

interface CreateTeacher {
  name: string;
  address: string;
}

interface UpdateTeacher {
  id: number;
  name: string;
  address: string;
}

interface TeacherContextData {
  teachers: Teacher[];
  findOne: (id: number) => Teacher;
  create: (data: CreateTeacher) => void;
  update: (data: UpdateTeacher) => void;
  remove: (id: number) => void;
}

interface TeacherProviderProps {
  children: ReactNode;
}

const TeacherContext = createContext<TeacherContextData>(
  {} as TeacherContextData
);

export function TeacherProvider({ children }: TeacherProviderProps) {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    requestBackend({ method: "GET", url: "/teachers" }).then(({ data }) => {
      setTeachers(
        data.map(({ createdAt, updatedAt, ...rest }: Teacher) => {
          return {
            ...rest,
            createdAt: new Date(createdAt).toLocaleString("pt-BR"),
            updatedAt: new Date(updatedAt).toLocaleString("pt-BR"),
          };
        })
      );
    });
  }, []);

  function findOne(id: number) {
    return teachers.find(t => t.id === id);
  }

  function create(data: CreateTeacher) {
    requestBackend({ method: "POST", url: "/teachers", data }).then(
      ({ data }) => {
        setTeachers((prevState) => [data, ...prevState]);
      }
    );
  }

  function update({ id, ...data }: UpdateTeacher) {
    requestBackend({ method: "PUT", url: `/teachers/${id}`, data }).then(
      ({ data }) => {
        const teachersCopy = [...teachers];
        const index = teachersCopy.findIndex((t) => t.id === id);

        if (index >= 0) {
          teachersCopy[index] = data;
          setTeachers(teachersCopy);
        }
      }
    );
  }

  function remove(id: number) {
    requestBackend({ method: "DELETE", url: `/teachers/${id}` }).then(() => {
      const teachersCopy = [...teachers];
      const index = teachersCopy.findIndex((t) => t.id === id);

      if (index >= 0) {
        teachersCopy.splice(index, index);
        setTeachers(teachersCopy);
      }
    });
  }

  return (
    <TeacherContext.Provider
      value={{
        teachers,
        findOne,
        create,
        update,
        remove,
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
}

export function useTeachers(): TeacherContextData {
  const context = useContext(TeacherContext);

  return context;
}
