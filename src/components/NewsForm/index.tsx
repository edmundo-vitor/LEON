import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.scss';

export default function NewsForm(props) {

    const news = {
        "id": 3,
        "manager": {
            "id": 1,
            "name": "João Silva"
        },
        "title": "Notícia normal",
        "description": "Haverá um pequeno evento em breve.",
        "imageUrl": "https://blogpilates.com.br/wp-content/uploads/2016/02/Studio-de-Pilates-CAPA.png",
        "date": "2021-10-25"
    }

    const router = useRouter();

    const [newsTitle, setNewsTitle] = useState(props.isForEditing ? news.title : "");
    const [newsDescription, setNewsDescription] = useState(props.isForEditing ? news.description : "");
    const [newsDate, setNewsDate] = useState(props.isForEditing ? news.date : "");
    const [newsImageUrl, setNewsImageUrl] = useState(props.isForEditing ? news.imageUrl : "");

    function renderForm() {
        return (
            <form className={style.form}>
                <label className={style.label}>
                    Título*
                    <input type="text" name="title" className="form-control"
                        value={newsTitle}
                        onChange={e => setNewsTitle(e.target.value)} />
                </label>
                <label className={style.label}>
                    Data*
                    <input type="date" name="date" className="form-control"
                        value={newsDate}
                        onChange={e => setNewsDate(e.target.value)} />
                </label>
                <label className={style.label}>
                    Descrição*
                    <textarea name="description" className="form-control"
                        value={newsDescription}
                        onChange={e => setNewsDescription(e.target.value)}
                    />
                </label>
                <br />
                <label className={style.label}>
                    Url da Imagem
                    <input type="url" name="imageUrl" className="form-control"
                        value={newsImageUrl}
                        onChange={e => setNewsImageUrl(e.target.value)} />
                </label>
                <button type="button" className={style.registerButton}
                    onClick={() => router.push("/news")}>
                    {props.isForEditing ? "Salvar" : "Cadastrar"}
                </button>

            </form>
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
