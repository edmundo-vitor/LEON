import { useState } from "react";

export interface Schedule {
  id: number;
  start: Date;
  end: Date;
  days: string[];
  vacancies: number;
  teacher: string;
}

export interface Modality {
  id: number;
  name: string;
  description: string;
  schedules?: Schedule[];
}

interface UseModalities {
  modalities: Modality[];
  addModality: (modality: Modality) => void;
  removeModality: (id: number) => void;
}

export function useModalities(): UseModalities {
  const [modalities, setModalities] = useState<Modality[]>([
    {
      id: 1,
      name: "Pilates",
      description: "Tem exercícios bem legais",
    },
    {
      id: 2,
      name: "Musculação",
      description: "Tem exercícios bem legais",
    },
    {
      id: 3,
      name: "Natação",
      description: "Tem exercícios bem legais",
    },
    {
      id: 4,
      name: "Corrida",
      description: "Tem exercícios bem legais",
    },
  ]);

  function addModality(modality: Modality) {
    setModalities((prevState) => [...prevState, modality]);
  }

  function removeModality(id: number) {
    setModalities((prevState) =>
      prevState.filter((modality) => modality.id !== id)
    );
  }

  return { modalities, addModality, removeModality };
}
