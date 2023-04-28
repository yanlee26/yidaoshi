import React, { FC, useState } from 'react'
import { Tabs } from 'zarm'
const { Panel } = Tabs
import logo from '@/assets/logo.jpg'
import erweima from '@/assets/erweima.jpeg'
import PartFive from '@/component/partFive'
import PartTwo from '@/component/partTwo'
import PartThree from '@/component/partThree'
import PartFour from '@/component/partFour'
import './index.less'
import PartOneCopy from '@/component/partOneCopy'
interface IIndex {}

const Index: FC<IIndex> = (props) => {
    const [value, setValue] = useState(0)
    return (
        <div className="app1">
            <img src={logo} alt="" className="logo" />

            <Tabs scrollable value={value} onChange={setValue} swipeable>
                <Panel title="定投卖出价">
                    <PartOneCopy />
                </Panel>
                <Panel title="定投倒推">
                    <PartTwo />
                </Panel>
                <Panel title="最终收益">
                    <PartThree />
                </Panel>
                <Panel title="初始投入">
                    <PartFour />
                </Panel>
                <Panel title="定投最终收益测算">
                    <PartFive />
                </Panel>
            </Tabs>

            <div className="erweima">
                <img src={erweima} alt="" />
            </div>
        </div>
    )
}

export default Index
