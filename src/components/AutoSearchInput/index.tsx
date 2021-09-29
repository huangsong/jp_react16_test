import React, { useRef, useState, useEffect } from 'react';
import Styles from './index.module.css';

interface IAutoSearchInputProps {
    searchTags: string[]
    searchCallback: (key: string[]) => void
}

const AutoSearchInput = (props: IAutoSearchInputProps) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const {
        searchTags,
        searchCallback
    } = props

    const [showResult, setShowResult] = useState<string[]>([])

    const [selectedTags, setSelectedTags] = useState<string[]>([])

    const [inputValue,setInputValue] = useState<string>('')

    useEffect(() => {
        return () => {

        }
    }, [showResult])

    const searchInputChange = () => {

        let inputKey: string = inputRef.current?.value + '';
        setInputValue(inputKey)

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
        setShowResult([])
        setSelectedTags([...selectedTags,sKey])
        setInputValue('')
    }

    const onSubmit = ()=>{
        setShowResult([])
        searchCallback(selectedTags)
    }

    const onkeydown = (event: { keyCode: number; })=>{
        //if(event.keyCode === 13){
            //let inputKey: string = inputRef.current?.value + '';
            //setShowResult([])
            //searchCallback(inputKey)
        //}
    }

    const deleteSearchKey = (dIndex:number)=>{
        let copySelectedTags = JSON.parse(JSON.stringify(selectedTags));
        copySelectedTags.splice(dIndex,1)
        setSelectedTags(copySelectedTags)
    }

    return (
        <div className={Styles.autoSearchWrap}>
            <div className={Styles.searchInputWrap}>
                <div className={Styles.searchTagWrap}>
                    {selectedTags.map((sTagItem,sTagIndex)=>{
                        return <div 
                        onClick={()=>{
                            deleteSearchKey(sTagIndex)
                        }}
                        className={Styles.searchTag}>{sTagItem}<span style={{fontSize:6,padding:'6px',color:'#999'}} className="iconfont icon-close"></span></div>
                    })}
                </div>
                <div style={{flex:1,position:'relative'}}>
                <input
                    type="text"
                    placeholder="search tag"
                    ref={inputRef}
                    className={Styles.searchInput}
                    onKeyDown={onkeydown}
                    onChange={searchInputChange}
                    value={inputValue}
                />
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
                
                <button type="submit" onClick={onSubmit} className={Styles.searchBtn}><span className='iconfont icon-search'></span></button>
            </div>
            

        </div>
    )
}

export default AutoSearchInput;