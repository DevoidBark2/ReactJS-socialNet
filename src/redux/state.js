import { rerenderEntireTree } from "../render";

let state = {
    MainPage: {
        PostData: [
            { message: 'Hello', like: '10' },
            { message: 'How are you?', like: '9' },
            { message: 'Good', like: '9' },
            { message: 'And you?', like: '55' }
        ],
        newPostText: 'HAHAHAHA'

    },
    DialogsPage: {
        NameData: [
            { name: 'Ivan' },
            { name: 'Dmitry' },
            { name: 'Anton' },
            { name: 'Dany' },
            { name: 'Sveta' },
            { name: 'Oleg' }
        ],
        MessageData: [
            { message: 'Hello,how are you?' },
            { message: 'Good' },
            { message: 'And you?' },
            { message: 'Bad' },
            { message: 'Bad' },
            { message: 'Bad' },
            { message: 'Bad' },
            { message: 'Bad' },
            { message: 'Bad' },
            { message: 'Bad' },
            { message: 'Bad' },
            { message: 'Bad' },
            { message: 'Bad' }
            
        ],
    },
    FriendsPage: {
        FriendName: [
            { name: 'Григорий' },
            { name: 'Павел' },
            { name: 'Иван' },
            { name: 'Дмитрий' },
            { name: 'Александр' },
            { name: 'Владимир' },
            { name: 'Владимир' },
            { name: 'Владимир' },
            { name: 'Владимир' },
            { name: 'Владимир' }
        ]
    }
}
window.state = state;
export let AddPost = () => {
    let newPost = {
        message: state.MainPage.newPostText,
        like: '0'
    };
    state.MainPage.PostData.push(newPost);
    state.MainPage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    state.MainPage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;
