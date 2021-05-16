import React from 'react'
import ReactDOM from 'react-dom'
import '@/styles/base.less'
import ViewsRoot from '@/views/Root'
import Provider from '@/store/index'
import 'zarm/dist/zarm.css'

ReactDOM.render(
    <Provider>
        <ViewsRoot />
    </Provider>,
    document.getElementById('root')
)
