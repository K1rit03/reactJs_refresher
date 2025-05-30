import { useState } from "react"
import MainHeader from "./components/MainHeader"
import PostList from "./components/PostList"


function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler(){
    setModalIsVisible(false);
}
  function showModalHandler(){
    setModalIsVisible(true);
  }


  return (

    <>
    <main>
      <MainHeader onCreatePost={showModalHandler}/>
      <PostList isPosting={modalIsVisible}
      onStopPosting={hideModalHandler}
      />
      
    </main>
    </>
    
  )
}

export default App
