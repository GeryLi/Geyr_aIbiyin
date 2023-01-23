// @ts-nocheck
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import styled from 'styled-components'
import { Rate } from 'antd';

const ItemInfo = memo((props) => {
    const { itemData,itemNum=4 } = props
    
    return (
        <ItemInfoWapper vfColor={itemData?.verify_info?.text_color || "#39576a" 
        } itemNum={itemNum}>
            <div className="inner">
                <div className="cover">
                    <img src={itemData.picture_url} alt={itemData.name} />
                </div>
                <div className="desc">
                    {
                        itemData.verify_info.messages.join("-")
                    }
                </div>
                <div className="name">{
                    itemData.name
                }</div>
                <div className="price">
                    {itemData.price_format}/晚
                </div>

                <div className="rateouter">
                    <Rate disabled defaultValue={itemData?.star_rating ?? 5} style={{ color: "pink", fontSize: '12px' }} className="rate" />
                    <span>
                        {
                           itemData?.star_rating
                        }
                    </span>
                    <span>
                        {itemData?.bottom_info?.content
}
                    </span>
                </div>
            </div>
        </ItemInfoWapper>
    )
})
const ItemInfoWapper = styled.div`
box-sizing:border-box;
width:${props=> (100 / props.itemNum)}% ;
padding:8px;

.cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow:hidden;
    
    img {
        position:absolute;
        left: 0;
        top:0;
        width: 100%;
        height: 100%;
    }


}

.desc {
    margin:10px 0 5px;
    font-size:12px;
    font-weight:700;
    color: ${props => props.vfColor};

}

.name {
    font-size:16px;
    font-weight:700;
    overflow:hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.price {
    margin:8px 0;
    
}

.rateouter {
    vertical-align: middle;
    span {
        font-size:12px;
    }
}
.rate {
    margin-top: -5px;
}
.rate li {
    margin-inline-end:0px !important; 
}
`

ItemInfo.propTypes = {
    itemData: PropTypes.object
}

export default ItemInfo