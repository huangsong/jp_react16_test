import React, { useState, useEffect } from 'react';
import AutoSearchInput from '../../components/AutoSearchInput'
import Pagination from '../../components/Pagination';
import ListItem from './ListItem';
import Styles from './index.module.css'

import {
    useAppDispatch,
    useAppSelector
} from '../../hooks'

import {
    showArticles,
    articleSearchTags
} from '../../redux/articlesSlice'

import {
    Article
} from '../../types';

const ArticleList = () => {

    const viewArticles: Article[] = useAppSelector(state => state.articles.viewArticles);

    const viewPage: number = useAppSelector(state => state.articles.page);

    const pageTotal: number = useAppSelector(state => state.articles.pageTotal);

    const searchTags: string[] = useAppSelector(articleSearchTags)

    const dispatch = useAppDispatch()

    const pageCallback = (page: number) => {
        dispatch(showArticles({ page: page, sTag: '' }))
        goTop()
    }

    const searchCallback = (sTag: string) => {
        dispatch(showArticles({ page: 0, sTag: sTag }))
    }

    const goTop = () => {
        setTimeout(() => {
            document.getElementById('listlWrap')?.scrollTo(0, 0)
        }, 100)
    }

    return (
        <>
            <header className={Styles.header}>
                <AutoSearchInput searchTags={searchTags} searchCallback={searchCallback} />
            </header>
            <div id="listlWrap" className="wrap-box main-content-container">
                {viewArticles.length > 0 ? (
                    viewArticles.map((aItem: Article) => {
                        return <ListItem itemdata={aItem} key={aItem.id} />
                    })
                ) : (
                    <div className={Styles.noResult}>No Result</div>
                )}
                <Pagination total={pageTotal} page={viewPage} pageCallback={pageCallback} />
            </div>
        </>
    )
}

export default ArticleList;