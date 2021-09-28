import React from 'react';
import Styles from './index.module.css'

interface PaginationProps {
    page:number,
    total:number,
    pageCallback:(page:number)=>void
}

const Pagination = (props: PaginationProps) => {
    const {
        page,
        total,
        pageCallback
    } = props;

    const jumpPrePage = () => {
        pageCallback(page - 1)
    }

    const jumpNextPage = () => {
        pageCallback(page + 1)
    }

    return (
        <div className={Styles.pageination}>
            {page > 0 ? (
                <button onClick={jumpPrePage} className={Styles.pageBtn}><span className="iconfont icon-left"></span> 上一页</button>
            ) : null}
            {page < total ? (
                <button onClick={jumpNextPage} className={Styles.pageBtn}>下一页 <span className="iconfont icon-right"></span></button>
            ) : null}

        </div>
    )
}

export default Pagination;