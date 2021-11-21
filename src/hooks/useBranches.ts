import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { BASE_URL, requestBackend } from '../utils/request';

export interface Branch {
  id?: number;
  name: string;
  state: string;
  road: string;
  streetNumber: number;
  city: string;
  description: string;
}

interface UseBranches {
  branches: Branch[];
  addBranch: (branch: Branch) => void;
  updateBranch: (branch: Branch) => void;
  removeBranch: (id: number) => void;
}

export function useBranches(): UseBranches {
  const router = useRouter();
  const [branches, setBranches] = useState<Branch[]>([]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/branches'
    };
    requestBackend(params)
      .then(response => {
        setBranches(response.data.content)
      });
  }, []);

  function addBranch(branch: Branch) {
    const params: AxiosRequestConfig = {
      method: 'POST',
      url: '/branches',
      data: {
        "name": branch.name,
        "state": branch.state,
        "road": branch.road,
        "streetNumber": branch.streetNumber,
        "city": branch.city,
        "description": branch.description
      }
    };
    requestBackend(params)
      .then(response => {
        router.push("/branches")
      })
      .catch(error => {
        toast.error("Erro ao criar!", {
          position: toast.POSITION.TOP_RIGHT
        });
      })
  }

  function updateBranch(branch: Branch) {
    const params: AxiosRequestConfig = {
      method: 'PUT',
      url: '/branches/' + router.query.id,
      data: {
        "name": branch.name,
        "state": branch.state,
        "road": branch.road,
        "streetNumber": branch.streetNumber,
        "city": branch.city,
        "description": branch.description
      }
    };
    requestBackend(params)
      .then(response => {
        router.push("/branches")
      })
      .catch(error => {
        toast.error("Erro ao atualizar!", {
          position: toast.POSITION.TOP_RIGHT
        });
      })
  }
  function removeBranch(id: number) {
    const params: AxiosRequestConfig = {
      method: 'DELETE',
      url: '/branches/' + id
    };
    requestBackend(params)
      .then(response => {
        toast.success("Deletado com sucesso!", {
          position: toast.POSITION.TOP_RIGHT
        });

        setBranches((prevState) =>
          prevState.filter((modality) => modality.id !== id));
      })
      .catch(error => {
        toast.error("Erro ao deletar!", {
          position: toast.POSITION.TOP_RIGHT
        });
      })
  }

  return { branches: branches, addBranch, updateBranch, removeBranch };
}
