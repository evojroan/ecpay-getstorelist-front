import { useState, useEffect, useRef } from "react";
import axios from "axios";

function App() {
  const formRef=useRef(null)
  const [StoreData,setStoreData]=useState({Data:"尚無資料"})
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
    let params = { MerchantID: Payload.MerchantID, CvsType: Payload.CvsType };
    axios
      .post(CreateCMVURL, params)
      .then((response) => {
     console.log(response.data)
setStoreData(response.data)
      })
      .catch((error) => {
        console.error("錯誤：", error);
      });
  }



  return (
    <>
      <div className="input">
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
            onChange={(event) => {
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
        <button onClick={SendParams}>送出</button>
      </div>
     
      <div className="StoreData">回傳如下：<br/>
      <pre style={{ 
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      }}>
        {JSON.stringify(StoreData, null, 2)}
      </pre>
      </div>
    </>
  );
}

export default App;
