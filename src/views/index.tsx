import React, { FC, useState } from 'react'
import { Tabs } from 'zarm'
const { Panel } = Tabs
import logo from '@/assets/logo.jpg'
import erweima from '@/assets/erweima.jpeg'
import PartOne from '@/component/partOne'
import PartTwo from '@/component/partTwo'
import PartThree from '@/component/partThree'
import PartFour from '@/component/partFour'
import './index.less'
interface IIndex {}

const Index: FC<IIndex> = (props) => {
    const [value, setValue] = useState(0)
    return (
        <div className="app1">
            <img src={logo} alt="" className="logo" />

            <Tabs value={value} onChange={setValue} swipeable>
                <Panel title="定投收益">
                    <PartOne />
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
            </Tabs>

            <div className="erweima">
                <img src={erweima} alt="" />
            </div>
        </div>
    )
}

export default Index
