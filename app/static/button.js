'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_React$Component) {
    _inherits(Post, _React$Component);

    function Post() {
        _classCallCheck(this, Post);

        return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));
    }

    _createClass(Post, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'p',
                    null,
                    this.props.body
                )
            );
        }
    }]);

    return Post;
}(React.Component);

var Posts = function (_React$Component2) {
    _inherits(Posts, _React$Component2);

    function Posts(props) {
        _classCallCheck(this, Posts);

        var _this2 = _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this, props));

        _this2.state = {
            liked: false,
            posts: []
        };
        return _this2;
    }

    _createClass(Posts, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            axios.get('http://127.0.0.1:5000/blogs').then(function (res) {
                console.log(res.data);
                _this3.setState({ posts: res.data.posts });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            if (this.state.liked) {
                return 'You liked this.';
            }

            var posts = this.state.posts.map(function (post) {
                return React.createElement(Post, { key: post.id,
                    title: post.title,
                    body: post.body });
            });

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this4.setState({ liked: true });
                        } },
                    'Like'
                ),
                React.createElement('hr', null),
                posts
            );
        }
    }]);

    return Posts;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Posts, null), domContainer);