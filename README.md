# React JS practice
Тут я закрепляю свои навыки полученные после прохождения курса по React

Commit 1 (создание и навигация react-router) 
--------
0.1. Создаем проект по React (гуглим create react app)
`npx create-react-app ./`

0.2. Добавляем Redux.
`npm install redux`

0.3. Добавляем React-Redux
`npm install react-redux`

1.4. Создадим какой нибудь функционал для работы с навигацией

1.4.1 Делаем компоненту nav. Она для навигации. Делаем ее функциональной.

1.4.2 Создаем компоненту для контента MainComponent.jsx. Делаем ее ... классовой наверное. `class MainComponent extends React.Component`

1.4.3 Создаем Page1.jsx (и 2 и 3) что бы было куда переключатся. Делаем ее классовой.

1.5. Добавляем библиотеку React-Router.
`npm install react-router-dom`

1.5.1 Используем NavLink в Navigation.jsx. С помощью этого мы меняем адрес в барузере. 

1.5.2 Обязательно обворачиваем в `BrowserRouter` (есть альтернатива, но она устаревшая)
```
<NavLink to="">Main</NavLink>
или если ничего не надо
<Link to="">Main</Link>

<BrowserRouter>
    <Navigation/>
</BrowserRouter>
```
1.5.3 Для переключений страниц используем `Route`, так же все должно быть обернуто в `BrowserRouter`. `exact` означает точное совпадение.
```
<Route exact path='/' render={() => <MainComponent/>}/>
<Route path='/page1' render={() => <Page1/>}/>
```
1.5.3.1 Есть другой варинат записи через `<Switch>`
```
<Switch>
    <Route exact path='/'> <MainComponent/> </Route>
    <Route path='/page1'><Page1/></Route>
    <Route path='/page2'><Page2/></Route>
    <Route path='/page3'><Page3/></Route>
</Switch>
```

Commit 2. Добавляем глобальный стор, стейт, редюсер в редакс. Так же создаем экшен, экшен криэйтер,  
---------------------

Обалденная статья/перевод по redux https://rajdee.gitbooks.io/redux-in-russian/content/docs/basics/ (рус.)

0. Добавляем Messages.jsx и роутинг для нее. Будем все отображать на ней.
1. Добавляем messages-reducer.js
1.1 Создаем пустой редюсер.
```
const MessagesReducer = (state, action) =>{
    return state;
}
```
1.2 Добавляем в редисер какие то начальные значения
2. Добавляем redux-store.js
2.1 Соберем все редюсеры в одно место (тут только один... пока)
```
const redusers = combineReducers({
    messagesReducer: MessagesReducer
});
```
2.2 Создадим стор и поместим туда наши редедюсеры.
```
let store = createStore(redusers);
```

3. 
3.1 В Messages.jsx добавляем функцию connect() из react-redux
```
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
```
3.2 в первый параметр mapStateToProps, передаем колбэк функцию, которая будет возвращать обьект
```
const mapStateToProps = (state) =>{
    messages: {
            1: 'Hello world'
    }
}
```

3.3 Что бы там появился store обворачиваем это все компонентой <Provider store={store}>.
3.4 Концепцию "Презентационные компоненты и компоненты-контейнеры" пока не используем, все в одном.

4. Начинаем использовать action и action create
4.1 создаем в редюсере функцию action create. Функция возвращает экшен. 
```
export const addMessage = () => { //функция, это экшен криэйтор
    return { //а вот тут уже сам эшен
        type: ADD_MESSAGE
    }
}
```

4.2 Встриваем ее в connect. Теперь она доступна в пропсах компоненты. Там же доступен диспатч.
```
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessage())}
        //addMessage: () => {dispatch({type: 'ADD_MESSAGE'})} //это работает! не путать экшен и функцию экшен криэтор
    }
}
```

4.3 Диспатчим ее. Диспачится не сама функция, а только сам экшен.

Commit 3
----------
<<<<<<< HEAD
1. Дописываем редюсер. Теперь новые сообщения появляются.
1.1. Добавил `let ref = React.createRef();` и переделал отправку

`<button onClick={() => props.addMessage(ref.current.value)}>Send</button>`
=======
Дописываем редюсер. Теперь новые сообщения появляются.
>>>>>>> a2d31c5b1fadc9fed387d89891a4ada27b636ee6


План...

2. нужен локальный стейт
2.1 На странице Messages может быть?

3. Redux-thunk



Справочник.
-----------


`npx create-react-app ./` создание проекта. Компоненты/функции `Suspense, React.Component, React.PureComponent`, `React.createRef()`


`npm install redux` установка редакс. Редюсер это `(previousState, action) => newState`, `combineReducers()`, `createStore(redusers)`

`npm install react-redux` установка реакт-редакс. Функции `connect(mapStateToProps, mapDispatchToProps)(Component)`, `<Provider store={store}>`
, action и action create, dispatch()

`npm install react-router-dom` методы `BrowserRouter, NavLink, Link, Route, Switch`