import Image from 'next/image';
import { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.scss';

export default function News(props) {

    const [news, setNews] = useState(props.newsList)

    const [search, setSearch] = useState("")

    function renderSearchBar() {
        return (
            <div className={style.inputSearch}>
                <input type="text" className="form-control"
                    placeholder="Pesquisar"
                    value={search}
                    onChange={e => {
                        setSearch(e.target.value)
                        filterNews(search)
                    }} />

            </div>
        )
    }
    
    const filterNews = (search) => {
        //Usar o metodo de news findByTitleAndDescription
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
                    src={item.imageUrl}
                    alt="news image"
                    width="350%"
                    height="300%"
                    className={style.image} />
            </div>
        )
    }

    function renderBigNews(news) {
        return (
            <div className={style.bigNews}>
                Noticia grande
            </div>
        )
    }

    function renderNormalNews(news) {
        return (
            <div className={style.normalNews}>
                Noticia normal
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
                {renderNews(news)}
            </div>
        </div>
    )
}
