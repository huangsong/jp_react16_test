import React from 'react';
import LazyLoadImg from '../../components/LazyLoadImg';
import Styles from './index.module.css';
import { useHistory } from 'react-router-dom';

const ListItem = (props: any) => {
    const history = useHistory();

    const {
        itemdata
    } = props;

    const jumpToDetail = () => {
        history.push('/detail/' + itemdata.id);
    }

    return (
        <div className={Styles.listItem}
            
        >
            <div>
                <div className={Styles.poseter}>
                    <LazyLoadImg
                        src='https://img.alicdn.com/bao/uploaded/i1/2207626746794/O1CN01gMwL08203hU9QmV93_!!0-item_pic.jpg'
                        style={{ width: 'auto', height: '26px' }}
                        imgOptions={{
                            alt: '图片',
                        }}
                    />
                    <div>{itemdata.author.name}</div>
                </div>
                <h3 className={Styles.postTitle}
                    onClick={jumpToDetail}
                >
                    {itemdata.title}
                </h3>
                <div>{itemdata.time}</div>
            </div>
            <div
                onClick={jumpToDetail}
            >
                <LazyLoadImg
                    src='https://img.alicdn.com/bao/uploaded/i1/2207626746794/O1CN01gMwL08203hU9QmV93_!!0-item_pic.jpg'
                    style={{ width: '120px', height: '120px' }}
                    imgOptions={{
                        alt: '图片',
                    }}
                />
            </div>
        </div>
    )
}

export default ListItem;