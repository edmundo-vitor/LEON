import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useBranches } from '../../hooks/useBranches';
import { BASE_URL, requestBackend } from '../../utils/request';
import style from './style.module.scss';

type BranchProps = {
    isForEditing?: boolean;
}

export default function BranchForm(props: BranchProps) {
    const router = useRouter();
    const { addBranch, updateBranch } = useBranches();

    const [branchName, setBranchName] = useState("");
    const [branchState, setBranchState] = useState("");
    const [branchRoad, setBranchRoad] = useState("");
    const [branchCity, setBranchCity] = useState("");
    const [branchStreetNumber, setBranchStreetNumber] = useState(0);
    const [branchDescription, setBranchDescription] = useState("");

    useEffect(() => {
        if (props.isForEditing) {
            const params: AxiosRequestConfig = {
                method: 'GET',
                url: '/branches/' + router.query.id
            };
            requestBackend(params)
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
                    onClick={() => props.isForEditing ?
                        updateBranch({
                            "name": branchName,
                            "state": branchState,
                            "road": branchRoad,
                            "streetNumber": branchStreetNumber,
                            "city": branchCity,
                            "description": branchDescription
                        })
                        :
                        addBranch({
                            "name": branchName,
                            "state": branchState,
                            "road": branchRoad,
                            "streetNumber": branchStreetNumber,
                            "city": branchCity,
                            "description": branchDescription
                        })}>
                    {props.isForEditing ? "Salvar" : "Cadastrar"}
                </button>
            </form >
        )
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