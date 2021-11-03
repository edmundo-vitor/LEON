import { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.scss';

export default function UserInfo() {

    const user = {
        "id": 1,
        "name": "João da Silva Santos",
        "email": "joão@leon.com",
        "password": "123456",
    }

    const [userName, setUserName] = useState(user.name);
    const [userEmail, setUserEmail] = useState(user.email);
    const [userPassword, setUserPassword] = useState(user.password);

    function renderForm() {
        return (
            <form className={style.form}>
                <label className={style.label}>
                    Nome*
                    <input type="text" name="name" className="form-control"
                        value={userName}
                        onChange={e => setUserName(e.target.value)} />
                </label>
                <label className={style.label}>
                    E-mail*
                    <input type="text" name="email" className="form-control"
                        value={userEmail}
                        onChange={e => setUserEmail(e.target.value)} />
                </label>
                <label className={style.label}>
                    Senha
                    <input type="password" name="password" className="form-control"
                        value={userPassword}
                        onChange={e => setUserPassword(e.target.value)} />
                </label>
                <div>
                    <button type="button" className={style.saveButton}>
                        Voltar
                    </button>
                    <button type="button" className={style.backButton}>
                        Salvar
                    </button>
                </div>
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
