import { useRouter } from 'next/dist/client/router';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ButtonPrimary from '../ButtonPrimary';
import style from './style.module.scss';

export default function ScheduleTable(props) {

    const schedules = props.schedulesList
    const setSchedules = props.setSchedulesList

    function renderTable() {
        return (
            <div className={style.table}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Modalidade</th>
                            <th>Professor(a)</th>
                            <th>Local</th>
                            <th>Inicio</th>
                            <th>Fim</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }

    function renderTableData() {
        return schedules.map(schedule => {
            return (
                <tr key={schedule.id}>
                    <td>{schedule.id}</td>
                    <td>{schedule.modality.name}</td>
                    <td>{schedule.teacher.name}</td>
                    <td>{schedule.branch.name}</td>
                    <td>{schedule.scheduleStart}</td>
                    <td>{schedule.scheduleEnd}</td>
                    {renderTableAction(schedule.id)}
                </tr>
            )
        })
    }

    function renderTableAction(id) {
        return (
            <td className={style.button}>
                <button className="btn btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                </button>
                <button onClick={() => router.push("/schedules/edit/" + id)}
                    className="btn btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                </button>
                <button className="btn btn-sm"
                    onClick={() => deleteSchedule(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                </button>
            </td>
        )
    }

    function deleteSchedule(id) {
        let newSchedulesList = []

        schedules.map(schedule => {
            schedule.id !== id ? newSchedulesList.push(schedule) : null
        })

        setSchedules(newSchedulesList)
    }

    const router = useRouter();

    return (
        <>
            <div className={style.registerButton} onClick={() => router.push("/schedules/register")}>
                <ButtonPrimary>Cadastrar novo horário</ButtonPrimary>
            </div>
            <div className={style.body}>
                {renderTable()}
            </div>
        </>
    )
}
