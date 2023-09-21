exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 2484:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/BlogSingle/index.js




const BlogSingle_BlogSingle = ({ maxWidth , open , onClose , title , doc , image1 , author , authorName , date  })=>{
    return /*#__PURE__*/ _jsx(Fragment, {
        children: /*#__PURE__*/ _jsx(Dialog, {
            open: open,
            onClose: onClose,
            className: "modalWrapper quickview-dialog",
            maxWidth: maxWidth,
            children: /*#__PURE__*/ _jsxs(Grid, {
                className: "modalBody modal-body tp-blog-single-section",
                children: [
                    /*#__PURE__*/ _jsx("button", {
                        className: "modal-close",
                        onClick: onClose,
                        children: /*#__PURE__*/ _jsx("i", {
                            className: "fa fa-close"
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "tp-blog-content clearfix",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "post",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "entry-media",
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: image1,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("ul", {
                                        className: "entry-meta",
                                        children: [
                                            /*#__PURE__*/ _jsxs("li", {
                                                children: [
                                                    /*#__PURE__*/ _jsx("img", {
                                                        src: author,
                                                        alt: ""
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ _jsxs(Link, {
                                                        href: "/",
                                                        children: [
                                                            "By ",
                                                            authorName
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx("li", {
                                                children: /*#__PURE__*/ _jsxs(Link, {
                                                    href: "/",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "fa fa-calendar-o",
                                                            "aria-hidden": "true"
                                                        }),
                                                        date
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("h2", {
                                        children: title
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        children: doc
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        children: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now."
                                    }),
                                    /*#__PURE__*/ _jsx("blockquote", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. "
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now."
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        children: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "tag-share clearfix",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "tag",
                                        children: /*#__PURE__*/ _jsxs("ul", {
                                            children: [
                                                /*#__PURE__*/ _jsx("li", {
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        href: "/",
                                                        children: "Design"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("li", {
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        href: "/",
                                                        children: "Development"
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("li", {
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        href: "/",
                                                        children: "Quality"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "share",
                                        children: /*#__PURE__*/ _jsxs("ul", {
                                            children: [
                                                /*#__PURE__*/ _jsx("li", {
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        href: "https://www.facebook.com/",
                                                        children: /*#__PURE__*/ _jsx("i", {
                                                            className: "fa fa-facebook"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("li", {
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        href: "https://twitter.com/",
                                                        children: /*#__PURE__*/ _jsx("i", {
                                                            className: "fa fa-twitter"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("li", {
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        href: "https://www.linkedin.com/",
                                                        children: /*#__PURE__*/ _jsx("i", {
                                                            className: "fa fa-linkedin"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("li", {
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        href: "https://www.pinterest.com/",
                                                        children: /*#__PURE__*/ _jsx("i", {
                                                            className: "fa fa-pinterest"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_BlogSingle = ((/* unused pure expression or super */ null && (BlogSingle_BlogSingle)));

;// CONCATENATED MODULE: ./components/BlogSection/index.js




const blog = [
    {
        Id: "1",
        heading: "Everything is easy when you think it easy at all.",
        bImg1: "images/blog/blog1/1.jpg",
        author: "images/blog/blog1/author.jpg",
        authorName: "Warner",
        date: "April 09,2021",
        des: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now.'
    },
    {
        Id: "2",
        heading: "How to estublish a team with a great way for you?",
        bImg1: "images/blog/blog1/2.jpg",
        author: "images/blog/blog1/author2.jpg",
        authorName: "Miller",
        date: "April 11,2021",
        des: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now.'
    },
    {
        Id: "3",
        heading: "A great way to establish as 3D designer for you.",
        bImg1: "images/blog/blog1/3.jpg",
        author: "images/blog/blog1/author3.jpg",
        authorName: "alia",
        date: "April 14,2021",
        des: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now.'
    }
];
const BlogSection = ()=>{
    const [open, setOpen] = React.useState(false);
    function handleClose() {
        setOpen(false);
    }
    const [state, setState] = useState({});
    const handleClickOpen = (item)=>{
        setOpen(true);
        setState(item);
    };
    return /*#__PURE__*/ _jsxs("section", {
        id: "blog",
        className: "blog-section section-padding",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-l2",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "section-title section-title2 text-center",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    children: "From my Blog"
                                }),
                                /*#__PURE__*/ _jsx("h2", {
                                    children: "Latest News"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "col col-xs-12",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "blog-grids clearfix",
                                children: blog.map((blogs, bl)=>/*#__PURE__*/ _jsxs("div", {
                                        className: "grid",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "entry-media",
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    src: blogs.bImg1,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "details",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        onClick: ()=>handleClickOpen(blogs),
                                                        children: blogs.heading
                                                    }),
                                                    /*#__PURE__*/ _jsxs("ul", {
                                                        className: "entry-meta",
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("li", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("img", {
                                                                        src: blogs.author,
                                                                        alt: ""
                                                                    }),
                                                                    "By ",
                                                                    /*#__PURE__*/ _jsx("button", {
                                                                        onClick: ()=>handleClickOpen(blogs),
                                                                        children: blogs.authorName
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsx("li", {
                                                                children: blogs.date
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, bl))
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "white_svg",
                children: /*#__PURE__*/ _jsx("svg", {
                    x: "0px",
                    y: "0px",
                    viewBox: "0 186.5 1920 113.5",
                    children: /*#__PURE__*/ _jsx("polygon", {
                        points: "0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "
                    })
                })
            }),
            /*#__PURE__*/ _jsx(BlogSingle, {
                open: open,
                onClose: handleClose,
                title: state.heading,
                doc: state.doc,
                image1: state.bImg1,
                author: state.author,
                authorName: state.authorName,
                date: state.date
            })
        ]
    });
};
/* harmony default export */ const components_BlogSection = ((/* unused pure expression or super */ null && (BlogSection)));


/***/ }),

/***/ 3666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ContactSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/ContactFrom/index.js


class ContactForm extends external_react_.Component {
    state = {
        name: "",
        email: "",
        subject: "",
        lastname: "",
        events: "",
        notes: "",
        error: {}
    };
    changeHandler = (e)=>{
        const error = this.state.error;
        error[e.target.name] = "";
        this.setState({
            [e.target.name]: e.target.value,
            error
        });
    };
    subimtHandler = (e)=>{
        e.preventDefault();
        const { name , email , subject , lastname , events , notes , error  } = this.state;
        if (name === "") {
            error.name = "Please enter your name";
        }
        if (email === "") {
            error.email = "Please enter your email";
        }
        if (subject === "") {
            error.subject = "Please enter your subject";
        }
        if (lastname === "") {
            error.lastname = "Please enter your Lastname";
        }
        if (events === "") {
            error.events = "Select your event list";
        }
        if (notes === "") {
            error.notes = "Please enter your note";
        }
        if (error) {
            this.setState({
                error
            });
        }
        if (error.name === "" && error.email === "" && error.email === "" && error.lastname === "" && error.subject === "" && error.events === "" && error.notes === "") {
            this.setState({
                name: "",
                email: "",
                subject: "",
                events: "",
                notes: "",
                error: {}
            });
        }
    };
    render() {
        const { name , email , subject , lastname , error  } = this.state;
        return /*#__PURE__*/ jsx_runtime_.jsx("form", {
            onSubmit: this.subimtHandler,
            className: "form",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 col-md-6 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-field",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    value: name,
                                    onChange: this.changeHandler,
                                    type: "text",
                                    name: "name",
                                    placeholder: "Name"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: error.name ? error.name : ""
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 col-md-6 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-field",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    value: lastname,
                                    onChange: this.changeHandler,
                                    type: "text",
                                    name: "lastname",
                                    placeholder: "Lastname"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: error.lastname ? error.lastname : ""
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 col-md-6 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-field",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    onChange: this.changeHandler,
                                    value: email,
                                    type: "email",
                                    name: "email",
                                    placeholder: "Email"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: error.email ? error.email : ""
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 col-md-6 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-field",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    onChange: this.changeHandler,
                                    value: subject,
                                    type: "text",
                                    name: "subject",
                                    placeholder: "Subject"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: error.subject ? error.subject : ""
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "form-field",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                name: "message",
                                placeholder: "Message (English or Finnish)"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "form-submit",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                className: "template-btn",
                                children: "Send Message"
                            })
                        })
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const ContactFrom = (ContactForm);

;// CONCATENATED MODULE: ./components/ContactSection/index.js



const ContactSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "contact",
        className: "tp-contact-pg-section section-padding",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col col-lg-10 offset-lg-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "office-info",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col col-xl-6 col-lg-6 col-md-6 col-12",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "office-info-item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "office-info-icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "info-icon",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fi flaticon-mail"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "office-info-text",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                children: "Email"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "joonas.stengard(at)gmail.com"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col col-xl-6 col-lg-6 col-md-6 col-12",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "office-info-item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "office-info-icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "info-icon",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fi flaticon-pin"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "office-info-text",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                children: "Location"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Espoo, Finland"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "section-title section-title2 text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Contact"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Leave a message"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "tp-contact-form-area",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ContactFrom, {})
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "tp-contact-map-section",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "tp-contact-map",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                        src: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d253751.222298856!2d24.34548807117329!3d60.20669195925645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfi!4v1694977115031!5m2!1sen!2sfi",
                        referrerpolicy: "no-referrer-when-downgrade"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_ContactSection = (ContactSection);


/***/ }),

/***/ 3:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Footer extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "footer-area text-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "footer-image",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    to: "/home",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "images/jsLogo.png",
                                        alt: ""
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "footer-sub",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-copyright"
                                        }),
                                        "Copyright ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: " 2023 Joonas Steng\xe5rd"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 3644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2217);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__);



class Hero extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            id: "home",
            className: "hero hero-slider-wrapper hero-style-1",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hero-slider",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "slide",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col col-md-10 col-sm-12 slide-caption",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "slide-subtitle",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: "Joonas Steng\xe5rd"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "slide-title",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                children: "Software Developer"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "hero-desc-text",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "Software development. Programming. Design.",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    "Web applications, websites & enterprise software."
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "social-links",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "overlay"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: "https://www.instagram.com/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-instagram"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: "www.linkedin.com/in/joonas-s-420b24266",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-linkedin"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "white_svg",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        x: "0px",
                        y: "0px",
                        viewBox: "0 186.5 1920 113.5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
                            points: "0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "
                        })
                    })
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 9280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
;// CONCATENATED MODULE: ./components/Header/index.js



class Header extends external_react_.Component {
    state = {
        isOpen: false
    };
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("header", {
            id: "header",
            className: "site-header header-style-1",
            children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "navigation navbar navbar-default",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container-fluid",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "navbar-header",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    type: "button",
                                    className: "open-btn",
                                    onClick: ()=>this.setState({
                                            isOpen: true
                                        }),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sr-only",
                                            children: "Toggle navigation"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon-bar"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon-bar"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon-bar"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    className: "navbar-brand",
                                    to: "home",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/jsLogo.png",
                                        alt: ""
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            id: "navbar",
                            className: this.state.isOpen ? "navbar-collapse navigation-holder active" : "navbar-collapse navigation-holder",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "close-navbar",
                                    onClick: ()=>this.setState({
                                            isOpen: false
                                        }),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-times",
                                        "aria-hidden": "true"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "close-navbar-2",
                                    onClick: ()=>this.setState({
                                            isOpen: false
                                        }),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-times",
                                        "aria-hidden": "true"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "nav navbar-nav",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "navbar-header",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                                className: "navbar-brand",
                                                to: "home",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "images/jsLogo.png",
                                                    alt: ""
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "home",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                                activeClass: "active",
                                                to: "home",
                                                spy: true,
                                                smooth: true,
                                                duration: 500,
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "about",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                                activeClass: "active",
                                                to: "about",
                                                spy: true,
                                                smooth: true,
                                                duration: 500,
                                                children: "About Me"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "service",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                                activeClass: "active",
                                                to: "service",
                                                spy: true,
                                                smooth: true,
                                                duration: 500,
                                                children: "Proficiency"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "protfolio",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                                activeClass: "active",
                                                to: "portfolio",
                                                spy: true,
                                                smooth: true,
                                                duration: 500,
                                                children: "Portfolio"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "testimonials",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                                activeClass: "active",
                                                to: "testimonial",
                                                spy: true,
                                                smooth: true,
                                                duration: 500,
                                                children: "Testimonials"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "contact",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                                activeClass: "active",
                                                to: "contact",
                                                spy: true,
                                                smooth: true,
                                                duration: 500,
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu-open-btn-holder",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "menu-open-btn",
                                onClick: ()=>this.setState({
                                        isOpen: true
                                    }),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                ]
                            })
                        })
                    ]
                })
            })
        });
    }
}
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/Navbar/index.js



function Navbar() {
    const [scroll, setScroll] = external_react_default().useState(0);
    const handleScroll = ()=>setScroll(document.documentElement.scrollTop);
    external_react_default().useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const className = scroll > 100 ? "fixed-navbar active" : "fixed-navbar";
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {})
    });
}


/***/ }),

/***/ 6603:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



class PricingPlan extends (/* unused pure expression or super */ null && (Component)) {
    render() {
        return /*#__PURE__*/ _jsxs("section", {
            className: "pricing-section section-padding",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "col col-xs-12",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "section-title text-center",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            children: "Our Pricing"
                                        }),
                                        /*#__PURE__*/ _jsx("h2", {
                                            children: "Pricing Table"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "col col-xs-12",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "pricing-grids",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "grid",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "pricing-header",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "circuler-price",
                                                            children: /*#__PURE__*/ _jsx("i", {
                                                                className: "fi flaticon-verified"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            children: "Basic"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "pricing-body",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("h2", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("sup", {
                                                                    children: "$"
                                                                }),
                                                                "30 ",
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    children: "month"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("ul", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("li", {
                                                                    children: "Web Design"
                                                                }),
                                                                /*#__PURE__*/ _jsx("li", {
                                                                    children: "Web Development"
                                                                }),
                                                                /*#__PURE__*/ _jsx("li", {
                                                                    children: "Responsive Design"
                                                                }),
                                                                /*#__PURE__*/ _jsx("li", {
                                                                    children: "24/Support"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx(Link, {
                                                            href: "/",
                                                            className: "template-btn",
                                                            children: "Order Now"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "grid",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "pricing-header",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "circuler-price",
                                                            children: /*#__PURE__*/ _jsx("i", {
                                                                className: "fi flaticon-paint-palette"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            children: "Standard"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "pricing-body",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("h2", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("sup", {
                                                                    children: "$"
                                                                }),
                                                                "45",
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    children: "month"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("ul", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("li", {
                                                                    children: "Web Design"
                                                                }),
                                                                /*#__PURE__*/ _jsx("li", {
                                                                    children: "Web Development"
                                                                }),
                                                                /*#__PURE__*/ _jsx("li", {
                                                                    children: "Responsive Design"
                                                                }),
                                                                /*#__PURE__*/ _jsx("li", {
                                                                    children: "24/Support"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx(Link, {
                                                            href: "/",
                                                            className: "template-btn",
                                                            children: "Order Now"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "grid",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "pricing-header",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "circuler-price",
                                                            children: /*#__PURE__*/ _jsx("i", {
                                                                className: "fi flaticon-operator"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            children: "Premium"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "pricing-body",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("h2", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("sup", {
                                                                    children: "$"
                                                                }),
                                                                "50 ",
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    children: "month"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("ul", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("li", {
                                                                    children: "Web Design"
                                                                }),
                                                                /*#__PURE__*/ _jsx("li", {
                                                                    children: "Web Development"
                                                                }),
                                                                /*#__PURE__*/ _jsx("li", {
                                                                    children: "Responsive Design"
                                                                }),
                                                                /*#__PURE__*/ _jsx("li", {
                                                                    children: "24/Support"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsx(Link, {
                                                            href: "/",
                                                            className: "template-btn",
                                                            children: "Order Now"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "white_svg svg_white",
                    children: /*#__PURE__*/ _jsx("svg", {
                        x: "0px",
                        y: "0px",
                        viewBox: "0 186.5 1920 113.5",
                        children: /*#__PURE__*/ _jsx("polygon", {
                            points: "0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "
                        })
                    })
                })
            ]
        });
    }
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (PricingPlan)));


/***/ }),

/***/ 1274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2217);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__);



const Scrollbar = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-lg-12",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "header-menu",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "smothscroll",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "#home",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi flaticon-up-arrow"
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scrollbar);


/***/ }),

/***/ 826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Service)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/ServiceSingle/index.js



const ServiceSingle = ({ maxWidth , open , onClose , title , doc , image1 , image2 , image3  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Dialog, {
            open: open,
            onClose: onClose,
            className: "modalWrapper quickview-dialog",
            maxWidth: maxWidth,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                className: "modalBody modal-body",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "modal-close",
                        onClick: onClose,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa fa-close"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "tp-minimals-wrap",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "minimals-img",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: image1,
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "service-details-section",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: doc
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_ServiceSingle = (ServiceSingle);

;// CONCATENATED MODULE: ./components/Service/index.js




const Service = ()=>{
    const [open, setOpen] = external_react_default().useState(false);
    function handleClose() {
        setOpen(false);
    }
    const [state, setState] = (0,external_react_.useState)({});
    const handleClickOpen = (item)=>{
        setOpen(true);
        setState(item);
    };
    const service = [
        {
            Id: "1",
            sIcon: "fi flaticon-web-design",
            heading: "Frontend development",
            Simg1: "images/service-single/frontend/hpkuvaportfolioo.png",
            Simg2: "images/service-single/frontend/img-2.jpg",
            Simg3: "images/service-single/frontend/img-3.jpg",
            doc: "I am proficient in developing frontend solutions for dynamic web apps and other software projects. " + "My frontend skill set includes technologies such as Javascript, ReactJS, NextJS and TypeScript. " + "I am experienced in creating detailed CSS code by hand or working with CSS frameworks such as Tailwind and Bootstrap.",
            des: "Proficient in frontend technologies such as ReactJS, NextJS, TypeScript, CSS & Tailwind."
        },
        {
            Id: "2",
            sIcon: "fi flaticon-laptop",
            heading: "Backend development",
            Simg1: "images/service-single/backend/backendkuvaport.png",
            Simg2: "images/service-single/backend/img-2.jpg",
            Simg3: "images/service-single/backend/img-3.jpg",
            doc: "As a programming enthusiast I enjoy writing and structuring backend code with languages such as Java, Spring, Node & Express. " + "I have also completed courses in other backend languages and technologies, such as C# and Python. As a hobby, I have developed large scale projects for Skyrim using the programming language Papyrus. " + "My education has given me proficiency in working with databases and related technologies, including database design, querying and optimization. These technologies include MongoDB and MySQL. ",
            des: "Proficient in backend technologies such as NodeJS, Express, Java, and working with databases."
        },
        {
            Id: "3",
            sIcon: "fi flaticon-paint-palette",
            heading: "Software Design",
            Simg1: "images/service-single/design/figmakuvaportfolioo.png",
            Simg2: "images/service-single/design/img-2.jpg",
            Simg3: "images/service-single/design/img-3.jpg",
            doc: "My education has given me a strong background in professional software & UX design. My thesis topic was on UX design for a large Finnish workforce company. " + "I am highly familiar with modern design philosophies such as Nielsen's Heuristics and designing accessible software. I'm also experienced in creating prototypes and collaborating in tools such as Figma and Miro and creating graphical elements for aesthetic web design using Photoshop and other relevant tools.",
            des: "Proficient in Software & UX design, designing graphical elements and prototyping."
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "service",
        className: "service-area section-padding",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "borderd"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-l2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "section-title section-title2 text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Proficiency"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "My Skill set"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: service.map((serv, srv)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-4 col-lg-6 col-md-6 col-sm-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "service-section",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "services-wrapper",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "services-icon-wrapper",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "service-dot",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "dots"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "dots2"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: serv.sIcon
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "service-content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: serv.heading
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: serv.des
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                        className: "btn",
                                                        onClick: ()=>handleClickOpen(serv),
                                                        children: "Read More"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }, srv))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "white_svg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    x: "0px",
                    y: "0px",
                    viewBox: "0 186.5 1920 113.5",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                        points: "0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_ServiceSingle, {
                open: open,
                onClose: handleClose,
                title: state.heading,
                doc: state.doc,
                image1: state.Simg1,
                image2: state.Simg2,
                image3: state.Simg3
            })
        ]
    });
};
/* harmony default export */ const components_Service = (Service);


/***/ }),

/***/ 7228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1598);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);





class Testimonial extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            arrows: true,
            fade: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: 30,
            focusOnSelect: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "testimonial-area",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "testimonial-active",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "testimonial-wrap",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                                ...settings,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "testimonial-item",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "testimonial-content",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "testimonial-content",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            children: "Kristina Henriksson"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Project Coordinator SAFE / MOTION"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Joonas has proved to be an invaluable member of the project teams. He has worked with high motivation, diligence, and preciseness. Furthermore, he works with a proactive approach, and the quality of his work is professional. Joonas has a pleasant character, and he is highly reliable."
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "--"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "As Joonas’s supervisor, I can highly recommend him for any similar kinds of tasks."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "testimonial-icon",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi flaticon-right-quote"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "testimonial-item",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "testimonial-content",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "testimonial-content",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            children: "Tuuli Pitkonen"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Helmiprinsessa, Owner"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Joonas worked with us to create our website and I'm very pleased with the results."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "testimonial-icon",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi flaticon-right-quote"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "white_svg",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        x: "0px",
                        y: "0px",
                        viewBox: "0 186.5 1920 113.5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
                            points: "0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "
                        })
                    })
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial);


/***/ }),

/***/ 4891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/Counter/index.js


const Counter_Counter = (props)=>{
    const counter = [
        {
            heading: "Avarage Rating",
            data: "95%"
        },
        {
            heading: "Project Complete",
            data: "500 +"
        },
        {
            heading: "Client Satisfaction",
            data: "90%"
        },
        {
            heading: "Award Winning",
            data: "25 +"
        }
    ];
    return /*#__PURE__*/ _jsx("div", {
        className: "tp-counter-area",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container",
            children: /*#__PURE__*/ _jsx("div", {
                className: "row justify-content-center",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "col-lg-12",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "tp-counter-grids",
                        children: counter.map((count, cnt)=>/*#__PURE__*/ _jsxs("div", {
                                className: "grid",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        children: /*#__PURE__*/ _jsx("h2", {
                                            children: count.data
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        children: count.heading
                                    })
                                ]
                            }, cnt))
                    })
                })
            })
        })
    });
};
/* harmony default export */ const components_Counter = ((/* unused pure expression or super */ null && (Counter_Counter)));

;// CONCATENATED MODULE: ./components/AboutModal/index.js




const DefaultModal = ({ maxWidth , button , buttonClass  })=>{
    const [open, setOpen] = React.useState(false);
    function handleClickOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }
    return /*#__PURE__*/ _jsxs(Fragment, {
        children: [
            /*#__PURE__*/ _jsxs(Button, {
                className: `btn ${buttonClass}`,
                onClick: handleClickOpen,
                children: [
                    button,
                    "More About"
                ]
            }),
            /*#__PURE__*/ _jsx(Dialog, {
                open: open,
                onClose: handleClose,
                className: "modalWrapper quickview-dialog",
                maxWidth: maxWidth,
                children: /*#__PURE__*/ _jsxs(Grid, {
                    className: "modalBody modal-body",
                    children: [
                        /*#__PURE__*/ _jsx("button", {
                            className: "modal-close",
                            onClick: handleClose,
                            children: /*#__PURE__*/ _jsx("i", {
                                className: "fa fa-close"
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "skill-area section-padding",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "container",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "section-title text-center",
                                            children: /*#__PURE__*/ _jsx("h2", {
                                                children: "My skills"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "col-md-3 col-sm-6",
                                                children: /*#__PURE__*/ _jsxs("div", {
                                                    className: "progress yellow",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "progress-left",
                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                className: "progress-bar"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "progress-right",
                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                className: "progress-bar"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "progress-value",
                                                            children: [
                                                                "90% ",
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    children: "Product Design"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "col-md-3 col-sm-6",
                                                children: /*#__PURE__*/ _jsxs("div", {
                                                    className: "progress blue",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "progress-left",
                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                className: "progress-bar"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "progress-right",
                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                className: "progress-bar"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "progress-value",
                                                            children: [
                                                                "80% ",
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    children: "Web Design"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "col-md-3 col-sm-6",
                                                children: /*#__PURE__*/ _jsxs("div", {
                                                    className: "progress pink",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "progress-left",
                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                className: "progress-bar"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "progress-right",
                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                className: "progress-bar"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "progress-value",
                                                            children: [
                                                                "65% ",
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    children: "App Design"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "col-md-3 col-sm-6",
                                                children: /*#__PURE__*/ _jsxs("div", {
                                                    className: "progress green",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "progress-left",
                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                className: "progress-bar"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsx("span", {
                                                            className: "progress-right",
                                                            children: /*#__PURE__*/ _jsx("span", {
                                                                className: "progress-bar"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "progress-value",
                                                            children: [
                                                                "47% ",
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    children: "Visual Design"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx(Counter, {})
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const AboutModal = ((/* unused pure expression or super */ null && (DefaultModal)));

;// CONCATENATED MODULE: ./components/about/index.js



const About = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "about",
        className: "tp-about-section",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-5 col-md-12 col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "tp-about-wrap",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "tp-about-img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/aboutkuva.png",
                                        alt: ""
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-7 col-md-12 col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "tp-about-text",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "tp-about-icon-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "My passion is programming"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "While I may be a recent graduate, I have been proactive in gaining professional experience in the field. I have done Full Stack software development work for EU projects & Finnish companies."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "My educational background has given me a solid foundation in software development, project management and business acumen. I'm eager to learn more and develop myself as a professional software developer."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "If you are looking for a highly motivated software developer, hopefully I can be a valuable asset to your company or project."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "signeture",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "-Joonas"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "white_svg svg_white",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    x: "0px",
                    y: "0px",
                    viewBox: "0 186.5 1920 113.5",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                        points: "0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const about = (About);


/***/ }),

/***/ 4434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ portfolio)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/portfolioSingle/index.js



const PortfolioSingle = ({ maxWidth , open , onClose , title , doc , doc2 , doc3 , image1 , image2 , image3 , authorName , videosId , value , date , role  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Dialog, {
            open: open,
            onClose: onClose,
            className: "modalWrapper quickview-dialog",
            maxWidth: maxWidth,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                className: "modalBody modal-body",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "modal-close",
                        onClick: onClose,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa fa-close"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "tp-project-details-area",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-12",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "tp-minimal-wrap",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "tp-minimal-img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: image1,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: title
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "tp-project-details-list",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "co-l-lg-4 col-md-4 col-sm-6 col-12",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "tp-project-details-text",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Client Name"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                children: authorName
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "co-l-lg-4 col-md-4 col-sm-6 col-12",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "tp-project-details-text-3",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Role"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                children: role
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "co-l-lg-4 col-md-4 col-sm-6 col-12",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "tp-project-details-text",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Date"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                children: date
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "tp-p-details-section",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: doc
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: doc2
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: doc3
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-md-6 col-sm-6 col-12",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "tp-p-details-img",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: image2,
                                                                alt: ""
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-md-6 col-sm-6 col-12",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "tp-p-details-img",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: image3,
                                                                alt: ""
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const portfolioSingle = (PortfolioSingle);

;// CONCATENATED MODULE: ./components/portfolio/index.js




const Portfolio = ()=>{
    const [open, setOpen] = external_react_default().useState(false);
    function handleClose() {
        setOpen(false);
    }
    const [state, setState] = (0,external_react_.useState)({});
    const handleClickOpen = (item)=>{
        setOpen(true);
        setState(item);
    };
    const portfolio = [
        {
            Id: "1",
            heading: "SAFE Study Module",
            subHeading: "EU SAFE Online course",
            authorName: "Project SAFE (EUSAFE)",
            role: "Programming & Design",
            date: "Spring 2023",
            videosId: "LUSa3yRTB9A",
            pImg1: "images/portfolio/proj1/studymoduleportfkuva.png",
            pImg2: "images/portfolio/proj1/seniortaskport.png",
            pImg3: "images/portfolio/proj1/aspquizport.png",
            vedio: "",
            doc: "SAFE Study Module is a dynamic web application consisting of 8 pages, a navigation system tied to a graphical timeline element, interactive quizzes and study materials in the form of embedded videos and texts.",
            doc2: "I received instructions for the required technical functionality and features of the web app by working with the project managers of SAFE. Then I proceeded to build a functional draft of the design. After my draft was approved, I proceeded to design and build the product using MERN stack. The study materials were provided by professors of European universities working with Project SAFE",
            doc3: "The Study Module is used during five EU funded ISP (Intensive Study Period) events in 2023 and 2024. These ISPs have students participating from universities of Finland, Germany, Poland, Slovenia and Spain."
        },
        {
            Id: "2",
            heading: "SAFE Travel Game",
            subHeading: "EU SAFE Web app",
            authorName: "Project SAFE (EUSAFE)",
            role: "Programming",
            date: "Summer 2023",
            videosId: "r_hYR53r61M",
            pImg1: "images/portfolio/proj2/tgcropport2.png",
            pImg2: "images/portfolio/proj2/mainmenu2cb.png",
            pImg3: "images/portfolio/proj2/tg2.png",
            vedio: "",
            doc: "SAFE Travel Game is a dynamic web application, consisting of 12 pages. It includes multiple separate scoring systems for the user tied to their progress in the web app, dynamically opening/blocking paths and other web elements for the user, as well as storing their progress in the game between connections.",
            doc2: "The goal of the project was to create a simple-to-use and a gamified resource for learning skills required for having a safe travel inside European Union. The text contents and overall structure of the web app were provided by other members of Project SAFE. I was responsible for the programming and technical implementation of the software, using MERN stack.",
            doc3: "Users of the web app can create a custom passport, select an avatar, collect points and souvenirs, read learning materials and answer quizzes, track their progress, advance through three distinct phases and recieve a customized rating for their performance in the end."
        },
        {
            Id: "3",
            heading: "Helmiprinsessa",
            subHeading: "Jewelry & Design website",
            authorName: "Helmiprinsessa",
            role: "Programming & Design",
            date: "Summer 2023",
            videosId: "LUSa3yRTB9A",
            pImg1: "images/portfolio/proj3/helmiportcrop.png",
            pImg2: "images/portfolio/proj3/helmpieni1.png",
            pImg3: "images/portfolio/proj3/helmpieni2.png",
            vedio: "",
            doc: "Helmiprinsessa is a Finnish jewelry company. I created their website using NextJS, ReactJS and CSS/Tailwind.",
            doc2: "",
            doc3: ""
        },
        {
            Id: "4",
            heading: "MOTION Website",
            subHeading: "EU Tourismotion",
            authorName: "Project MOTION",
            role: "Development assistant",
            date: "Spring 2023",
            videosId: "r_hYR53r61M",
            pImg1: "images/portfolio/proj4/motionport.png",
            pImg2: "images/portfolio/proj4/mopieni1.png",
            pImg3: "images/portfolio/proj4/mopieni2.png",
            vedio: "",
            doc: "When working with project MOTION I gained valuable real-life work experience in maintaining web software, including participating in meetings and collaborating with people without an IT background in software projects.",
            doc2: "",
            doc3: ""
        },
        {
            Id: "5",
            heading: "Portfolio",
            subHeading: "My portfolio website",
            authorName: "-",
            role: "Programming & Design",
            date: "2023",
            videosId: "LUSa3yRTB9A",
            pImg1: "images/portfolio/proj5/portfkuvacrop.png",
            pImg2: "images/portfolio/proj5/portfpieni1.png",
            pImg3: "images/portfolio/proj5/portfpieni2.png",
            vedio: "",
            doc: "My portfolio website is made using NextJS, ReactJS, CSS & Tailwind and Photoshop.",
            doc2: "",
            doc3: ""
        },
        {
            Id: "6",
            heading: "Hobby projects",
            subHeading: "Programming projects",
            authorName: "-",
            role: "-",
            date: "2017->",
            videosId: "r_hYR53r61M",
            pImg1: "images/portfolio/proj6/hobbyprojects.png",
            pImg2: "images/portfolio/proj6/exbfmport2.png",
            pImg3: "images/portfolio/proj6/portfkuva2exbfm.png",
            vedio: "",
            doc: "I have worked on many types of projects on my own time while completing my degree to practice and to learn new skills in the field.",
            doc2: "Skyrim mods that I have programmed have an userbase of 10,000+. I develop Skyrim mods using Papyrus, which is an object-oriented programming language similar to Java.",
            doc3: "ExBFM started as a Java project with a Java Swing GUI, later converted into a web app with a Java Spring backend and React frontend. It is a football simulator type of game with many kinds of AI features programmed by me from scratch, ie for commentary and matches, player market and attributes, satisfaction, training, messages, simulation etc."
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "tp-protfolio-area section-padding",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "section-title text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Portfolio"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "My projects"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "tp-protfolio-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row",
                                    children: portfolio.map((port, prt)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-4 col-md-6 col-sm-12 custom-grid",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "tp-protfolio-single",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "tp-protfolio-img",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: port.pImg1,
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "tp-protfolio-text",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                    children: port.heading
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: port.subHeading
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    onClick: ()=>handleClickOpen(port),
                                                                    children: "View Work"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }, prt))
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(portfolioSingle, {
                open: open,
                onClose: handleClose,
                title: state.heading,
                doc: state.doc,
                doc2: state.doc2,
                doc3: state.doc3,
                image1: state.pImg1,
                image2: state.pImg2,
                image3: state.pImg3,
                authorName: state.authorName,
                videosId: state.videosId,
                value: state.value,
                date: state.date,
                role: state.role
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "white_svg svg_white",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    x: "0px",
                    y: "0px",
                    viewBox: "0 186.5 1920 113.5",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                        points: "0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const portfolio = (Portfolio);


/***/ }),

/***/ 9090:
/***/ (() => {



/***/ }),

/***/ 1598:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ })

};
;