import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { StoreCard, FilterMenu } from "./components/Component";
import DistrictList from "./DistrictList";

function App() {
  const [Loading, setLoading] = useState(false);
  const [StoreData, setStoreData] = useState({ Data: "尚無資料" });
  const [SlctdCity, setSlctdCity] = useState("");
  const [SlctdDistrict, setSlctdDistrict] = useState("");
  const [Payload, setPayload] = useState({
    MerchantID: "2000132",
    CvsType: "ALL",
  });
  const CvsTypeList = [
    { Num: 0, name: "所有便利商店", value: "ALL" },
    { Num: 1, name: "全家", value: "FAMI" },
    { Num: 2, name: "7-ELEVEN超商(常溫)", value: "UNIMART" },
    { Num: 3, name: "萊爾富", value: "HILIFE" },
    { Num: 4, name: "OK 超商", value: "OKMART" },
    { Num: 5, name: "7-ELEVEN超商(冷鏈)", value: "UNIMARTFREEZE" },
  ];

  const CreateCMVURL = "http://localhost:3000/post";

  function SendParams() {
    if (Loading == false) {
      setLoading(true);
    }
    let params = { MerchantID: Payload.MerchantID, CvsType: Payload.CvsType };
    axios
      .post(CreateCMVURL, params)
      .then((response) => {
        console.log(response.data)
        setStoreData(response.data);
      })
      .catch((error) => {
        console.error("錯誤：", error);
      });
  }

  useEffect(() => {
    setLoading(false);
    // console.log(StoreData.StoreList.StoreInfo)
  }, [StoreData]);

  function filterStores (store) {
    if (!SlctdCity || SlctdCity === "全部") return true;
    const normalizedAddr = store.StoreAddr.replace(/臺/g, '台');
    const hasCity = normalizedAddr.includes(SlctdCity);
    if (!SlctdDistrict || SlctdDistrict === "全部") return hasCity;
    return hasCity && normalizedAddr.includes(SlctdDistrict);
  };

  return (
    <>
      <div className="input m-2">
        <h2>取得門市清單：技術文件</h2>
        <a href="https://developers.ecpay.com.tw/?p=47496" target="_blank">
          https://developers.ecpay.com.tw/?p=47496
        </a>
        <h2>選擇特店編號</h2>
        <div className="selectMerchantID">
          <p>
            <input
              type="radio"
              id="select2000132"
              name="option"
              value="2000132"
              onClick={() => {
                setPayload({ ...Payload, MerchantID: 2000132 });
              }}
              defaultChecked
            />
            <label
              htmlFor="select2000132"
              onClick={() => {
                setPayload({ ...Payload, MerchantID: 2000132 });
              }}
            >
              2000132
            </label>
          </p>
          <p>
            <input
              type="radio"
              id="select2000933"
              name="option"
              value="2000933"
              onClick={() => {
                setPayload({ ...Payload, MerchantID: 2000933 });
              }}
            />
            <label
              htmlFor="select2000933"
              onClick={() => {
                setPayload({ ...Payload, MerchantID: 2000933 });
              }}
            >
              2000933
            </label>
          </p>
        </div>
        <h2>選擇便利商店</h2>
        <div className="selectCvsType">
          <select
            className="border-2 border-black m-2"
            onChange={(event) => {
              setLoading(false);
              setPayload({ ...Payload, CvsType: event.target.value });
            }}
          >
            {CvsTypeList.map((store) => {
              return (
                <option key={store.Num} value={store.value}>
                  {store.name}
                </option>
              );
            })}
          </select>
        </div>
        <button
          type="button"
          className="border-2 border-black bg-slate-200 rounded-lg p-2 m-2"
          onClick={SendParams}
          disabled={Loading}
        >
          {Loading ? "讀取中" : "送出"}
        </button>
      </div>

      <div className="StoreData m-2">
        <FilterMenu
          propDistrictList={DistrictList}
          propSlctdCity={SlctdCity}
          propSetSlctdCity={setSlctdCity}
          propSetSlctdDistrict={setSlctdDistrict}
        />
      
      總共{StoreData.RtnCode === 1 ? 
        StoreData.StoreList.flatMap(list => 
          list.StoreInfo.filter(filterStores)
        ).length 
        : 0}筆
        <pre
          style={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
        >
          {StoreData.RtnCode === 1 &&
            StoreData.StoreList.flatMap((list) =>
              list.StoreInfo.filter(filterStores)
                .map((store, index) => (
                  <StoreCard
                    CvsType={
                      (list.CvsType == "FAMI" ? "全家" : "") ||
                      (list.CvsType == "UNIMART" ? "7-11 超商(常溫)" : "") ||
                      (list.CvsType == "OKMART" ? "OK 超商" : "") ||
                      (list.CvsType == "HILIFE" ? "萊爾富" : "") ||
                      (list.CvsType == "UNIMARTFREEZE" ? "7-11 超商(冷鏈)" : "")
                    }
                    key={`${list.CvsType}${index}`}
                    StoreId={store.StoreId}
                    StoreName={store.StoreName}
                    StoreAddr={store.StoreAddr}
                    StorePhone={store.StorePhone}
                  />
                ))
            )}
        </pre>
      </div>
    </>
  );
}

export default App;
