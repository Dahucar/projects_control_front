import React, { useState } from 'react'
import { ProjectComponent } from './components/ProjectComponent'
import { initialState } from './helpers/initialState';
import { ProjectContex } from './projectContext/ProjectContex'

export const AppComponent = () => {
  const [projectState, setProjectState] = useState(initialState);
  return (
    <ProjectContex.Provider value={{ projectState, setProjectState }}>
      <ProjectComponent/>
    </ProjectContex.Provider>
  )
}
