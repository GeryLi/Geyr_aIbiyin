
import React, { memo, useState } from 'react'
import styled from 'styled-components'
import Footerlist from '../common/Footerlist';

const Footer = memo(() => {
  const [footerItem] = useState([
    {
      title: '爱彼迎',
      list: ['工作机会', '爱彼迎新闻', '政策', '无障碍设施']
    },
    {
      title: '发现',
      list: ['信任与安全', '旅行基金', '商务差旅', '爱彼迎杂志', 'Airbnb.org']
    },
    {
      title: '出租',
      list: ['为什么要出租?', '房东义务', '开展体验', '资源中心']
    },
    {
      title: '客服支持',
      list: ['帮助', '邻里支持']
    }

  ]);
  return (
    <FooterWapper>
      <div className="footer_conter center_wapper">
        <div className="top">
          {
            footerItem.map(item => <Footerlist title={item.title} lists={item.list} key={item.title} />)
          }

        </div>
        <div className="bottom"></div>


      </div>
    </FooterWapper>
  )
})
const FooterWapper = styled.div`
width:100%;
height:361px;
border-top: 1px solid #ebebeb;
.footer_conter {

}
.top {
  padding:48px 0;
  display:flex;
  
  ul{
    flex:1;
      font-weight:800;
      color:#767676;
      li {
      padding:5px 0;

      }

    li:nth-child(1) {
      font-size:14px;
      margin-bottom: 16px;
      color:rgb(72,72,72);


    }

  }
  
  
}
.bottom {
    width: 100%;
    height: 60px;
    border-top: 1px solid #ebebeb;


  }


`
export default Footer