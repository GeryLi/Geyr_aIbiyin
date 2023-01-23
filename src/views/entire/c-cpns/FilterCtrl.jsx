import classNames from 'classnames';
import React, { memo, useState } from 'react'
import styled from 'styled-components';

const FilterCtrl = memo((props) => {
    const [tabList] = useState(["人数", "可免费取消", "房源类型", "价格", "位置区域", "闪定", "卧室/床数", "促销/优惠", "更多筛选条件"]);
    const [selecttabs, setselecttabs] = useState([]);

    function changeHandle(item) {
        const newlist = [...selecttabs]

        if (selecttabs.includes(item)) {
            const index = selecttabs.findIndex(finditem=>finditem===item)
            newlist.splice(index,1)

        } else {
            newlist.push(item)
        }
        setselecttabs(newlist)



        // @ts-ignore
    }

    return (
        <FilterCtrlWapper>
            {
                tabList.map(item => <div key={item} className={classNames('item', { active: selecttabs.includes(item) })} onClick={e => changeHandle(item)} >{item}</div>)
            }
        </FilterCtrlWapper>
    )
})
const FilterCtrlWapper = styled.div`
display:flex;
margin-left:20px;

.item {
    box-sizing:border-box;
    height:32px;
    line-height: 32px;
    text-align: center;
    padding:0 12px;
    border:1px solid #f2f2f2;
    margin:0 5px;
    cursor: pointer;
    &:hover {
        background-color:#f2f2f2;
    }

}
.active {
    background-color:rgb(0, 132, 137);
    color: white;
    &:hover {
        background-color:#006c70;
    }
}


`


export default FilterCtrl