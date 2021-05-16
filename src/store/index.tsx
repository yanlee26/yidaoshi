import React, { createContext, useContext, FC } from 'react'
import { ConfigProvider } from 'zarm'

// 导出初始状态
export const initialState = {
    count: 0
}

interface IProvider {}

// 创建 context
const CountCtx = createContext(null)

// 创建并导出对应的 Provider
const Provider: FC<IProvider> = (props) => {
    return (
        <CountCtx.Provider value={{ a: 123 }}>
            <ConfigProvider primaryColor="#f1ce50">{props.children}</ConfigProvider>
        </CountCtx.Provider>
    )
}

export default Provider
// 导出 context 中的 value，可通过该函数获取到 state 和 dispatch
export const useJLLDomain = () => useContext(CountCtx)
