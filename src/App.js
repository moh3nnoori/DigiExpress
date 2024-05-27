import DGXLogo from "./components/DGXLogo";
import DGXDropdown from "./components/DGXDropdown";
import DGXContainer from "./components/DGXContainer";
import "./App.css";
import "./fonts/font.css";
import {useEffect, useState} from 'react'
import listCars              from './mock/drop-items.json'

import defaultValue  from './mock/form-data.json'

const Image = ({src})=> <div>
  <img className="drop-down-logo" src={src} width={20} height={20}/>
</div>


function App() {

  let [data,setData] = useState();
  const [listCarUpdate,setListCarUpdate] = useState()

  const selectItem = (item) => {
    setData(item)
  };

  useEffect(()=>{
    const newList = listCars.map(listCarsItem=>
      ({
        ...listCarsItem,
        isDefault: listCarsItem.key === defaultValue.dropdown,
        renderComponent : ()=><Image src={listCarsItem.img}/>
      })
    )
    setListCarUpdate(newList)
  },[listCars,defaultValue])

  return (
    <div
      id="app"
      className="flex"
      style={{ backgroundImage: 'url("/assets/pixel-arts/pixel-wall.png")' }}
    >
      <DGXContainer className="top">
        <DGXLogo className="flex" />
        <div className="mt">
          <DGXDropdown list={listCarUpdate} data={data} label={"انتخاب خودرو"} selectItem={selectItem}/>
        </div>
        <div className="result">{!data ? "هیچ" : data?.name}</div>
      </DGXContainer>
    </div>
  );
}

export default App;
