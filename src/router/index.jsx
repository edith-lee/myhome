import React,{Component} from 'react'
import {Switch,HashRouter as Router,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Index from '../view/index/index'
import Program from '../view/program/program'
import File from '../view/file/file'
import Contact from '../view/contact/contact'
import AvatarImg from './../utils/image/avatar.jpg'
import './index.less'

export default class MyIndex  extends Component{
    render(){
        return(
            <div className='routerWrap'>
                <div className="navWrap">
                    <div className="navLeft">
                        <ul>
                            <li>
                                <Link to="/"><p className="changeFile">首页</p></Link>
                            </li>
                            <li>
                                <Link to="/program"><p className="changeFile">DEMO</p></Link>
                            </li>
                            <li>
                                <Link to="/file"><p className="changeFile">归档</p></Link>
                            </li>
                            <li>
                                <Link to="/contact"><p className="changeFile">联系我</p></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navRight">
                        <a href="#">
                            <img className="avatarImg" src={AvatarImg}/>
                        </a>
                    </div>
                </div>
                <div className='content'>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Index}/>
                            <Route path='/program' component={Program}/>
                            <Route path='/file' component={File}/>
                            <Route path='/contact' component={Contact}/>
                        </Switch>
                    </Router>
                </div>
                <div className='footer'>
                    <p>
                        Copyright © 2014-2019 Edith. All Rights Reserved.
                        <br/>
                        Powered by react+nodejs+mysql
                    </p>
                </div>
            </div>
        )
    }
}
