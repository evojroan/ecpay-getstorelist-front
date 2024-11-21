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
