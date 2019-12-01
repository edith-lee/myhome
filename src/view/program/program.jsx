import React, { Component } from "react";
import { HttpGet } from "../../server/get";
import { message, Skeleton } from "antd";
import { GET_ALL_PROGRAM } from "../../constants/constants";
import "./program.less";

export default class Program extends Component {
  state = {
    programList: [],
    loading: false
  };
  componentDidMount = () => {
    this.setState({ loading: true });
    HttpGet(GET_ALL_PROGRAM)
      .then(res => {
        if (res.data) {
          this.setState({
            programList: res.data,
            loading: false
          });
        }
      })
      .catch(err => {
        this.setState({ loading: false });
        message.error("NetWork error,");
      });
  };
  renderProgramList = () => {
    let programList = this.state.programList;
    if (programList.length !== 0) {
      return programList.map(item => {
        return (
          <div className="contentItem" key={item.pid}>
            <span className="mark">
              {item.type === 1 ? "web" : "微信小程序"}
            </span>
            <div className="title">{item.title}</div>
            <div className="programDetial">
              <div className="detailItem">
                <div className="itemTitle">Description：</div>
                <div className="itemContent">{item.description}</div>
              </div>
              <div className="detailItem">
                <div className="itemTitle">Powered by：</div>
                <div className="itemContent">{item.powerBy}</div>
              </div>
              <div className="detailItem">
                <div className="itemTitle">Demo Url：</div>
                {item.type === 1 ? (
                  <div className="itemContent">
                    <a href={item.demoUrl} target='_blank'>{item.demoUrl}</a>
                  </div>
                ) : (
                  <div className="itemContent">
                    <img
                      src={item.demoUrl}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                    <div className="tips">（请使用微信扫一扫）</div>
                  </div>
                )}
              </div>
              <div className="detailItem">
                <div className="itemTitle">Github：</div>
                <div className="itemContent">
                  <a href={item.github} target='_blank'>{item.github}</a>
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return null;
    }
  };
  render() {
    return (
      <div className="programWrap">
        <div className="contentWrap">
          {this.renderProgramList()}
          {this.state.loading ? (
            <div>
              <div className="contentItem">
                <Skeleton></Skeleton>
              </div>
              <div className="contentItem">
                <Skeleton></Skeleton>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
