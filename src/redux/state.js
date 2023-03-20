let rerenderEntireTree = () => {
  console.log("state was changed");
}

let state = {
  profilePage: {
    postData: [
      {
        id: 1,
        message:
          "The actress stands out in this respect because she has a genetic condition known as brachydactyly.",
        likesCount: 10,
        dislikesCount: 0,
        url: "https://avatars.mds.yandex.net/i?id=ee68be0dbf22c97fe41c893d0870913acd8857ab-7543946-images-thumbs&n=13",
      },
      {
        id: 2,
        message: "Не столь однозначен портал «Грамота.ру»",
        likesCount: 1,
        dislikesCount: 0,
        url: "https://avatars.mds.yandex.net/i?id=5b0c24ff8077203da244b8b5a6a2d08a5c5dc20c-7777855-images-thumbs&n=13",
      },
      {
        id: 3,
        message: "Викисловарь однозначно говорит о том",
        likesCount: 0,
        dislikesCount: 12,
        url: "https://avatars.mds.yandex.net/i?id=f5adca194db9a5f486a46fd2225bd859994e86b4-8496994-images-thumbs&n=13",
      },
      {
        id: 4,
        message:
          "При склонении или во множественном числе вариативное ударение: ставьте куда хотите — не ошибетесь.",
        likesCount: 0,
        dislikesCount: 0,
        url: "https://avatars.mds.yandex.net/i?id=5a1e46e91cea6c36441d0cbfb6792e935b1e9f68-8496275-images-thumbs&n=13",
      },
      {
        id: 5,
        message: "The most-searched feet of celebrities on the internet",
        likesCount: 0,
        dislikesCount: 0,
        url: "https://avatars.mds.yandex.net/i?id=dcab909479e375b7215cbd067fc8641f64f98a59-4229717-images-thumbs&n=13",
      },
    ],
    newPostText:''
  },
  messagesPage: {
    messages: [
      { id: 1, message: "да?" },
      { id: 2, message: "а надо ли?" },
      { id: 3, message: "конечно, он по-другому и не стал бы" },
      { id: 4, message: "Завтра наверное давай" },
      { id: 5, message: "разумеется да" },
    ],
    dialogs: [
      {
        id: 1,
        name: "Evgeny",
        url: "https://avatars.mds.yandex.net/i?id=dcab909479e375b7215cbd067fc8641f64f98a59-4229717-images-thumbs&n=13",
      },
      {
        id: 2,
        name: "Dimych",
        url: "https://avatars.mds.yandex.net/i?id=5b0c24ff8077203da244b8b5a6a2d08a5c5dc20c-7777855-images-thumbs&n=13",
      },
      {
        id: 3,
        name: "Sveta",
        url: "https://avatars.mds.yandex.net/i?id=5a1e46e91cea6c36441d0cbfb6792e935b1e9f68-8496275-images-thumbs&n=13",
      },
      {
        id: 4,
        name: "Rimma",
        url: "https://avatars.mds.yandex.net/i?id=f5adca194db9a5f486a46fd2225bd859994e86b4-8496994-images-thumbs&n=13",
      },
      {
        id: 5,
        name: "Lika",
        url: "https://avatars.mds.yandex.net/i?id=ee68be0dbf22c97fe41c893d0870913acd8857ab-7543946-images-thumbs&n=13",
      },
    ],
  },
  friendsPage:{
    friends: [
        {
          id: 1,
          name: "Evgeny",
          lastName:"Verchenko",
          url: "https://avatars.mds.yandex.net/i?id=dcab909479e375b7215cbd067fc8641f64f98a59-4229717-images-thumbs&n=13",
        },
        {
          id: 2,
          name: "Dimych",
          lastName:"Drobov",
          url: "https://avatars.mds.yandex.net/i?id=5b0c24ff8077203da244b8b5a6a2d08a5c5dc20c-7777855-images-thumbs&n=13",
        },
        {
          id: 3,
          name: "Sveta",
          lastName:"Linnikova",
          url: "https://yt3.ggpht.com/ytc/AMLnZu8AY_ZcIXnQi2PuG38hP1glkGgk9o9qcbwU0FClFA=s900-c-k-c0x00ffffff-no-rj",
        },
        {
          id: 4,
          name: "Rimma",
          lastName:"Borchenko",
          url: "https://avatars.mds.yandex.net/i?id=f5adca194db9a5f486a46fd2225bd859994e86b4-8496994-images-thumbs&n=13",
        },
        {
          id: 5,
          name: "Lika",
          lastName:"Chernova",
          url: "https://avatars.mds.yandex.net/i?id=ee68be0dbf22c97fe41c893d0870913acd8857ab-7543946-images-thumbs&n=13",
        },
      ],

  }
};
 window.state = state;

export const addPost = () =>{
  let newPost = {
    id:6,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree();
}
export const updateNewPostText = (newText) =>{
  state.profilePage.newPostText= newText;
  rerenderEntireTree()
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}



export default state;
