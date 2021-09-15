import {VFC, useState} from 'react'
import {useHistory} from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import {TaskListMemo} from './TaskList'
import { TaskEditMemo } from './TaskEdit'

export const MainTask = () => {
    const history= useHistory();
    const [text, setText] = useState('')

    return (
        <>
          <input className="mb-3 px-3 py-2 border border-gray-300" 
          placeholder="dummy text ?"
          type="text"
          />  
          <p className="mb-10 text-xl font-bold">Tasks</p>
          <div className="grid grid-cols-2 gap-40">
              <TaskListMemo />
              <TaskEditMemo />
          </div>
          <ChevronDoubleRightIcon 
            onClick={() => history.push('/')}
            className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
          />
          <p>Tag page</p>
        </>
    )
}
