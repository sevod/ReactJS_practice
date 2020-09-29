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






Справочник.
-----------

`npx create-react-app ./` создание проекта. Копоненты `Suspense, React.Component, React.PureComponent`

`npm install redux` установка редакс

`npm install react-redux` установка реакт-редакс

`npm install react-router-dom` методы `BrowserRouter, NavLink, Route, Switch`