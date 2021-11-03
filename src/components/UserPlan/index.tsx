import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.scss';

export default function UserPlan() {

    const plan = {
        "id": 1,
        "name": "Pilates semanal",
        "price": 150,
        "pix": "123.456.789-10",
    }

    function renderForm() {
        return (
            <form className={style.form}>
                <label className={style.label}>
                    Plano
                    <label className="form-control">{plan.name}</label>
                </label>
                <label className={style.label}>
                    Preço
                    <label className="form-control">R${plan.price}</label>
                </label>
                <label className={style.label}>
                    Pagamento - Pix
                    <label className="form-control">{plan.pix}</label>
                    <br />
                </label>
            </form>
        )
    }

    return (
        <div className={style.containerBody}>
            <div className={style.body}>
                {renderForm()}
            </div>
        </div>
    )
}
