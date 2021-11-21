import { AxiosRequestConfig } from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { News } from '../../models/News';
import { requestBackend } from '../../utils/request';
import style from './style.module.scss';

export default function NewsView() {
    const [search, setSearch] = useState("")

    const [news, setNews] = useState<News[]>([])
    const [newsFound, setNewsFound] = useState<News[]>([])

    useEffect(() => {
        const params: AxiosRequestConfig = {
            method: 'GET',
            url: '/news'
        };
        requestBackend(params)
            .then(response => {
                setNews(response.data.content)
                setNewsFound(response.data.content)
            });
    }, []);

    function renderSearchBar() {
        return (
            <div className={style.inputSearch}>
                <input type="text" className="form-control"
                    placeholder="Pesquisar"
                    value={search}
                    onChange={e => {
                        setSearch(e.target.value.toLowerCase())
                        setNewsFound(
                            news.filter(item =>
                                item.title.toLowerCase().includes(e.target.value) ||
                                item.description.toLowerCase().includes(e.target.value))
                        )
                    }} />
            </div>
        )
    }

    function renderNews(news) {
        return news.map(item => {
            return (
                <div key={item.id} className={style.news}>
                    <div className={style.newsText}>
                        <div className={style.textTitle}>
                            {item.title}
                        </div>
                        <div className={style.textDescription}>
                            {item.description}
                        </div>
                    </div>
                    {item.imageUrl !== "" ?
                        renderNewsImage(item) : ""}
                </div >
            )
        })
    }

    function renderNewsImage(item) {
        return (
            <div className={style.newsImage}>
                <Image
                    src={`/api/imageproxy?url=${encodeURIComponent(item.imageUrl)}`}
                    alt="news image"
                    width="350%"
                    height="300%"
                    className={style.image} />
            </div>
        )
    }

    return (
        <div className={style.body}>
            <div className={style.searchBar}>
                {renderSearchBar()}
            </div>
            <div className={style.itens}>
                <hr />
                {renderNews(newsFound)}
            </div>
        </div>
    )
}
