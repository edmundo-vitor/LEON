import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.scss';

export default function TeacherForm(props) {

    //Deve usar o findById(teacherId) pois os atributos recebidos para
    //fazer a edição são diferentes dos atributos vistos apenas na 
    //tebela que mostra todos professores
    const teacher = {
        "id": props.teacherId,
        "name": "Mais algum nome",
        "email": "professor@gmail.com",
        "road": "Rua tal",
        "state": "RN",
        "city": "Mossoró",
        "number": 52,
        "telephone": "(84) 9 9999-9999",
        "branch":
        {
            "id": 1,
            "name": "Filial Mossoró"
        }
    }

    const router = useRouter();

    const [teacherName, setTeacherName] = useState(props.isForEditing ? teacher.name : "");
    const [teacherEmail, setTeacherEmail] = useState(props.isForEditing ? teacher.email : "");
    const [teacherRoad, setTeacherRoad] = useState(props.isForEditing ? teacher.road : "");
    const [teacherState, setTeacherState] = useState(props.isForEditing ? teacher.state : "");
    const [teacherCity, setTeacherCity] = useState(props.isForEditing ? teacher.city : "");
    const [teacherNumber, setTeacherNumber] = useState(props.isForEditing ? teacher.number : 0);
    const [teacherTelephone, setTeacherTelephone] = useState(props.isForEditing ? teacher.telephone : "");
    const [teacherBranch, setTeacherBranch] = useState(props.isForEditing ? teacher.branch.name : "");


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
                        value={teacherName}
                        onChange={e => setTeacherName(e.target.value)} />
                </label>
                <label className={style.label}>
                    Telefone*
                    <input type="text" name="telephone" className="form-control"
                        value={teacherTelephone}
                        onChange={e => setTeacherTelephone(e.target.value)} />
                </label>
                <label className={style.label}>
                    Email*
                    <input type="text" name="email" className="form-control"
                        value={teacherEmail}
                        onChange={e => setTeacherEmail(e.target.value)} />
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
                    <input type="text" name="road" className="form-control"
                        value={teacherRoad}
                        onChange={e => setTeacherRoad(e.target.value)} />
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
                    <input type="number" name="number" className="form-control"
                        value={teacherNumber}
                        onChange={e => setTeacherNumber(+e.target.value)} />
                </label>
                <button type="button" className={style.registerButton}
                    onClick={() => router.push("/teachers")}>
                    {props.isForEditing ? "Salvar" : "Cadastrar"}
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
                {props.isForEditing ? <option value={teacherBranch} selected>{teacherBranch} </option> : null}
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
                {props.isForEditing ? <option value={teacherState} selected>{teacherState}</option> : null}

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
                {props.isForEditing ? <option value={teacherCity} selected>{teacherCity}</option> : null}

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
