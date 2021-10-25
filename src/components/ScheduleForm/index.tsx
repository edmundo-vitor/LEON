import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.scss';

export default function ScheduleForm(props) {

    const schedule = {
        "id": 4,
        "modality": {
            "id": 1,
            "name": "Pilates"
        }, "branch": {
            "id": 1,
            "name": "Filial Mossoró"
        }, "teacher": {
            "id": 1,
            "name": "Maria da Silva"
        },
        "scheduleStart": "07:00",
        "scheduleEnd": "09:00",
        "maxUsers": 5
    }

    const router = useRouter();

    const [scheduleModality, setScheduleModality] = useState(props.isForEditing ? schedule.modality.name : "");
    const [scheduleBranch, setScheduleBranch] = useState(props.isForEditing ? schedule.branch.name : "");
    const [scheduleTeacher, setScheduleTeacher] = useState(props.isForEditing ? schedule.teacher.name : "");
    const [scheduleStart, setScheduleStart] = useState(props.isForEditing ? schedule.scheduleStart : "");
    const [scheduleEnd, setScheduleEnd] = useState(props.isForEditing ? schedule.scheduleEnd : "");
    const [scheduleMaxUsers, setScheduleMaxUsers] = useState(props.isForEditing ? schedule.maxUsers : 0);

    const daysOfWeek = [
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado',
        'Domingo'];

    const modalities = [
        'Pilates',
        'Musculação',
        'Modalidade 2',
        'Modalidade 3'];

    const teachers = [{
        "id": 4,
        "name": "Maria da Silva",
    }, {
        "id": 5,
        "name": "José Santos",
    }, {
        "id": 6,
        "name": "João Pereira",
    }, {
        "id": 7,
        "name": "Maria Socorro",
    }, {
        "id": 8,
        "name": "Pedro Lima",
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

    function renderForm() {
        return (
            <form className={style.form}>
                <label className={style.time}>
                    Início*
                    <input type="time" id="appt" name="appt"
                        min="00:00" max="24:00" required
                        className="form-control"
                        value={scheduleStart}
                        onChange={e => setScheduleStart(e.target.value)} />
                </label>
                <label className={style.time}>
                    Fim*
                    <input type="time" id="appt" name="appt"
                        min="00:00" max="24:00" required
                        className="form-control"
                        value={scheduleEnd}
                        onChange={e => setScheduleEnd(e.target.value)} />
                </label>
                <label className={style.time}>
                    Dia*
                    {renderDaysOfWeekSelection()}
                </label>
                <label className={style.label} />
                <label className={style.label}>
                    Modalidade*
                    {renderModalitiesSelection()}
                </label>
                <label className={style.label}>
                    Professor(a)*
                    {renderTeachersSelection()}
                </label>
                <label className={style.label}>
                    Máx. Alunos*
                    <input type="number" name="maxUsers" className="form-control"
                        value={scheduleMaxUsers}
                        onChange={e => setScheduleMaxUsers(+e.target.value)} />
                </label>
                <label className={style.label}>
                    Filial*
                    {renderBranchSelection()}
                </label>
                <button type="button" className={style.registerButton}
                    onClick={() => router.push("/schedules")}>
                    {props.isForEditing ? "Salvar" : "Cadastrar"}
                </button >
            </form >
        )
    }

    function renderDaysOfWeekSelection() {
        return (
            <select name="day" className="form-control">
                {daysOfWeek.map((day, index) => {
                    return (
                        <option key={index} value={day}>{day}</option>
                    )
                })}
            </select>
        )
    }

    function renderModalitiesSelection() {
        return (
            <select name="modality" className="form-control">
                {modalities.map((modality, index) => {
                    return (
                        <option key={index} value={modality}>{modality}</option>
                    )
                })}
                {props.isForEditing ? <option value={scheduleModality}
                    selected>{scheduleModality}</option> : null}
            </select>
        )
    }

    function renderTeachersSelection() {
        return (
            <select name="teacher" className="form-control">
                {teachers.map((teacher, index) => {
                    return (
                        <option key={index} value={teacher.id}>{teacher.name}</option>
                    )
                })}
                {props.isForEditing ? <option value={scheduleTeacher} selected>{scheduleTeacher}</option> : null}

            </select>
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
                {props.isForEditing ? <option value={scheduleBranch} selected>{scheduleBranch} </option> : null}
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
