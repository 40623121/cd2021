var tipuesearch = {"pages": [{'title': 'About', 'text': '\n 個人倉儲 \n 個人網站 \n 個人簡報 \n 個人網誌 \n 分組網站 1 \n 分組網站 2 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Weeks', 'text': 'Week1 \n Week2~4 \n Week5~9 \n Week10~18 \n', 'tags': '', 'url': 'Weeks.html'}, {'title': 'Week1', 'text': 'Week1 \n 建立個人倉儲cd2021 \n \n 1.下載kmol2021_spring_v2.7z，完成後開啟。 \n 2.登入個人github帳號，使用老師的子模組創建新的倉儲cd2021。 \n 3.進入tmp。 \n 4.輸入git clone --recurse-submodules https://github.com/40623121/cd2021.git 取得子模組資料。 \n 5.完成後，進入cmsimde資料夾輸入python wsgi.py開始編輯倉儲。 \n 6.於瀏覽器輸入https://localhost:9443/ \n 7. 編輯完成後，輸入git status檢查 \xa0 -> \xa0 git add .全部新增 \xa0 -> \xa0 git commit -m "項目名稱" \xa0 -> \xa0 git push推送。\xa0 \xa0 \n \n \n \n 從英文單字解釋了解何謂協同? 產品? 設計? 以及實習? \n \n Collaborative 協同 \n 涉及兩個或多個為特殊目的而一起工作的人。 \n Product\xa0 產品 \n 為出售而製造或精製的物品或物質。 \n Design 設計 \n 為某物制定或繪製計畫。 \n Practice 練習 \n 實際去行動而不是單純去想或觀念。 \n \n 編輯\xa0Leo Editor \n 1.於Y槽中輸入leo \n 2.若不想為黑色，打開pelican.leo \n 3.要更改blog內容使用pelican.leo，要更改簡報內容使用reveal.leo \n 4.要創建同一格的目錄按Ctrl+I，向右移按Ctrl+R \n \n 遇到的問題  :\xa0 \n 1.有在leo editer更改，但是推送完遠端並沒有改變(已解決，沒有更改DISQUS_SITENAME及SITEURL) \n 2.打開leo時進入一個無限迴圈(已解決，建立一個.leoID字串) \n \n 建立.leoID.txt \n 針對 Leo Editor 6.3 在 Windows 10 無法正確建立 home/.leo/.leoID.txt，且打開leo會產生一個無限迴圈，所以要在home_ipv6創建一個.leo資料夾，並新增一個有隨意字串的.leoID.txt檔。 \n \n \n', 'tags': '', 'url': 'Week1.html'}, {'title': 'Week2~4', 'text': '', 'tags': '', 'url': 'Week2~4.html'}, {'title': 'Week2', 'text': '第一階段分組協同實習 \n 制定組序 \n 動機 :\xa0 進行各班制定組序過程中, 發現即便採用 Ethercalc 以網際協同方式同步讓各班自選組員填入兩兩成組的學員學號, 但仍缺人工或自動定各班組序的有效方案，所以要說明自己認為最有效率的第一階段與訂定組序的方法及流程。 \n 人工 : 在教室前面的其中一台電腦做一個excel表單，並派班代負責key資料，找好組員的人派其中一個代表去報學號，key完後依序排組序下來，這樣不僅不會出錯，組序也不會亂掉。 \n \n 繪製零件 \n 先在A4白紙設計各個零件尺寸，使用Onshape&Inventor畫出並組合。 \n \n \n \n 熟悉CoppeliaSim \n 做一個基本四輪車並以鍵盤控制四輪車 \n \n 遇到的問題  :\xa0 \n 1.車子跑得很慢 (已解決，增加Target velocity的大小) \n 2.程式碼代入車子本身後跑不動 (已解決，在更改馬達名字時打錯) \n \n \n', 'tags': '', 'url': 'Week2.html'}, {'title': 'Week3', 'text': '\n 製作分組專題 \n 標題 : 2021-協同產品實習- stage1-ag2 專題題目 : 飛機起降 動機 : 對設計路徑類的東西有興趣 \n 網站 :  分組網站 \n \n 分組協同網站同步 \n \n 當 stage1 兩人一組進行協同時, 要讓各組員 Github 帳號下都帶有分組倉儲與分組網站, 則可以透過 git remote add, 設法讓各組員 Github 帳號下的分組網站內容同步。 \n 操作步驟 :\xa0 \n 1.另一個組員設立一個沒有東西的倉儲(名字需要一樣) \n 2.取得子模組資料後，輸入git remote add xxx\xa0 https://github.com/另一個組員學號/倉儲名稱.git \n 3.從另一個組員的setting寄從另一個組員的setting > Manage access寄邀請給自己 \n 4.git push xxx，即完成。 \n \n 遇到的問題  : \n 1.推送後顯示 remote: Permission (已解決，尚未從gmail確認對方的invite) \n \n \n update cmsimde \n \n \n 1. init.py :\xa0 其中的 site_title, ip 與 port 可以讓使用者自行修改, site_title 是網站標題, ip 為動態網站啟動時所使用的網路位址, 可設為內部或外部 IPv4 (IPv6), port 則是動態網站啟動時所佔用的埠號 \n 2. http-server.py :\xa0 執行後會使用內建的 localhost 與 port 8444 伺服 content 子目錄中的 CMSiMDE 靜態網頁 \n 3. cms.bat \xa0: \xa0讓使用者執行動態網站用的批次檔案 \n 4. acp.bat \xa0: \xa0如果已經將倉儲設為 ssh 連線, 且提供遠端與近端的認證模式, 就可以使用 acp "字串" 代替執行 git add ., git commit -m "提交訊息", 以及 git push 三個指令。 \n \n 遇到的問題  :\xa0 \n 1.推送後遠端沒有推送成功，且gmail顯示Page build failure(已解決，cmsimde錯誤，在cmsimde目錄下輸入git checkout 自己的分支即可。) \n 確認分支方式 \n \n 2.wsgi.py打不開，顯示context.load_cert_chain(\'localhost.crt\' . \'localhost.key\')(已解決，將倉儲的兩個對應檔案複製進cmsimde目錄下即可。) \n \n \n 以ssh對Github連線 \n \n 操作步驟 :\xa0 \n 1.打開start_ipv6.bat 2.輸入sh及ssh-keygen -t rsa -b 4096 -C "使學號"產生key，打上key的產生區域。 3.利用 puttygen.exe 將上述建立的 Openssh keys 轉為 putty 可以辨識的格式。 4.修改啟動的 start.bat 加入下列設定: \xa0 \xa0 \xa0 \xa0set GIT_HOME=%Disk%:\\portablegit\\bin\\ \xa0 \xa0 \xa0 \xa0set GIT_SSH=%Disk%:\\putty\\plink.exe 修改完成後,重新啟動。 5.將要使用 ssh 連線的倉儲 .git 中的 config 檔案中的 url 設定改為 ssh 連線格式:url = git@github.com:倉儲名稱/cd2021.git。 6.開啟 putty.exe 建立一個 session 名稱為 github.com, 其中指定 Connection > Proxy 與 Connection > SSH > Auth。 7.將下列字串加入SciTE並存儲到\\.ssh\\config Host github.com \xa0 \xa0 User git \xa0 \xa0 Port 22 \xa0 \xa0 Hostname github.com \xa0 \xa0 TCPKeepAlive yes \xa0 \xa0 IdentitiesOnly yes 8.將所建立的OpenSSH格式的public key內容,加進自己的Github帳號SSH settings中。 \n 遇到的問題  : \n 1.putty顯示Network error: Connection refused(已解決，proxy設定錯誤) \n \n', 'tags': '', 'url': 'Week3.html'}, {'title': 'Week4', 'text': '報 告 週 \n youtube :\xa0 \n \n PDF :\xa0 \n pdf \n \n 文獻探討 \n 分組題目的選定 \n 準備開始 W5-W9 (5 Weeks) 四人一組的分組專題。 \n \n', 'tags': '', 'url': 'Week4.html'}, {'title': 'Week5~9', 'text': '', 'tags': '', 'url': 'Week5~9.html'}, {'title': 'Week5', 'text': '排序各組簡報檔案 \n python count mp4 time \n 製作分組專案 \n 標題 : 2021-協同產品實習- stage2-ag2 \n 專題題目 :\xa0變速機構\xa0Transmission mechanism \n 動機 :\xa0由於這幾年各國經濟起飛家家戶戶都賺的盆滿鍋滿，有了錢就想要消費，於是想到有錢人都會買車，於是每個家庭必備了一台車，所以汽車業蓬勃發展，各個國家在汽車市場，都想要分杯羹。 然而台灣的汽車業有如剛出生的小羊，嗷嗷待哺一般，剛踏入市場，引擎跟人買，變速箱跟人拿，車架跟人借 所以為了能幫助台灣汽車業蒸蒸日上，所以我們決定全車由我們台灣人自己設計製造，但想要一步登天，將全車在這短短的一個月內設計出來有如癩蛤蟆想吃天鵝肉，所以這次協同產品設計，我們決定先設計汽車中至關重要的變速箱系統。 想要在換檔的時候不會有太大的震動，想要在起跑上贏過別人，想要在尾速速度可以繼續延伸，現在我們就來設計出台灣特有的變速箱，讓世界看見台灣!!! \n 網站 :  分組網站 \n 分組專案設計與簡報重點 \n 1.在沒有實體原型製造情況下，產出自我驗證的結果。 \n 2.設計流程以理論分析或文獻參考佐證，凸顯選定題目或結果的重要性。 \n 3.善用What、Why、When、Who、How、Where? \n 4.簡報以Web based投影片為主，方便參閱，內容要呈現重點，且文句要仔細校正。 \n \n 繪製專案構想圖 \n \n \n \n 參考文獻 \n 參考的網站與資料 \n 參考資料 1 \n 參考資料 2 \n \n', 'tags': '', 'url': 'Week5.html'}, {'title': 'Week6', 'text': '繪製零件與組合圖 \n \n \n \n', 'tags': '', 'url': 'Week6.html'}, {'title': 'Week7', 'text': '', 'tags': '', 'url': 'Week7.html'}, {'title': 'Week8', 'text': '', 'tags': '', 'url': 'Week8.html'}, {'title': 'Week9', 'text': '', 'tags': '', 'url': 'Week9.html'}, {'title': 'Week10~18', 'text': '', 'tags': '', 'url': 'Week10~18.html'}, {'title': 'Experience', 'text': 'Week1 \n 開始了協同產品設計的第一週，說起來也慚愧，畢竟是之前太混什麼都沒學到才被當的，這學期會認真學習的。 \n 一開始一如往常地建立個人倉儲，這次不一樣的事是直接使用現成的子模組，比起以前方扁許多，然後薛席從英文單字了解其中的意義，像collaborative,product,design等等，最後就是編輯自己的leo editer，雖然有點落後進度不過會努力跟上的。 \n \n Week2 \n 跟以前不一樣的是，這次分組不再是使用亂數分組，而是使用Ethercalc的協同同步方式，我覺得是很有效率的方法，不過也出現了些小問題。 \n 然後就是開始著手製作第一次的專題題目，但本身對coppeliasim不熟，所以還需要些時間摸索。 \n \n Week3 \n 這週都在繪製零件跟操作coppeliasim，還有建立ssh對自己的github連線，我覺得要理解ssh蠻難的，不過還是有順利連線，上課中還有遇到個問題就是，分組網站不是建立在組長下面，所以就學習了如何使用git remote add並推送至各自的倉儲下，回家後就繼續測試並且製作下週報告要用的html與pdf。 \n \n Week4 \n 如果只是單純的直線路徑並不是一個好的作品，要加入考量迴轉半徑、離心力、輪子收縮、物體加入質量、需要多大馬力起飛、加入感測器等等各種參數，當初選定題目時沒有考量那麼多，還有要有設計流程圖，很多問題都是當初沒有想到的，幸虧有老師的點醒。 \n Week5 \n 這週開始了第二次的分組專案，我這次就不是跟第一次分組的組員了，經過了討論許久後，我們雙方都不延續之前的主題，一個因為沒什麼發展空間，一個因為要延續的話太難，所以決定做變速箱，國內沒什麼資料或設計參考圖，所以我們也找了很多國外的資料。 \n Week6 \n Week7 \n Week8', 'tags': '', 'url': 'Experience.html'}]};