import React from 'react'
import Layout from '../components/Layout'
import myContext from '../context/myContext'
import { useContext } from 'react'
function Order() {
    const context = useContext(myContext)
    console.log(context)
    const {name, rollno} = context
  return (
    <Layout>
         Name - {name}
        Roll no - {rollno}
    </Layout>
  )
}

export default Order