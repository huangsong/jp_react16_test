import React, { useState } from 'react';
import AutoSearchInput from '../../components/AutoSearchInput'
import Pagination from '../../components/Pagination';
import ListItem from './ListItem';
import Styles from './index.module.css'

import {
    useAppDispatch,
    useAppSelector
} from '../../hooks'

import {
    articleSearchTags,
    searchArticleResult
} from '../../redux/articlesSlice'

import { 
    Article 
} from '../../types';

const ArticleList = () => {

    const pageSize: number = 20;

    const [viewPage, setViewPage] = useState<number>(0);

    const articles: Article[] = useAppSelector(state => state.articles);
    const pageTotal: number = parseInt((articles.length / pageSize).toString()) - 1;

    const pageArticles = articles.slice(viewPage * pageSize, pageSize + viewPage * pageSize);

    const searchTags: string[] = useAppSelector(articleSearchTags)

   // const searchArticleArry:Article[] = useAppSelector(searchArticleResult())

    //const dispatch = useAppDispatch()

    const pageCallback = (page: number) => {
        setViewPage(page)
    }

    const searchCallback = (sTag: string) => {

    }

    return (
        <>
            <header className={Styles.header}>
                <AutoSearchInput searchTags={searchTags} searchCallback={searchCallback} />
            </header>
            <div className="wrap-box main-content-container">
                {
                    pageArticles.map((aItem: Article) => {
                        return <ListItem itemdata={aItem} key={aItem.id} />
                    })
                }
                <Pagination total={pageTotal} page={viewPage} pageCallback={pageCallback} />
            </div>
        </>
    )
}

export default ArticleList;