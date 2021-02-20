import React, { Component } from 'react';
import firebase from '../../firebase';
import './conteudo.css';

class Conteudo extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        firebase.app.ref('posts').once('value', (snapshot) => {
            let state = this.state;
            state.posts = [];
            snapshot.forEach((childItem) => {
                state.posts.push({
                    key: childItem.key,
                    titulo: childItem.val().titulo,
                    descricao: childItem.val().descricao,
                    autor: childItem.val().autor,
                    image: childItem.val().image
                })
            })
            state.posts.reverse();
            this.setState({ state });
        })
    }

    render() {
        return (
            <section className="container p-2" id="conteudo" >
                <div className="tituloConteudo"><h1>ARTIGOS, NOTÍCIAS E FATOS RELEVANTES</h1></div>
                <div className="listConteudo">
                    <ui className="list-unstyled">
                        {this.state.posts.map((post) => {
                            return (
                                <li className="media pt-2" key={post.key}>
                                    <img src={post.image} id="imgPost" className="mr-3" alt="Capa do Post" />
                                    <div className="media-body">
                                        <h5 id="titulo" className="mt-0 mb-1">{post.titulo}</h5>
                                        <span id="autor">Autor: {post.autor}</span>
                                        <p id="descricao">{post.descricao}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ui>
                </div>
            </section>
        );
    }
}

export default Conteudo;
