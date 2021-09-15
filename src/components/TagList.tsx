import { loadPartialConfig } from '@babel/core'
import {VFC, memo} from 'react'
import {useQueryTags} from '../hooks/useQueryTags'
import {TagItemMemo} from './TagItem'

export const TagList: VFC = () => {
    const {status, data} = useQueryTags()
    if (status === 'loading') return <div>{"Loading..."}</div>
    if (status === "error") return <div>{"Error"}</div>
    return (
        <div>
            
        </div>
    )
}

export const TagListMemo = memo(TagList)