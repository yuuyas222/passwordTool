       // カスタムの場合
            // 英字（小、大）、数字含むか  
            // 記号ありを選択した場合、最強で使用する記号が出てくる。
        // 強力の場合
            // 自動的に英字（小、大）、数字含む。記号は無しが選択される。（変更は不可）
        // 最強の場合
            // 強力と同様、自動的に英字（小、大）、数字含む。記号は無しが選択される。（変更は不可）
            // 記号はありで選択され、選択後選択項目が出てくる
    
    // 生成するパスワードの文字数を選択する
    // 強度同様にチェック項目を取得してその選択項目ごとで処理を分岐
    //　強度の項目で選択したものによって生成するパスワードを変える（数字入れたり大英字入れたり）
    // 強度項目にチェックがあったら大文字に変えたり小文字に変えたりする

        // カスタムの場合
            // 入力した数値に応じて生成可能
        // 8文字の場合
            // 8文字のパスワードを生成
                // if(wordCheckValue == "8文字"){
                        // for(let i=0; i<n; i++){
                        //         let l=8;
                        //         if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
                        //                 const string= 強_度で選択した項目を変数に代入　例）upper + lowerみたいに
                        //                 let cl=string.length;　文字数の長さをとる
                        //                 let r="";　パスワードの箱を作り、以下for文で1文字ずつ入れていく　＝パスワードの文字数
                        //                 for(let i=0; i<l; i++){
                        //                         r += string[Math.floor(Math.random()*cl)];
                        //                      }
                                        // if(s_1.checked == true && s_2.checked == false){
                                        //         r = r.toUpperCase();　箱に入れたやつを大文字に変換　強度項目にチェックがあったら大文字に変えたり小文字に変えたりする
                                        // }else if(s_1.checked == false && s_2.checked_文字に変換
                                        // }
                        // }
        // 12文字の場合
            // 12文字のパスワードを生成
            
    // 生成したパスワードを表示する個数をきめ、選択する
        // カスタムの場合
            // 入力した数値に応じて生成可能
        // １０個の場合
            // 生成した10個のパスワードを表示
                // const n=10;
                // let reset_area=document.getElementById("area");
                // reset_area.innerHTML= ""; 
                // let add=document.createElement("div");
                // add.textContent = r;　パスワードの箱をHTMLのテキストにいれる
                // let area=document.getElementById("area");
                // area.appendChild(add);
        // 50個の場合
            // 生成した50個のパスワードを表示

    // その他
        // 似通った英数字は省く
        // 8文字以内の場合、同じ文字は2回以上使わなi
