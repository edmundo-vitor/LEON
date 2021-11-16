import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BASE_URL } from '../../utils/request';
import style from './style.module.scss';

type BranchProps = {
    isForEditing?: boolean;
}

export default function BranchForm(props: BranchProps) {
    const router = useRouter();

    const [branchName, setBranchName] = useState("");
    const [branchState, setBranchState] = useState("");
    const [branchRoad, setBranchRoad] = useState("");
    const [branchCity, setBranchCity] = useState("");
    const [branchStreetNumber, setBranchStreetNumber] = useState(0);
    const [branchDescription, setBranchDescription] = useState("");

    useEffect(() => {
        if (props.isForEditing) {
            axios.get(BASE_URL + '/branches/' + router.query.id)
                .then(response => {
                    setBranchName(response.data.name);
                    setBranchState(response.data.state);
                    setBranchRoad(response.data.road);
                    setBranchCity(response.data.city);
                    setBranchStreetNumber(response.data.streetNumber);
                    setBranchDescription(response.data.description);
                });
        }
    }, []);

    function renderForm() {
        return (
            <form className={style.form}>
                <label className={style.label}>
                    Nome*
                    <input type="text" name="name" className="form-control"
                        value={branchName}
                        onChange={e => setBranchName(e.target.value)} />
                </label>
                <label className={style.label}>
                    Rua*
                    <input type="text" name="road" className="form-control"
                        value={branchRoad}
                        onChange={e => setBranchRoad(e.target.value)} />
                </label>
                <label className={style.label}>
                    N° Rua*
                    <input type="number" name="streetNumber" className="form-control"
                        value={branchStreetNumber}
                        onChange={e => setBranchStreetNumber(+e.target.value)} />
                </label>
                <label className={style.label}>
                    Estado*
                    <input type="text" name="state" className="form-control"
                        value={branchState}
                        onChange={e => setBranchState(e.target.value)} />
                </label>
                <label className={style.label}>
                    Cidade*
                    <input type="text" name="city" className="form-control"
                        value={branchCity}
                        onChange={e => setBranchCity(e.target.value)} />
                </label>
                <label className={style.label}>
                    Descrição*
                    <input type="text" name="description" className="form-control"
                        value={branchDescription}
                        onChange={e => setBranchDescription(e.target.value)} />
                </label>
                <button type="button" className={style.registerButton}
                    onClick={() => props.isForEditing ? updateBranch() : saveBranch()}>
                    {props.isForEditing ? "Salvar" : "Cadastrar"}
                </button>
            </form>
        )
    }

    function saveBranch() {
        axios.post(BASE_URL + '/branches', {
            "name": branchName,
            "state": branchState,
            "road": branchRoad,
            "streetNumber": branchStreetNumber,
            "city": branchCity,
            "description": branchDescription
        })
            .then(response => {
                router.push("/branches")
            })
            .catch(error => {
                toast.error("Erro ao criar!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
    }

    function updateBranch() {
        axios.put(BASE_URL + '/branches/' + router.query.id, {
            "name": branchName,
            "state": branchState,
            "road": branchRoad,
            "streetNumber": branchStreetNumber,
            "city": branchCity,
            "description": branchDescription
        })
            .then(response => {
                toast.success("Atualizado com sucesso!", {
                    position: toast.POSITION.TOP_RIGHT
                })

                router.push("/branches")
            })
            .catch(error => {
                toast.error("Erro ao atualizar!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
    }

    return (
        <>
            <ToastContainer autoClose={1500} />
            <div className={style.body}>
                {renderForm()}
            </div>
        </>
    )
}