import React, { FC, useState } from 'react'
import { Button, Cell, Input, Message, Icon } from 'zarm'
import './partOne.less'

interface IPartOne {}

const PartOne: FC<IPartOne> = (props) => {
    const [ETFMoney, setETFMoney] = useState('')
    const [yearPercent, setYearPercent] = useState('')
    const [month, setMonth] = useState('')
    const [lowYear, setLowYear] = useState<any>('')
    const [upYear, setUpYear] = useState<any>('')

    return (
        <div className="partOne">
            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <Message theme="danger" icon={<Icon type="warning-round" />}>
                    表示定投最终收益测算
                </Message>
            </div>

            <Cell title="已定投月数">
                <Input
                    clearable
                    type="text"
                    placeholder="请输入"
                    value={month}
                    onChange={(value) => {
                        setMonth(value)
                    }}
                    onBlur={(value) => console.log(`onBlur: ${value}`)}
                />
                <span>个月</span>
            </Cell>
            <Cell title="ETF成本价">
                <Input
                    clearable
                    type="text"
                    placeholder="请输入"
                    value={ETFMoney}
                    onChange={(value) => {
                        setETFMoney(value)
                        console.log(`onChange: ${value}`)
                    }}
                    onBlur={(value) => console.log(`onBlur: ${value}`)}
                />
                <span>元</span>
            </Cell>
            <Cell title="目标年收益率">
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
                        const t = Number(yearPercent) * 0.01
                        const n = Number(month)
                        const A = Number(ETFMoney)

                        const lowYearValue = A * (1 + t)
                        setLowYear(lowYearValue.toFixed(2))
                        const upYearValue = A * (1 + (t * n) / 12)
                        setUpYear(upYearValue.toFixed(2))
                    }}>
                    计算
                </Button>
                <Button
                    theme="danger"
                    onClick={() => {
                        setUpYear('')
                        setLowYear('')
                        setETFMoney('')
                        setMonth('')
                        setYearPercent('')
                    }}>
                    清空
                </Button>
            </div>

            <Cell title="定投1年以下卖出价">
                <Input readOnly type="text" value={lowYear} />
                <span>元</span>
            </Cell>
            <Cell title="定投1年以上卖出价">
                <Input readOnly type="text" value={upYear} />
                <span>元</span>
            </Cell>
            <Cell />
        </div>
    )
}

export default PartOne
