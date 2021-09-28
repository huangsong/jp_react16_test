import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import AudioPlayer from '../../components/AudioPlayer';
import Styles from './index.module.css';
import {Link} from 'react-router-dom'

const ArticleDetail = (props:any) => {

    return (
        <>
            <header id="header" className={Styles.header}>
                <Link to={'/articles'} className="btn"><span className="iconfont icon-fanhui large-icon"></span></Link>
            </header>
            <div className="wrap-box main-content-container">

                <div className={Styles.pageBody}>
                    <h1 className={Styles.pageTitle}>
                        一括編集機能やテンプレート機能でさらに効率化
                    </h1>
                    <div className="iconfont icon-time">2021-09-09 22:00</div>
                    <section>
                        <p>
                            一括編集機能やテンプレート機能を駆使すれば、短時間でも質の高い指導報告書が作成可能。Comiruを使えば、集団指導のスクールでも、まるで個別指導のようなクオリティの指導報告書を 簡単に作成できます。
                        </p>
                        <VideoPlayer src={"/video.mp4"} />

                        <p>
                            一括編集機能やテンプレート機能を駆使すれば、短時間でも質の高い指導報告書が作成可能。Comiruを使えば、集団指導のスクールでも、まるで個別指導のようなクオリティの指導報告書を 簡単に作成できます。
                        </p>
                        <p>
                            一括編集機能やテンプレート機能を駆使すれば、短時間でも質の高い指導報告書が作成可能。Comiruを使えば、集団指導のスクールでも、まるで個別指導のようなクオリティの指導報告書を 簡単に作成できます。
                        </p>
                        <AudioPlayer />

                        <p>
                            一括編集機能やテンプレート機能を駆使すれば、短時間でも質の高い指導報告書が作成可能。Comiruを使えば、集団指導のスクールでも、まるで個別指導のようなクオリティの指導報告書を 簡単に作成できます。
                        </p>

                        <p>
                            一括編集機能やテンプレート機能を駆使すれば、短時間でも質の高い指導報告書が作成可能。Comiruを使えば、集団指導のスクールでも、まるで個別指導のようなクオリティの指導報告書を 簡単に作成できます。
                        </p>

                        <p>
                            一括編集機能やテンプレート機能を駆使すれば、短時間でも質の高い指導報告書が作成可能。Comiruを使えば、集団指導のスクールでも、まるで個別指導のようなクオリティの指導報告書を 簡単に作成できます。
                        </p>
                    </section>
                </div>
                <div>
                    <a href="#header" className="btn btn-to-top"><span className="iconfont icon-xiangshang"></span>TOP</a>
                </div>

            </div>

        </>
    )
}

export default ArticleDetail;