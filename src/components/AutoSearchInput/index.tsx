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

    //const [inputVal,setInputVal] = useState<string>('')

    useEffect(() => {
        return () => {

        }
    }, [showResult])

    const searchSubmit = () => {

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

    const setSearchInput = (sKey: string) => {
        searchCallback(sKey)
    }

    return (
        <div className={Styles.autoSearchWrap}>
            <div className={Styles.searchInputWrap}>
                <input
                    type="text"
                    placeholder="search"
                    ref={inputRef}
                    className={Styles.searchInput}
                    onChange={searchSubmit}
                //value={inputVal}
                />
                <button type="submit" onClick={searchSubmit} className={Styles.searchBtn}><span className='iconfont icon-search'></span></button>
            </div>
            {showResult.length > 0 ? (
                <ul className={Styles.searchTipsList}>
                    {
                        showResult.map((sItem, sIndex) => {
                            if (sIndex < 10) {
                                return (
                                    <li key={'key-' + sIndex}
                                        onClick={() => {
                                            setSearchInput(sItem)
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