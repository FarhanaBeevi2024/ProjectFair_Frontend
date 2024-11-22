import React, {createContext, useState} from 'react'


export const addResponseContext = createContext({})

export const editResponseContext = createContext({})

//export const sample = createContext({})

// export const authTokenContext = createContext()

//children is the predefined prop used to share data between all component
function DataShare({children}) {

    const [addResponse, setAddResponse] = useState({})
    const[editResponse, setEditResponse]= useState({})
    // const [isAuthorized, setIsAuthorized] = useState(true)

  return (
    
        //to access value of the context
        <addResponseContext.Provider value={{addResponse,setAddResponse}}>

          <editResponseContext.Provider value={{editResponse,setEditResponse}}>

          {/* <authTokenContext.Provider value={{ isAuthorized, setIsAuthorized }}> */}

          {/* <sample> {children} </sample> */}

            {children}
{/* 
            </authTokenContext.Provider> */}

        </editResponseContext.Provider>
      
        </addResponseContext.Provider>
    
  )
}

export default DataShare
