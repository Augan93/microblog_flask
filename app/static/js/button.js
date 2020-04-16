'use strict';

class Post extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
            </div>
        );
    }
}

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            posts: []
        };
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:5000/blogs')
            .then(res => {
                console.log(res.data);
                this.setState({posts: res.data.posts})
            })
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        const posts = this.state.posts.map(post => {
            return <Post key={post.id}
                         title={post.title}
                         body={post.body}/>
        });

        return (
            <div>
                <button onClick={() => this.setState({liked: true})}>
                    Like
                </button>
                <hr/>
                {posts}
            </div>
        );
    }
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<Posts/>, domContainer);