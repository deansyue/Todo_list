# Todo list
這是一個使用node.js及express框架所架構的待辦清單網站，在這裡您可以新增、修改、刪除、瀏覽儲存於資料庫內的待辦事項資料。

## 專案畫面
![img](/public/img/Todo_List.jpg)

## Features 產品功能

1. 使用者點擊Detail按鈕即可觀看待辦事項詳細資訊
2. 使用者可以新增待辦事項資料
3. 使用者可以刪除待辦事項資料
4. 使用者可以修改待辦事項詳細資料
5. 使用者可以使用修改將待辦事項標示為已完成狀態

## Environment Setup 環境建置
* Node.js： ^14.16.0
* Express： ^4.17.1
* Express-handlebars： ^5.3.4
* mongoose： ^6.0.12
* mongodb

## Installing 專案安裝流程
1. 打開您的終端機(terminal)，複製(clone)專案至本機
```
git clone https://github.com/deansyue/Todo_list.git
```

2. 進入存放此專案資料夾
```
cd Todo_list
```

3. 安裝npm套件
```
npm install
```

4. 使用腳本，創建種子資料
```
npm run seed
```

5. 使用腳本，即可啟動伺服器
```
npm run dev
```

6. 當終端機(terminal)出現以下文字，代表伺服器已啟動
```
Express is running on http://localhost:3000
```

## Contributor 專案開發人員
[deansyue](https://github.com/deansyue)
