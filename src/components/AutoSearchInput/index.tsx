import React, { useRef, useState, useEffect } from 'react';
import Styles from './index.module.css';

interface IAutoSearchInputProps {
    searchTags: string[]
    searchCallback: (key: string) => void
}

const AutoSearchInput = (props: IAutoSearchInputProps) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const {
        searchTags,
        searchCallback
    } = props

    const [showResult, setShowResult] = useState<string[]>([])

    //const [searchText, setSearchText] = useState<string>('')

    useEffect(() => {
        return () => {

        }
    }, [showResult])

    const searchInputChange = () => {

        let inputKey: string = inputRef.current?.value + '';

        if (inputKey.length === 0) {
            setShowResult([])
            return false;
        }

        let searchAry = showResult.length > 0 ? showResult : searchTags;
        let keyResult: string[] = searchAry.filter(sItem => {
            return sItem.indexOf(inputKey) === 0
        })
        setShowResult(keyResult)
    }

    const selectSearhTag = (sKey: string) => {
        //setSearchText(sKey)
        setShowResult([])
        searchCallback(sKey)
    }

    const onSubmit = ()=>{
        let inputKey: string = inputRef.current?.value + '';
        setShowResult([])
        searchCallback(inputKey)
    }

    const onkeydown = (event: { keyCode: number; })=>{
        if(event.keyCode === 13){
            let inputKey: string = inputRef.current?.value + '';
            setShowResult([])
            searchCallback(inputKey)
        }
    }

    return (
        <div className={Styles.autoSearchWrap}>
            <div className={Styles.searchInputWrap}>
                <input
                    type="text"
                    placeholder="search tag"
                    ref={inputRef}
                    className={Styles.searchInput}
                    onKeyDown={onkeydown}
                    onChange={searchInputChange}
                />
                <button type="submit" onClick={onSubmit} className={Styles.searchBtn}><span className='iconfont icon-search'></span></button>
            </div>
            {showResult.length > 0 ? (
                <ul className={Styles.searchTipsList}>
                    {
                        showResult.map((sItem, sIndex) => {
                            if (sIndex < 10) {
                                return (
                                    <li key={'key-' + sIndex}
                                        onClick={() => {
                                            selectSearhTag(sItem)
                                        }}
                                        className={Styles.searchTipsItem}>{sItem}</li>
                                )
                            }
                        })
                    }
                </ul>
            ) : null}

        </div>
    )
}

export default AutoSearchInput;