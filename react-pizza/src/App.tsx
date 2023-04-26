import Categories from './components/Categories'
import PizzaList from './components/PizzaList'
import Header from './components/Header'
import Sort from './components/Sort'

import './scss/app.scss'

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
