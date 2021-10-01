# ReactNative-cli

##　開發的功能
1.使用 ReactNative-cli開發
2.app選單點擊打開、收起
3.串接下面網址的一組列表資料api，並可瀏覽
https://mocki.io/fake-json-api

## 未完成項目
+ 下方APP tab切換頁面
+ 不清楚IOS、Android的上架流程與注意事項

## 描述
### 研究描述
我沒有任何開發APP經驗，所以我花兩天的時間研究。

第一天都在了解環境建置、expo、cli、環境變數、Android Studio、手機模擬器。

遇到困難的問題是手機模擬器可以開啟，可是都無法運行App.js

依照 ReactNative 官方文件、ReactNative 中文網的文件的步驟都無法成功。

最後是參考 docs.microsoft.com 的文件，環境變數不只要設定 Android_HOME環境變數，額外在設定 JAVA_HOME 環境變數才正常運行

第二天研究 ReactNative 內建的組件，style 的寫法。

研究的組件有，View、Text、Image、Button、TouchableOpacity、ListView、FlatList、TextInput。

發現要完成 APP tab 切換頁面這個功能，可以使用 Navigator 或 Navigation。

發現 ReactNative 有很多組件與插件，要比較哪個可能過時、並且學習比較適當的方式花時間就先沒有投入時間下去。

### 開發時間
1.app選單點擊打開、收起，大約花20分鐘

2.串API資料並顯示，大約 20 分鐘

使用 fetch get API 資料並放在 state 5分鐘

比較多的時間都是在處理樣式。


### 架構
因為沒有開發多少功能所以架構簡單，也沒有拆分 component 成新的 js 檔

style 也寫在 App.js。

        App <- state 放在 App
        
        / \FlatList   MenuButtom
    /
    
ListItem
        


