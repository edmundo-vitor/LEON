import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.scss';

export default function BranchForm(props) {

    const branch = {
        "id": 1,
        "name": "Filial Mossoró",
        "state": "Rio Grande do Norte",
        "road": "Rua Principal",
        "streetNumber": 123,
        "city": "Mossoró",
        "description": "Filial Principal"
    }

    const router = useRouter();

    const [branchName, setBranchName] = useState(props.isForEditing ? branch.name : "");
    const [branchRoad, setBranchRoad] = useState(props.isForEditing ? branch.road : "");
    const [branchState, setBranchState] = useState(props.isForEditing ? branch.state : "");
    const [branchCity, setBranchCity] = useState(props.isForEditing ? branch.city : "");
    const [branchStreetNumber, setBranchStreetNumber] = useState(props.isForEditing ? branch.streetNumber : 0);
    const [branchDescription, setBranchDescription] = useState(props.isForEditing ? branch.description : "");

    const branches = [{
        "id": 2,
        "name": "Filial Mossoró"
    }, {
        "id": 4,
        "name": "Filial Fortaleza"
    }, {
        "id": 5,
        "name": "Filial Natal"
    }, {
        "id": 3,
        "name": "Filial tres"
    }, {
        "id": 6,
        "name": "Filial seis"
    },]

    const states = [
        { "nome": "Amazonas", "sigla": "AM" },
        { "nome": "Bahia", "sigla": "BA" },
        { "nome": "Ceará", "sigla": "CE" },
        { "nome": "Rio Grande do Norte", "sigla": "RN" },
        { "nome": "Rio Grande do Sul", "sigla": "RS" },
        { "nome": "Rondônia", "sigla": "RO" },
    ]

    const cities = [
        "Montanhas",
        "Monte Alegre",
        "Monte das Gameleiras",
        "Mossoró",
        "Natal",
        "Nísia Floresta",
        "Nova Cruz"]


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
                    Cidade*
                    {renderCitySelection()}
                </label>
                <label className={style.label}>
                    Estado*
                    {renderStateSelection()}
                </label>
                <label className={style.label}>
                    Descrição*
                    <input type="text" name="description" className="form-control"
                        value={branchDescription}
                        onChange={e => setBranchDescription(e.target.value)} />
                </label>
                <button type="button" className={style.registerButton}
                    onClick={() => router.push("/branches")}>
                    {props.isForEditing ? "Salvar" : "Cadastrar"}
                </button>

            </form>
        )
    }

    function renderStateSelection() {
        return (
            <select name="state" className="form-control">
                {states.map((state, index) => {
                    return (
                        <option key={index} value={state.nome}>{state.nome} </option>
                    )
                })}
                {props.isForEditing ? <option value={branchState} selected>{branchState}</option> : null}
            </select>
        )
    }

    function renderCitySelection() {
        return (
            <select name="city" className="form-control">
                {cities.map((city, index) => {
                    return (
                        <option key={index} value={city}>{city} </option>
                    )
                })}
                {props.isForEditing ? <option value={branchCity} selected>{branchCity}</option> : null}
            </select>
        )
    }

    return (
        <>
            <div className={style.body}>
                {renderForm()}
            </div>
        </>
    )
}
