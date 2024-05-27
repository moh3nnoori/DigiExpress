import {createElement, useEffect, useState} from 'react'
import OutsideAlerter                       from './OutsideAlerter'



export default ({list,selectItem,data,label}) => {
  let [showList,setShowList] = useState(false);


  const handleClick = () => {
    setShowList(true)
  };


  const onChangeValue= (item)=>{
    selectItem(item)
    setShowList(false)
  }

  useEffect(()=>{
    const findDefault =  list?.find(listCarItem=>listCarItem.isDefault)
    selectItem(findDefault)
  },[list])

  return (
    <>
      <label className="drop-down-label">{label}</label>
      <div className="drop-down">

        <div
          className={`input size text color ${showList && "active"}`}
          onClick={() => handleClick()}
        >
          {data?.name}
        </div>
        <OutsideAlerter onClose={()=>setShowList(false)}>

          {showList && (
            <div className="list size color">
              {
                list.map(listItem=>
                  <div key={listItem.key} className="item size text" onClick={() => onChangeValue(listItem)}>
                    {listItem.name}
                    {createElement(listItem.renderComponent)}
                  </div>
                )
              }
            </div>
          )}
        </OutsideAlerter>

        <div className="drop-down-helper">
          {!data && <h6>یک مورد انتخاب کتید</h6>}
        </div>

      </div>
    </>
  );
};
