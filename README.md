# 綠界物流 - 取得門市清單
技術文件連結：[https://developers.ecpay.com.tw/?p=47496](https://developers.ecpay.com.tw/?p=47496)

# 程式運作
前端將參數  MerchantID、 CvsType 送給後端，後端計算 CheckMacValue 後再呼叫綠界 API。綠界 API 回傳給後端，後端再回傳給前端。

# 關於 App.jsx 與 App-Backup.jsx 的差別
App.jsx：呼叫 API 後，目前暫先於前端顯示回傳資料。這些資料可以再調整為其他的樣式，例如下拉式選單。
App-Backup.jsx：呼叫 API 後，由前端導轉至結果畫面，後續不易處理資料。

# 待完成事項：
 App.jsx：整理回傳資料，以下拉式選單分類縣市的門市。

 # 後端 Repo：
