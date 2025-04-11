import React from 'react'
import TitleAndSub from '../shared/titleAndSub'
import { Helmet } from 'react-helmet-async'
import AddProject from '../pages/developer/components/addProject'

const Develop = () => {
  return (
    <div>
      <Helmet>
        <title>
          Raisul Islam || developer mode
        </title>
      </Helmet>
      <TitleAndSub title={`Bennar`} subtitle={`change your bannar Image & dev photo`}></TitleAndSub>
      <TitleAndSub title={`Add project`} subtitle={`Add a new project as you done`}></TitleAndSub>
      <AddProject></AddProject>
    </div>
  )
}

export default Develop
