export default function FilterMenu(){}

export function StoreCard({CvsType,StoreId,StoreName,StoreAddr,StorePhone}){

    

    return(<>
    <div className="border-2 border-slate-200 p-4">
        <div>門市商店：{CvsType}</div>
        <div>門市代號(StoreId)：{StoreId}</div>
        <div>門市名稱(StoreName)：{StoreName}</div>
        <div>門市地址(StoreAddr)：{StoreAddr}</div>
        <div>門市電話 (StorePhone)：{StorePhone}</div>
    </div>
    
    </>)
}