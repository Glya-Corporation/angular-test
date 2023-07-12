import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private angularFirestore: AngularFirestore) {}

  getPosts() {
    return this.angularFirestore.collection('post').snapshotChanges();
  }

  getPostById(id) {
    return this.angularFirestore.collection('post').doc(id).valueChanges();
  }

  createPosts(post: Post) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('post')
        .add(post)
        .then(
          (res) => {
            console.log(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  updatePost(post: Post, id) {
    return this.angularFirestore.collection('post').doc(id).update({
      title: post.title,
      contenido: post.contenido,
      autor: post.autor,
    });
  }

  deletePost(post) {
    return this.angularFirestore.collection('post').doc(post.id).delete();
  }
}
