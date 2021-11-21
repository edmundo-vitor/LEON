import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { formatLocalDate } from '../../utils/format';
import { BASE_URL, requestBackend } from '../../utils/request';
import { getAuthData } from '../../utils/storage';
import style from './style.module.scss';

type NewsProps = {
    isForEditing?: boolean;
}

export default function NewsForm(props: NewsProps) {
    const router = useRouter();

    const [newsTitle, setNewsTitle] = useState("");
    const [newsDescription, setNewsDescription] = useState("");
    const [newsDate, setNewsDate] = useState(formatLocalDate(new Date().toDateString(), "yyyy-MM-dd"));
    const [newsImageUrl, setNewsImageUrl] = useState("");
    const [newsManager, setNewsManager] = useState(0);

    useEffect(() => {
        if (props.isForEditing) {
            const params: AxiosRequestConfig = {
                method: 'GET',
                url: '/news/' + router.query.id
            };
            requestBackend(params)
                .then(response => {
                    setNewsTitle(response.data.title);
                    setNewsDescription(response.data.description);
                    setNewsDate(formatLocalDate(response.data.date, "yyyy-MM-dd"));
                    setNewsImageUrl(response.data.imageUrl);
                });
        }

        setNewsManager(getAuthData().managerId);
    }, []);

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
                    onClick={() => props.isForEditing ? updateBranch() : saveNews()}>
                    {props.isForEditing ? "Salvar" : "Cadastrar"}
                </button>

            </form>
        )
    }

    function saveNews() {
        const params: AxiosRequestConfig = {
            method: 'POST',
            url: '/news',
            data: {
                "title": newsTitle,
                "description": newsDescription,
                "imageUrl": newsImageUrl,
                "date": formatLocalDate(newsDate, "yyyy-MM-dd HH:mm:ss"),
                "manager": {
                    "id": newsManager
                }
            }
        };
        requestBackend(params)
            .then(response => {
                router.push("/news")
            })
            .catch(error => {
                toast.error("Erro ao criar!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
    }

    function updateBranch() {
        const params: AxiosRequestConfig = {
            method: 'PUT',
            url: '/news/' + router.query.id,
            data: {
                "title": newsTitle,
                "description": newsDescription,
                "imageUrl": newsImageUrl,
                "date": formatLocalDate(newsDate, "yyyy-MM-dd HH:mm:ss"),
                "manager": {
                    "id": newsManager
                }
            }
        };
        requestBackend(params)
            .then(response => {
                toast.success("Atualizado com sucesso!", {
                    position: toast.POSITION.TOP_RIGHT
                })

                router.push("/news")
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
