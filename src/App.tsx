import React, {MouseEventHandler} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./map/NewComponent";
import {findAllByDisplayValue} from "@testing-library/react";
import {Button} from "./components/Button";

function App() {
  const Button1Foo = (subscriber: string, age: number) => {
    console.log(subscriber, age)
  }

  const Button2Foo = (subscriber: string) => {
    console.log(subscriber)
  }

  const Button3Foo = () => {
    console.log('Im stupid button')
  }

  return (
    <div className="App">
      {/*<button>MyYouTubeChanel-1</button>*/}
      {/*<button>MyYouTubeChanel-2</button>*/}
      <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Im Vasya', 21)}/>
      <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('Im Ivan')}/>
      <Button name={'Stupid Button'} callBack={Button3Foo}/>
    </div>
  )
}

export default App;





// function App() {
  // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //   console.log('Hello Im Vasya')
  // }
  //
  // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //   console.log('Hello Im Ivan')
  // }

//   const onClickHandler = (name: string) => {
//     console.log(`Hello I'm ${name}`)
//   }
//
//
//   return (
//     <div className="App">
//       {/*<button onClick={(event ) => {console.log('Hello!')}}>MyYouTubeChanel-1</button>*/}
//       <button onClick={(event ) => onClickHandler('Vasya')}>MyYouTubeChanel-1</button>
//       <button onClick={(event ) => onClickHandler('Ivan')}>MyYouTubeChanel-2</button>
//     </div>
//   )
// }

// export default App;






// function App() {
  // const students = [
  //   {id: 1, name: 'James', age: 8},
  //   {id: 2, name: 'Robert', age: 18},
  //   {id: 3, name: 'John', age: 28},
  //   {id: 4, name: 'Michael', age: 38},
  //   {id: 5, name: 'William', age: 48},
  //   {id: 6, name: 'David', age: 58},
  //   {id: 7, name: 'Richard', age: 68},
  //   {id: 8, name: 'Joseph', age: 78},
  //   {id: 9, name: 'Thomas', age: 88},
  //   {id: 10, name: 'Charles', age: 98},
  //   {id: 11, name: 'Cristopher', age: 108}
  // ]
  //
  // const topCars = [
  //   {manufacturer:'BMW', model:'m5cs'},
  //   {manufacturer:'Mercedes', model:'e63s'},
  //   {manufacturer:'Audi', model:'rs6'}
  // ]

  // return (
  //   <div className="App">
  //     {/*<Header titleForHeader={"New Header"}/>*/}
  //     {/*<Body titleForBody={"New Body"}/>*/}
  //     {/*<Footer titleForFooter={"New Footer"}/>*/}
  //     {/*<NewComponent students={students}/>*/}
  //
  //     <NewComponent cars={topCars}/>
  //   </div>
  // );
// }

// export default App;
