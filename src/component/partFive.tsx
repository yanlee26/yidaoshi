import React, { FC, useState } from 'react'
import { Button, Cell, Input, Message, Icon } from 'zarm'
import './partOne.less'

interface IpartFive {}

const partFive: FC<IpartFive> = (props) => {
    const [monthMoney, setMonthMoney] = useState('')
    const [yearPercent, setYearPercent] = useState('')
    const [year, setYear] = useState('')
    const [result, setResult] = useState<any>('')

    return (
        <div className="partFive">
            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <Message theme="danger" icon={<Icon type="warning-round" />}>
                    表示定投最终收益测算
                </Message>
            </div>

            <Cell title="每月定投金额">
                <Input
                    clearable
                    type="text"
                    placeholder="请输入"
                    value={monthMoney}
                    onChange={(value) => {
                        setMonthMoney(value)
                    }}
                    onBlur={(value) => console.log(`onBlur: ${value}`)}
                />
                <span>万元</span>
            </Cell>
            <Cell title="投资年数">
                <Input
                    clearable
                    type="text"
                    placeholder="请输入"
                    value={year}
                    onChange={(value) => {
                        setYear(value)
                        console.log(`onChange: ${value}`)
                    }}
                    onBlur={(value) => console.log(`onBlur: ${value}`)}
                />
                <span>年</span>
            </Cell>
            <Cell title="年化收益率">
                <Input
                    clearable
                    type="text"
                    placeholder="请输入"
                    value={yearPercent}
                    onChange={(value) => {
                        setYearPercent(value)
                    }}
                    onBlur={(value) => console.log(`onBlur: ${value}`)}
                />
                <span>%</span>
            </Cell>
            <Cell />
            <div className="button" style={{ marginBottom: '20px' }}>
                <Button
                    theme="primary"
                    style={{ marginRight: '20px' }}
                    onClick={() => {
                        const t = 1 + Number(yearPercent) / 1200
                        const n = Number(year) * 12
                        const A = Number(monthMoney)
                        const P = (A * (t - Math.pow(t, n + 1))) / (1 - t)
                        setResult(Math.round(Number(P) * 10000) / 10000 + '')
                    }}>
                    计算
                </Button>
                <Button
                    theme="danger"
                    onClick={() => {
                        setResult('')
                        setMonthMoney('')
                        setYear('')
                        setYearPercent('')
                    }}>
                    清空
                </Button>
            </div>

            <Cell title="到期收益总金额">
                <Input readOnly type="text" value={result} />
                <span>万元</span>
            </Cell>
            <Cell />
        </div>
    )
}

export default partFive
