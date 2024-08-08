import React from 'react'
// import { ArcherContainer, ArcherElement } from 'react-archer';
import './App.css'

// let leftColumn = ['A','B','C','D','E']

// let rightColumn = ['F','G','H','I','J']

const App = () => {
  return (
<> 

{/* <ArcherContainer strokeColor="red" lineStyle="curve" offset={0} startMarker>

  <div className='container'>
    <div className='column'>
       {leftColumn.map((lc,index)  => (<div key={index} className={'box'} >
        <ArcherElement
            id={lc}
            relations={[
              {
                targetId: 'A',
                targetAnchor: 'top',
                sourceAnchor: 'bottom',
                style: {
                  strokeDasharray: '5,5',
                },
              },
            ]}
          >
            <div>{lc}</div>
          </ArcherElement>
       </div>))}
    </div>



    <div className='column'>
       {rightColumn.map((rc,index)  => (<div key={index}  className={'box'} >
        <ArcherElement
            id={rc}
            relations={[
              {
                targetId: 'B',
                targetAnchor: 'top',
                sourceAnchor: 'bottom',
                style: {
                  strokeDasharray: '5,5',
                },
              },
            ]}
          >
            <div>{rc}</div>
          </ArcherElement>
       </div>))}
    </div>

  </div>
  
</ArcherContainer> */}






  {/* <ArcherContainer strokeColor="red" lineStyle="straight" offset={0} startMarker>
  
    <div className='container'>
      <div className='column'>
          
        {leftColumn.map((lc,index)  => (
          <ArcherElement 
            key={lc} 
            id={lc} 
            className={'box'} 
            relations={[
              {
                targetId: 'E',
                targetAnchor: 'top',
                sourceAnchor: 'bottom',
                style: {
                  strokeDasharray: '5,5',
                },
              },
            ]} >{lc}
              
            </ArcherElement>))}
      </div>

      <div className='column'>
          {leftColumn.map((lc,index)  => (<div key={index} id={'lc' } className={'box'} >{lc}</div>))}
      </div>

    </div>


    </ArcherContainer>    */}

</>
  )
}

export default App