import React, { Component } from "react";
const redirectToGoogle = (url) => {
    window.location.href = url;
};

class Posts extends Component {

    render() {

        if (this.props.resumePosts && this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.posts;
            var posts = this.props.resumePosts.map(function (posts) {

                return (
                    <div
                        className="col-sm-12 col-md-6 col-lg-4"
                        key={posts.title}
                        style={{ cursor: "pointer" }}
                    >
                        <span className="portfolio-item d-block">
                            <div className="foto" onClick={() => redirectToGoogle(posts.url)}>
                                <div>
                                    <img
                                        src={posts.images[0]}
                                        alt="projectImages"
                                        height="230"
                                        style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                                    />
                                    <span className="project-date">{posts.Date}</span>
                                    <br />
                                    <p className="project-title-settings mt-3">
                                        {posts.title}
                                    </p>
                                </div>
                            </div>
                        </span>
                    </div>
                );
            });
        }

        return (
            <section id="posts">
                <div className="col-md-12">
                    <h1 className="section-title" style={{ color: "black" }}>
                        <span>{sectionName}</span>
                    </h1>
                    <div className="col-md-12 mx-auto">
                        <div className="row mx-auto">{posts}</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Posts