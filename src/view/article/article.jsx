import React, { Component } from "react";
import { Button, message } from "antd";
import { withRouter } from "react-router";
import { GET_ONE_FILE } from '../../constants/constants'
import { HttpPost } from '../../server/post';
import marked from 'marked';
import hljs from 'highlight.js';
import "./article.less";

class Article extends Component {
  state ={
    file:{}
  }
  componentDidMount = () => {
    document.documentElement.scrollTop = 0;
    HttpPost(GET_ONE_FILE,{fid:this.props.match.params.fileId}).then(res=>{
      this.setState({
        file:res.data.data[0],
      })
    }).catch(err=>{
      message.error('Network Error')
    })
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      highlight: function(code) {
          return hljs.highlightAuto(code).value;
      },
  });
  };
  returnPage = () => {
    this.props.history.goBack();
  };
  render() {
    const content = marked(Buffer.from(this.state.file.content ?this.state.file.content :"" ).toString('utf8'))
    const tips = this.state.file.tips ? this.state.file.tips.split('#') :[];
    if(tips.length !==0){
      tips.shift()
    }
    return (
      <div className="articleWrap">
        <div className="articleTitle">{this.state.file.title}</div>
        <div className="articleTime">{this.state.file.time}</div>
        <div
          className="articleContent"
          id='content'
          dangerouslySetInnerHTML={{ __html: content}}
        ></div>
        <div className="articleFooterWrap">
          <div className="articleMarkWrap">
          {tips.map(item=>{
            return <div className="articleMark" key={item}>{item}</div>
          })}
          </div>
          <div>
            <Button onClick={this.returnPage}>返回</Button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Article);
