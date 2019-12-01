import React, { Component } from "react";
import { Pagination, message, Skeleton } from "antd";
import { Link } from "react-router-dom";
import { HttpPost } from "../../server/post";
import { HttpGet } from "../../server/get";
import {
  GET_ARTICLE_TOTAL,
  GET_ARTICLE_LIST,
  GET_TOP_FILE
} from "../../constants/constants";
import marked from "marked";
import hljs from "highlight.js";
import "./index.less";

export default class Index extends Component {
  state = {
    articleList: [],
    total: 10,
    currentPage: 1,
    topFile: {},
    loading: false
  };
  onChangePage = page => {
    this.setState({
      currentPage: page
    });
  };
  componentWillMont =()=>{
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
      }
    });
  } 
  componentDidMount = () => {
    this.getArticleTotal();
    this.getArticleList(1);
    this.getTopFile();
    
  };
  getTopFile = () => {
    this.setState({ loading: true });
    HttpGet(GET_TOP_FILE)
      .then(res => {
        if (res.data) {
          if (res.data.data.length !== 0) {
            this.setState({
              topFile: res.data.data[0],
              loading: false
            });
          } else {
            this.setState({
              topFile: {},
              loading: false
            });
          }
        }
      })
      .catch(err => {
        message.error("NetWork error,");
        this.setState({ loading: false });
      });
  };
  getArticleTotal = () => {
    this.setState({ loading: true });
    HttpGet(GET_ARTICLE_TOTAL)
      .then(res => {
        if (res.data) {
          this.setState({
            total: res.data[0].total,
            loading: false
          });
        }
      })
      .catch(err => {
        message.error("NetWork error,");
        this.setState({ loading: false });
      });
  };
  getArticleList = page => {
    this.setState({ loading: true });
    HttpPost(GET_ARTICLE_LIST, { page: page })
      .then(res => {
        this.setState({
          articleList: res.data.data,
          loading: false
        });
      })
      .catch(err => {
        message.error("NetWork error,");
        this.setState({ loading: false });
      });
  };
  renderList = () => {
    return this.state.articleList.map(item => {
      return (
        <div className="contentItem" key={item.fid}>
          <span className="mark">{item.tips}</span>
          <div className="time">{item.time}</div>
          <div className="title">
            <Link to={`/article/${item.fid}`} className="link">
              <p>{item.title}</p>
            </Link>
          </div>
          <div
            className="contentDetial"
            id="content"
            dangerouslySetInnerHTML={{
              __html: marked(Buffer.from(item.content).toString("utf8"))
            }}
          ></div>
        </div>
      );
    });
  };
  renderTopFile = () => {
    if (
      this.state.currentPage === 1 &&
      Object.keys(this.state.topFile).length !== 0
    ) {
      return (
        <div className="contentItem" key={this.state.topFile.fid}>
          <span className="mark">{this.state.topFile.tips}</span>
          <div className="time">{this.state.topFile.time}</div>
          <div className="title">
            <Link to={`/article/${this.state.topFile.fid}`} className="link">
              <p>
                <span className="topFileTitle">[置顶] </span>
                {this.state.topFile.title}
              </p>
            </Link>
          </div>
          <div
            className="contentDetial"
            id="content"
            dangerouslySetInnerHTML={{
              __html: marked(
                Buffer.from(this.state.topFile.content).toString("utf8")
              )
            }}
          ></div>
        </div>
      );
    } else {
      return null;
    }
  };
  render() {
    return (
      <div className="indexWrap">
        <div className="bannerWrap">
          <p>彼时年少莫负良辰 来日枯颜莫叹须臾</p>
        </div>
        <div className="contentWrap">
          {this.state.loading ? (
            <div>
              <div className="contentItem">
                <Skeleton active={true}>
                  <span className="mark">111</span>
                  <div className="time">222</div>
                  <div className="title">
                    <div className="link">
                      <p>333</p>
                    </div>
                  </div>
                  <div className="contentDetial" id="content"></div>
                </Skeleton>
              </div>
              <div className="contentItem">
                <Skeleton active={true}>
                  <span className="mark">111</span>
                  <div className="time">222</div>
                  <div className="title">
                    <div className="link">
                      <p>333</p>
                    </div>
                  </div>
                  <div className="contentDetial" id="content"></div>
                </Skeleton>
              </div>
              <div className="contentItem">
                <Skeleton active={true}>
                  <span className="mark">111</span>
                  <div className="time">222</div>
                  <div className="title">
                    <div className="link">
                      <p>333</p>
                    </div>
                  </div>
                  <div className="contentDetial" id="content"></div>
                </Skeleton>
              </div>
            </div>
          ) : null}
          {this.renderTopFile()}
          {this.renderList()}
          <Pagination
            small
            hideOnSinglePage={true}
            pageSize={3}
            current={this.state.currentPage}
            onChange={this.onChangePage}
            total={this.state.total}
          />
        </div>
      </div>
    );
  }
}
