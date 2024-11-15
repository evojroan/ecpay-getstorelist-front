import { useState, useEffect, useRef } from "react";
import axios from "axios";

function App() {
  const formRef=useRef(null)
  const [StoreData,setStoreData]=useState(null)
  const [Payload, setPayload] = useState({
    MerchantID: "2000132",
    CvsType: "ALL",
    CheckMacValue: "",
  });
  const CvsTypeList = [
    { Num: 0, name: "所有便利商店", value: "ALL" },
    { Num: 1, name: "全家", value: "FAMI" },
    { Num: 2, name: "7-ELEVEN超商(常溫)", value: "UNIMART" },
    { Num: 3, name: "萊爾富", value: "HILIFE" },
    { Num: 4, name: "OK 超商", value: "OKMART" },
    { Num: 5, name: "7-ELEVEN超商(冷鏈)", value: "UNIMARTFREEZE" },
  ];
  const CreateCMVURL = "http://localhost:3000/createCMV";
  const APIURL = "https://logistics-stage.ecpay.com.tw/Helper/GetStoreList";

  function SendParams() {
    let params = { MerchantID: Payload.MerchantID, CvsType: Payload.CvsType };
    axios
      .post(CreateCMVURL, params)
      .then((response) => {
        setPayload({
          ...Payload,
          CheckMacValue: response.data,
        });
      })
      .catch((error) => {
        console.error("錯誤：", error);
      });
  }

  useEffect(() => {
    if (Payload.CheckMacValue && Payload.CheckMacValue !== "") {
      if(formRef.current){formRef.current.submit()}
    }
  }, [Payload.CheckMacValue]);

  return (
    <>
      <div className="input">
        <h2>取得門市清單：技術文件</h2>
        <a href="https://developers.ecpay.com.tw/?p=47496" target="_blank">
          https://developers.ecpay.com.tw/?p=47496
        </a>
        <h2>選擇特店編號</h2>
        <div className="selectMerchantId">
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
      <div className="postpayload" style={{ display:"none" }}>
        <form ref={formRef} method="post" action={APIURL}>
          {Object.entries(Payload).map(([key, value]) => (
            <div key={key}>
              <input name={key} value={value} readOnly />
            </div>
          ))}
        </form>
      </div>
      <div className="StoreData">回傳如下：<br/>
      
      
      </div>
    </>
  );
}

export default App;
