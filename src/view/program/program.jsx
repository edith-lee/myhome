import React,{Component} from 'react'
import WechatImg from '../../utils/image/wechatprogram.jpg'
import "./program.less"

export default class Program  extends Component{
    render(){
        return(
            <div className="programWrap">
                <div className="contentWrap">
                    <div className="contentItem">
                        <span className="mark">web</span>
                        <div className="title">啦啦啦啦啦啦啦阿拉啦很长啊</div>
                        <div className="programDetial">
                            <div className="detailItem">
                                <div className="itemTitle">Description：</div>
                                <div className="itemContent">
                                    一个可视化编写sql形成报表的web项目，通过拖拽这个简便可视的方法使不太熟悉sql语句的人可以编写sql语句生成需要的报表。
                                </div>
                            </div>
                            <div className="detailItem">
                                <div className="itemTitle">Powered by：</div>
                                <div className="itemContent">React</div>
                            </div>
                            <div className="detailItem">
                                <div className="itemTitle">Demo Url：</div>
                                <div className="itemContent"><a href="#">http:luckend.cn:8082</a></div>
                            </div>
                            <div className="detailItem">
                                <div className="itemTitle">Github：</div>
                                <div className="itemContent"><a href="#">http:github.com</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="contentItem">
                        <span className="mark">微信小程序</span>
                        <div className="title">title</div>
                        <div className="programDetial">
                            <div className="detailItem">
                                <div className="itemTitle">Description：</div>
                                <div className="itemContent">
                                    一个可视化编写sql形成报表的web项目，通过拖拽这个简便可视的方法使不太熟悉sql语句的人可以编写sql语句生成需要的报表。
                                </div>
                            </div>
                            <div className="detailItem">
                                <div className="itemTitle">Powered by：</div>
                                <div className="itemContent">wxml+wxss</div>
                            </div>
                            <div className="detailItem">
                                <div className="itemTitle">Demo Url：</div>
                                <div className="itemContent">
                                    <img src={WechatImg} alt=""/>
                                    <div className="tips">（请使用微信扫一扫）</div>
                                </div>
                            </div>
                            <div className="detailItem">
                                <div className="itemTitle">Github：</div>
                                <div className="itemContent"><a href="#">http:github.com</a></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}