import React, { Component } from "react";
import { Tabs, Collapse, Pagination, Modal, message } from "antd";
import { Link } from "react-router-dom";
import { HttpPost } from "../../server/post";
import { HttpGet } from "../../server/get";
import {
  GET_ARTICLE_NAME,
  GET_ALL_PHOTO,
  GET_PHOTO_TOTAL
} from "../../constants/constants";
import "./file.less";

const { TabPane } = Tabs;
const { Panel } = Collapse;
export default class File extends Component {
  state = {
    total: 5,
    currentPage: 1,
    paginationHidden: false,
    showPhotoModal: false,
    description: true,
    articles: [],
    photoList: [],
    currentPhoto: {}
  };
  componentDidMount = () => {
    this.getArticles();
    this.getPhotoTotal();
    this.getPhotoList(1);
  };
  getPhotoTotal = () => {
    HttpGet(GET_PHOTO_TOTAL)
      .then(res => {
        if (res.data) {
          this.setState({
            total: res.data.data[0].total
          });
        }
      })
      .catch(err => {
        message.error("NetWork error,");
      });
  };
  getPhotoList = page => {
    HttpPost(GET_ALL_PHOTO, { page: page })
      .then(res => {
        if (res.data) {
          this.setState({
            photoList: res.data.data
          });
        }
      })
      .catch(err => {
        message.error("NetWork error,");
      });
  };
  getArticles = () => {
    HttpGet(GET_ARTICLE_NAME)
      .then(res => {
        if (res.data) {
          this.setState({
            articles: res.data
          });
        }
      })
      .catch(err => {
        message.error("NetWork error,");
      });
  };
  onChangePage = page => {
    this.setState({
      currentPage: page
    });
    this.getPhotoList(page);
  };
  showPhoto = item => {
    this.setState({
      showPhotoModal: true,
      currentPhoto: item
    });
  };
  closePhotoModal = () => {
    this.setState({
      currentPhoto: {},
      showPhotoModal: false
    });
  };
  renderFileList = () => {
    let articles = this.state.articles;
    let months = [];
    articles.map(item => {
      let month = item.time.slice(0, 7);
      months.push(month);
    });
    months = Array.from(new Set(months))
    return months.map(item => {
      return (
        <Panel header={item} key={item}>
          {articles.map(i => {
            if (i.time.slice(0, 7) === item) {
              return (
                <div className="articleLink" key={i.fid}>
                  <Link to={`/article/${i.fid}`} className="link">
                    <p>{i.title}</p>
                  </Link>
                </div>
              );
            }
          })}
        </Panel>
      );
    });
  };
  render() {
    return (
      <div className="fileWrap">
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="文章" key="1">
            <Collapse accordion>{this.renderFileList()}</Collapse>
          </TabPane>
          <TabPane tab="相册" key="3">
            <div className="photoWrap">
              {this.state.photoList.map(item => {
                return (
                  <img
                    key={item.id}
                    src={item.url}
                    alt=""
                    onClick={() => this.showPhoto(item)}
                  />
                );
              })}
            </div>
            <Pagination
              small
              hideOnSinglePage={true}
              current={this.state.currentPage}
              pageSize={30}
              onChange={this.onChangePage}
              total={this.state.total}
            />
          </TabPane>
        </Tabs>

        <Modal
          className="photoModal"
          visible={this.state.showPhotoModal}
          onCancel={this.closePhotoModal}
          footer={
            <div>
              <p>{this.state.currentPhoto.time}</p>
              {this.state.currentPhoto.description ? (
                <p>{this.state.currentPhoto.description}</p>
              ) : null}
            </div>
          }
        >
          <img src={this.state.currentPhoto.url} alt="" />
        </Modal>
      </div>
    );
  }
}
