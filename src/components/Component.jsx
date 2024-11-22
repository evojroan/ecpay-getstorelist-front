import { useState } from "react";

export function FilterMenu({
  propDistrictList,
  propSlctdCity,
  propSetSlctdCity,
  propSetSlctdDistrict,
}) {
  return (
    <div className="flex p-4  ">
      <div className="mx-4">篩選條件</div>
      <div>
        縣/市：
        <select
          className="border-black border-2 mx-2"
          onChange={(event) => {
            propSetSlctdCity(event.target.value);
            propSetSlctdDistrict("")
          }}
        >
          {Object.keys(propDistrictList).map((city) => {
            return <option key={city}>{city}</option>;
          })}
        </select>
      </div>
      <div>
        市/區/鄉鎮：
        <select className="border-black border-2 mx-2" onChange={event=>{propSetSlctdDistrict(event.target.value)}}>
          {propSlctdCity &&
            propDistrictList[propSlctdCity]?.map((district) => {
              return <option key={district}>{district}</option>;
            })}
        </select>
      </div>
    </div>
  );
}

export function StoreCard({
  CvsType,
  StoreId,
  StoreName,
  StoreAddr,
  StorePhone,
}) {
  return (
    <>
      <div className="border-2 border-slate-200 p-4 w-1/2 m-4 hover:border-slate-600 hover:shadow-lg hover:scale-105 transition ease-in-out ">
        <div>門市商店：{CvsType}</div>
        <div>門市代號(StoreId)：{StoreId}</div>
        <div>門市名稱(StoreName)：{StoreName}</div>
        <div>門市地址(StoreAddr)：{StoreAddr}</div>
        <div>門市電話 (StorePhone)：{StorePhone}</div>
      </div>
    </>
  );
}


export function SearchButton({ propLoading, propSendParams }){
  return(<>
    <button
      type="button"
      className="border-2 border-black bg-slate-200 rounded-lg p-2 m-2"
      onClick={propSendParams}
      disabled={propLoading}
    >
      {propLoading ? (
        <div className="flex items-center">
          <svg className="animate-spin h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          讀取中
        </div>
      ) : (
        "送出"
      )}
    </button>
  </>)
}