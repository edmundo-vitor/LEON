import { useRouter } from 'next/dist/client/router';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ButtonPrimary from '../ButtonPrimary';
import style from './style.module.scss';

export default function TeacherTable() {

    const teachers = [{
        "id": 3,
        "name": "Outro nome qualquer",
        "address": "Estúdio 1 - Rua tal"
    }]

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

    const cities = ["Montanhas",
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
                    <input type="text" name="name" className="form-control" />
                </label>
                <label className={style.label}>
                    Telefone*
                    <input type="text" name="telephone" className="form-control" />
                </label>
                <label className={style.label}>
                    Email*
                    <input type="text" name="email" className="form-control" />
                </label>
                <label className={style.label}>
                    Senha*
                    <input type="password" name="password" className="form-control" />
                </label>
                <label className={style.label}>
                    Filial*
                    {renderBranchSelection()}
                </label>
                <label className={style.label}>
                    Rua*
                    <input type="text" name="road" className="form-control" />
                </label>
                <label className={style.label}>
                    Estado*
                    {renderStateSelection()}
                </label>
                <label className={style.label}>
                    Cidade*
                    {renderCitySelection()}
                </label>
                <label className={style.label}>
                    Número*
                    <input type="number" name="number" className="form-control" />
                </label>
                <button className={style.registerButton}
                    onClick={() => router.push("/teachers")}>
                    Cadastrar
                </button>

            </form>
        )
    }

    function renderBranchSelection() {
        return (
            <select name="branch" className="form-control">
                {branches.map((branch, index) => {
                    return (
                        <option key={index} value={branch.id}>{branch.name} </option>
                    )
                })}
            </select>
        )
    }

    function renderStateSelection() {
        return (
            <select name="state" className="form-control">
                {states.map((state, index) => {
                    return (
                        <option key={index} value={state.sigla}>{state.sigla} </option>
                    )
                })}
            </select>
        )
    }

    function renderCitySelection() {
        return (
            <select name="city" className="form-control">
                {cities.map((state, index) => {
                    return (
                        <option key={index} value={state}>{state} </option>
                    )
                })}
            </select>
        )
    }

    const router = useRouter();

    return (
        <>
            <div className={style.body}>
                {renderForm()}
            </div>
        </>
    )
}
