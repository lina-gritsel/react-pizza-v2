import React from 'react'
import { PIZZAS } from './constants'
import PizzaBlock from '../PizzaBlock'

const PizzaList = () => {
  return (
    <>
      {PIZZAS.map(({ title, price }, index) => {
        return <PizzaBlock key={index} title={title} price={price} />
      })}
    </>
  )
}

export default PizzaList
