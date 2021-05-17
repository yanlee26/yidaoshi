import React, { FC, useState } from 'react'
import { Button, Cell, Icon, Input, Message } from 'zarm'
import './partOne.less'

interface IPartFour {}

const PartFour: FC<IPartFour> = (props) => {
    const [money, setMoney] = useState('')
    const [yearPercent, setYearPercent] = useState('')
    const [year, setYear] = useState('')
    const [result, setResult] = useState('')

    return (
        <div className="partOne">
            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <Message theme="danger" icon={<Icon type="warning-round" />}>
                    表示根据到期目标金额测算初始需一次性投入金额
                </Message>
            </div>

            <Cell title="目标到期金额">
                <Input
                    clearable
                    type="text"
                    placeholder="请输入"
                    value={money}
                    onChange={(value) => {
                        setMoney(value)
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
            <Cell title="年化收益率 %">
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
                        const result =
                            Number(money) / Math.pow(1 + Number(yearPercent) / 100, Number(year))
                        setResult(result + '')
                    }}>
                    计算
                </Button>
                <Button
                    theme="danger"
                    onClick={() => {
                        setResult('')
                        setMoney('')
                        setYear('')
                        setYearPercent('')
                    }}>
                    清空
                </Button>
            </div>

            <Cell title="初始投入金额">
                <Input readOnly type="text" value={result} />
                <span>万元</span>
            </Cell>
            <Cell />
        </div>
    )
}

export default PartFour
