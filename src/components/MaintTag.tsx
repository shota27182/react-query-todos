import {VFC} from 'react'
import {useHistory} from 'react-router-dom'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { TagEditMemo } from './TagEdit'
import {TagListMemo} from './TagList'

export const MaintTag: VFC = () => {
    const history = useHistory()
    return (
        <>
            <p className="mb-10 text-xl font-bold">Tags</p>

            <div>
                <TagListMemo />
                <TagEditMemo />
            </div>
            <ChevronDoubleLeftIcon 
                onClick={() => history.push('/')}
                className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
            />
            <p>Task Page</p>
        </>
    )
}
