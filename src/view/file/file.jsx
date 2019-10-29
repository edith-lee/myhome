import React,{Component} from 'react'
import { Tabs,Collapse,Pagination,Modal } from 'antd';
import {Link} from 'react-router-dom'
import p1 from '../../utils/image/photo/1.jpg';
import p2 from '../../utils/image/photo/2.jpg';
import p3 from '../../utils/image/photo/3.jpg';
import p4 from '../../utils/image/photo/4.jpg';
import p5 from '../../utils/image/photo/5.jpg';
import './file.less'


const { TabPane } = Tabs;
const { Panel } = Collapse;
export default class File  extends Component{
    state = {
        total:5,
        currentPage: 3,
        paginationHidden:false,
        showPhotoModal:false,
        description:true,
    };
    componentDidMount = () =>{
        if(this.state.total/50>1){
            this.setState({
                paginationHidden:false,
            })
        }
    }
    callback= key => {
        console.log(key);
    }
    onChangePage = page => {
        console.log(page);
        this.setState({
          currentPage: page,
        });
      };
    showPhoto = (index) =>{
        console.log(index);
        this.setState({
            showPhotoModal:true,
        })
    }
    closePhotoModal = ()=>{
        this.setState({
            showPhotoModal:false,
        })
    }
    render(){
        return(
            <div className="fileWrap">
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="技术文章" key="1">
                        <Collapse accordion>
                            <Panel header="2019-10" key="1">
                                <div className="articleLink">
                                    <Link to="/article/3" className="link"><p>文章标题啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p></Link><div>#react#js</div>
                                </div>
                                <div className="articleLink">
                                    <Link to="/article/4" className="link"><p>文章标题啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p></Link><div>#react</div>
                                </div>
                            </Panel>
                            <Panel header="2019-09" key="2">
                                <p>list</p>
                            </Panel>
                            <Panel header="2019-08" key="3">
                                <p>list</p>
                            </Panel>
                        </Collapse>
                    </TabPane>
                    <TabPane tab="生活随笔" key="2">
                        <Collapse accordion>
                            <Panel header="2019-10" key="1">
                                <p>list</p>
                            </Panel>
                            <Panel header="2019-09" key="2">
                                <p>list</p>
                            </Panel>
                            <Panel header="2019-08" key="3">
                                <p>list</p>
                            </Panel>
                        </Collapse>
                    </TabPane>
                    <TabPane tab="相册" key="3">
                        <div className="photoWrap">
                            <img src={p1} height={'100px'}  alt="" onClick={()=>this.showPhoto(1)}/>
                            <img src={p2} height={'100px'}  alt="" onClick={()=>this.showPhoto(2)}/>
                            <img src={p3} height={'100px'}  alt="" onClick={()=>this.showPhoto(3)}/>
                            <img src={p4} height={'100px'}  alt="" onClick={()=>this.showPhoto(4)}/>
                            <img src={p5} height={'100px'}  alt="" onClick={()=>this.showPhoto(5)}/>
                        </div>
                        {
                            this.state.paginationHidden ? "" :
                                <Pagination small current={this.state.currentPage} pageSize={50} onChange={this.onChangePage} total={this.state.total} />
                        }
                    </TabPane>
                </Tabs>

                <Modal
                    className="photoModal"
                    visible={this.state.showPhotoModal}
                    onCancel={this.closePhotoModal}
                    footer={this.state.description?<p>description</p>:null}
                    >
                        <img src={p1} alt=""/>
                </Modal>

            </div>
        )
    }
}
