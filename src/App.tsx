import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {

  const button1Foo = (subscriber: string, age: number)=> {
    console.log(subscriber, age)
  }

  const button2Foo = (subscriber: string)=> {
    console.log(subscriber)
  }

  const stupidButton = ()=> {
    console.log("Im stupid button")
  }

  return (
    <div className={"App"}>
      <Button name={"MyYouTubeChannel-1"} callBack={()=> button1Foo("Im Vasya", 21)}/>
      <Button name={"MyYouTubeChannel-2"} callBack={()=> button2Foo("Im Ivan")}/>
      <Button name={"Stupid button"} callBack={stupidButton}/>
    </div>
  )
}


{/*function App() {*/
}

{/*  const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {*/
}
{/*    console.log("Hello Im VASYA!")*/
}
{/*  }*/
}

{/*  const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {*/
}
{/*    console.log("Hello Im IVAN!")*/
}
{/*  }*/
}

{/*  const onClickHandler = (name: string) => {*/
}
{/*    console.log(name)*/
}
{/*  }*/
}

{/*  const foo1 = () => {console.log(100200)}*/
}
{/*  const foo2 = (number: number) => {console.log(number)}*/
}

{/*  return (*/
}
{/*    <div className={"App"}>*/
}
{/*      <button onClick={myFirstSubscriber}>MyYouTubeChannel</button>*/
}
{/*      <button onClick={(event) => {console.log("Hello")}}>MyYouTubeChannel-1</button>*/
}
{/*      <button onClick={() => onClickHandler('VASYA!')}>MyYouTubeChannel-1</button>*/
}
{/*      <button onClick={() => onClickHandler('IVAN!')}>MyYouTubeChannel-2</button>*/
}

{/*      <button onClick={foo1}>1</button>*/
}
{/*      <button onClick={() => foo2(100200)}>2</button>*/
}
{/*    </div>*/
}
{/*  )*/
}
{/*}*/
}

export default App;
