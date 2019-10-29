import React,{Component} from 'react'
import { Pagination } from 'antd';
import {Link} from 'react-router-dom'
import './index.less'

export default class Index  extends Component{
    state = {
        currentPage: 3,
    };
    onChangePage = page => {
        console.log(page);
        this.setState({
          currentPage: page,
        });
      };
    render(){
        const htmlContent = `<p><span style='color: rgb(255, 0, 0);'><em><strong>1111</strong></em></span></p>`
        return(
            <div className="indexWrap">
                <div className="bannerWrap">
                    <p>
                        彼时年少莫负良辰 来日枯颜莫叹须臾
                    </p>
                </div>
                <div className="contentWrap">
                    <div className="contentItem">
                        <span className="mark">#react</span>
                        <div className="time">2019年10月28日</div>
                        <div className="title"><Link to="/article/1" className="link"><p>文章标题啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p></Link></div>
                        <div className="contentDetial" dangerouslySetInnerHTML={{__html:htmlContent}} />
                    </div>
                    <div className="contentItem">
                        <span className="mark">#react</span>
                        <div className="time">2019年10月28日</div>
                        <div className="title"><Link to="/article/2" className="link"><p>文章标题啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p></Link></div>
                        <div className="contentDetial" dangerouslySetInnerHTML={{__html:htmlContent}} />
                    </div>
                    <Pagination small pageSize={3} current={this.state.currentPage} onChange={this.onChangePage} total={10} />
                </div>
                
            </div>
        )
    }
}