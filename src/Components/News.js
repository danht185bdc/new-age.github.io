import React, { Component } from "react";
import NewItem from "./NewItem";
import dl from "./duLieu.json";

class News extends Component {
  render() {
    return (
      <div>
        <header className="masthead tin-tuc">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-12 my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5">Trang tin tức</h1>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row mt-3">
            {dl.map((value, key) => {
              return (
                <NewItem
                  tinID={key + 1}
                  anh={value.anh}
                  tieuDe={value.tieuDe}
                  trichDan={value.trichDan}
                ></NewItem>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
