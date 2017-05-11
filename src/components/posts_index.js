import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsIndex extends Component{
    componentDidMount(){
        this.props.fetchPosts();
    }

    //recorro todos los post con el map de lodash y muestro cada item..
    renderPosts(){
        _.map(this.props.posts, post => {
            <li className='list-group-item' key={post.id}>
                {post.title}
            </li>
            
        }); 
    }

    render(){
        
        //console.log(this.props.posts);

        //al renderizar el componente devuelvo una lista de posts
        return (
            <div>
                <div className='text-xs-right'>
                    <Link className='btn btn-primary' to='/posts/new'>
                        Nuevo Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className='list-group'>
                    {this.renderPosts()} 
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts}) (PostsIndex);