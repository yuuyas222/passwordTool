// 記号つきの選択ができるようにするかもしくは消すか
    function symbolDisplay(){
        const target=document.getElementsByClassName("strong_none");
        const SymbolExiting=document.getElementById("select_id_5");
            if(SymbolExiting.checked == true){
                for(let i=0; i<target.length; i++){
                    target[i].style.display="block";
                }
            }else if(SymbolExiting.checked == false){
                for(let i=0; i<target.length; i++){
                target[i].style.display="none";
                console.log("消す");
                }
            }
    }

    function strongCheck(){
        const strengthElements=document.getElementsByName("strengthSelects"); //強度のnameの値をまとめて取得
        const len=strengthElements.length;
        const checkValue="";
        for(let i=0;i<len;i++){
        if(strengthElements.item(i).checked){
            checkValue=elements.item(i).value;
        }
    }
        console.log(checkValue);
    }

    const lower = "abcdefghijklmnopqrstuvwxyz"
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const nn = "0123456789"

// カスタム選択後チェックボックス選択可能になる チェックした値を取得
let s_1=document.getElementById("select_id_1");
let s_2=document.getElementById("select_id_2");
let s_3=document.getElementById("select_id_3");
let s_4=document.getElementById("select_id_4");
let s_5=document.getElementById("select_id_5");
let s_6=document.getElementById("select_id_6");
let s_7=document.getElementById("select_id_7");
let s_8=document.getElementById("select_id_8");
let s_9=document.getElementById("select_id_9");
let s_10=document.getElementById("select_id_10");
let s_11=document.getElementById("select_id_11");
let s_12=document.getElementById("select_id_12");
let s_13=document.getElementById("select_id_13");
let s_14=document.getElementById("select_id_14");
let s_15=document.getElementById("select_id_15");
let s_16=document.getElementById("select_id_16");
let s_17=document.getElementById("select_id_17");
let s_18=document.getElementById("select_id_18");
let s_19=document.getElementById("select_id_19");
let s_20=document.getElementById("select_id_20");
let s_21=document.getElementById("select_id_21");
let select=document.getElementsByClassName("select_id");
for(let i=0; i<select.length; i++){
    select[i].addEventListener("click",() =>{
        for(let i=0;i<len;i++){
            if(select.item(i).checked){
                checkValue=select.item(i).value;
            }
        }
        if(checkValue == "カスタム"){
                s_1.disabled=false;
                s_2.disabled=false;
                s_3.disabled=false;
                s_4.disabled=false;
                s_5.disabled=false;
                s_6.disabled=false;
                s_7.disabled=false;
                s_8.disabled=false;
                s_9.disabled=false;
                s_10.disabled=false;
                s_11.disabled=false;
                s_12.disabled=false;
                s_13.disabled=false;
                s_14.disabled=false;
                s_15.disabled=false;
                s_16.disabled=false;
                s_17.disabled=false;
                s_18.disabled=false;
                s_19.disabled=false;
                s_20.disabled=false;
                s_21.disabled=false;
            console.log("表示");
            s_5.addEventListener("click", () =>{
                if(s_5.checked == true){
                    for(let i=0; i<target.length; i++){
                        target[i].style.display="block";
                    }
                }
            })
        }else if(checkValue == "強力"){
                s_1.disabled=true;
                s_2.disabled=true;
                s_3.disabled=true;
                s_4.disabled=true;
                s_5.disabled=true;
                s_1.checked=true;
                s_2.checked=true;
                s_3.checked=true;
                s_4.checked=true;
                console.log("強力");
                for(let i=0; i<target.length; i++){
                    target[i].style.display="none";
                    console.log("消す");
                }
        }else{ 
                s_1.disabled=true;
                s_2.disabled=true;
                s_3.disabled=true;
                s_4.disabled=true;
                s_5.disabled=true;
                s_6.disabled=true;
                s_7.disabled=true;
                s_8.disabled=true;
                s_9.disabled=true;
                s_10.disabled=true;
                s_11.disabled=true;
                s_12.disabled=true;
                s_13.disabled=true;
                s_14.disabled=true;
                s_15.disabled=true;
                s_16.disabled=true;
                s_17.disabled=true;
                s_18.disabled=true;
                s_19.disabled=true;
                s_20.disabled=true;
                s_21.disabled=true;
                s_1.checked=true;
                s_2.checked=true;
                s_3.checked=true;
                s_4.checked=false;
                s_5.checked=true;
                s_6.checked=true;
                s_7.checked=true;
                s_8.checked=true;
                s_9.checked=true;
                s_10.checked=true;
                s_11.checked=true;
                s_12.checked=true;
                s_13.checked=true;
                s_14.checked=true;
                s_15.checked=true;
                s_16.checked=true;
                s_17.checked=true;
                s_18.checked=true;
                s_19.checked=true;
                s_20.checked=true;
                s_21.checked=true;
                for(let i=0; i<target.length; i++){
                    target[i].style.display="block";
                    console.log("消す");
                }
            console.log("非表示");
        }
    })
}


// / 生成するパスの文字数を取得
let passNam=document.getElementsByName("passwordNam");
let wordLen=passNam.length;
// パスの個数を取得
let quantity=document.getElementsByName("quantity");
let num=quantity.length;
let numCheckValue=""
// passNam[0].checked = true;
let wordCheckValue="";


    // 記号の生成
    let symbolChecks = document.getElementsByClassName('checks');
    let symbol = '';
        for ( i = 0; i < symbolChecks.length; i++) {
            if ( symbolChecks[i].checked === true ) {
                symbol += symbolChecks[i].value;
            }
        }

    // ランダムに数字を生成
    for(let i=0;i<wordLen;i++){
        if(passNam.item(i).checked){
            wordCheckValue=passNam.item(i).value;
        }
    }
    console.log(wordCheckValue);
    // 生成する個数を決定

    function passwordQuantity(){
        for(let i=0; i<num; i++){
            if(quantity.item(i).checked){
                numCheckValue=quantity.item(i).value;
            }
        }
    }
    console.log(numCheckValue);

    const string= lower + upper + nn + symbol;   //id_1 がある時upper 　　id_2lower  id_3数字
    let cl=string.length;
    let r="";

// ランダムにパスワードを生成　全て
    function passwordMake(){
        for(let i=0; i<l; i++){
            r += string[Math.floor(Math.random()*cl)];
        }
    }

    // パスワードを大文字だけ使用

    // パスワード小文字だけ使用

    if(s_1.checked == true && s_2.checked == false){
        r = r.toUpperCase();
    }else if(s_1.checked == false && s_2.checked == true){
        r = r.toLowerCase();
    }

    // 生成したパスワードをいれるHTMLを生成
    function formatMake(){
        let add=document.createElement("div");
        add.textContent = r;
        let area=document.getElementById("area");
        area.appendChild(add);
    }




// function PasswordMake(){
    

//     if(wordCheckValue == "8文字" || wordCheckValue == "カスタム" && numCheckValue=="10個" && checkValue=="強力"){
//         if(wordCheckValue == "8文字"){
//             const n=10;
//             let reset_area=document.getElementById("area");
//             reset_area.innerHTML= ""; 
//             for(let i=0; i<n; i++){
//                 let l=8;
//                 const lower = "abcdefghijklmnopqrstuvwxyz"
//                 const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                 const nn = "0123456789"
//                 if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
//                     const string= lower + upper + nn + str;   //id_1 がある時upper 　　id_2lower  id_3数字
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_2.checked == true){
//                     const string = upper + lower+ str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_3.checked == true){
//                     const string = upper + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_2.checked == true && s_3.checked == true){
//                     const string = lower + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true){
//                         const string = upper + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                 }else if(s_2.checked == true){
//                     const string = lower + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_3.checked == true){
//                     const string = nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }
//                 }
//         }else if(wordCheckValue == "カスタム"){
//             const n = 10
//             const wordCustomNumber = document.getElementById("wordCustomNumber");
//             const wordNum = wordCustomNumber.value
//             let reset_area=document.getElementById("area");
//             reset_area.innerHTML= ""; 
//             for(let i=0; i<n; i++){
//                 let l=wordNum;
//                 const lower = "abcdefghijklmnopqrstuvwxyz"
//                 const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                 const nn = "0123456789"
//                 if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
//                     const string= lower + upper + nn + str;   //id_1 がある時upper 　　id_2lower  id_3数字
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_2.checked == true){
//                     const string = upper + lower+ str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_3.checked == true){
//                     const string = upper + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_2.checked == true && s_3.checked == true){
//                     const string = lower + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true){
//                         const string = upper + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                 }else if(s_2.checked == true){
//                     const string = lower + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_3.checked == true){
//                     const string = nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }
//                 }
//             console.log(wordCustomNumber.value);
//         }    
//     }else if(wordCheckValue == "12文字" && numCheckValue=="10個"　&& checkValue=="強力"){
//             let n=10;
//             let reset_area=document.getElementById("area");
//             reset_area.innerHTML= ""; 
//             for(let i=0; i<n; i++){
//                 let l=12;
//                 const lower = "abcdefghijklmnopqrstuvwxyz"
//                 const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                 const nn = "0123456789"
//                 if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
//                     const string= lower + upper + nn + str;   //id_1 がある時upper 　　id_2lower  id_3数字
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_2.checked == true){
//                     const string = upper + lower+ str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_3.checked == true){
//                     const string = upper + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_2.checked == true && s_3.checked == true){
//                     const string = lower + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true){
//                         const string = upper + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                 }else if(s_2.checked == true){
//                     const string = lower + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_3.checked == true){
//                     const string = nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }
//                 }
//     }else if(wordCheckValue == "8文字" || wordCheckValue == "カスタム" && numCheckValue == "50個"　&& checkValue=="強力"){
//             if(wordCheckValue == "8文字"){
//                 let n=50;
//                 let reset_area=document.getElementById("area");
//                 reset_area.innerHTML= ""; 
//                 for(let i=0; i<n; i++){
//                     let l=8;
//                     const lower = "abcdefghijklmnopqrstuvwxyz"
//                     const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                     const nn = "0123456789"
//                     if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
//                         const string= lower + upper + nn + str;   //id_1 がある時upper 　　id_2lower  id_3数字
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_1.checked == true && s_2.checked == true){
//                         const string = upper + lower+ str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_1.checked == true && s_3.checked == true){
//                         const string = upper + nn + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_2.checked == true && s_3.checked == true){
//                         const string = lower + nn + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_1.checked == true){
//                             const string = upper + str;
//                             let cl=string.length;
//                             let r="";
//                             for(let i=0; i<l; i++){
//                                 r += string[Math.floor(Math.random()*cl)];
//                             }
//                             if(s_1.checked == true && s_2.checked == false){
//                                 r = r.toUpperCase();
//                             }else if(s_1.checked == false && s_2.checked == true){
//                                 r = r.toLowerCase();
//                             }
//                             let add=document.createElement("div");
//                             add.textContent = r;
//                             let area=document.getElementById("area");
//                             area.appendChild(add);
//                     }else if(s_2.checked == true){
//                         const string = lower + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_3.checked == true){
//                         const string = nn + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }
//                     }
//             }else{
//                 const n = 50
//                 const wordCustomNumber = document.getElementById("wordCustomNumber");
//                 const wordNum = wordCustomNumber.value
//                 let reset_area=document.getElementById("area");
//                 reset_area.innerHTML= ""; 
//                 for(let i=0; i<n; i++){
//                     let l=wordNum;
//                     const lower = "abcdefghijklmnopqrstuvwxyz"
//                     const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                     const nn = "0123456789"
//                     if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
//                         const string= lower + upper + nn + str;   //id_1 がある時upper 　　id_2lower  id_3数字
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_1.checked == true && s_2.checked == true){
//                         const string = upper + lower+ str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_1.checked == true && s_3.checked == true){
//                         const string = upper + nn + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_2.checked == true && s_3.checked == true){
//                         const string = lower + nn + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_1.checked == true){
//                             const string = upper + str;
//                             let cl=string.length;
//                             let r="";
//                             for(let i=0; i<l; i++){
//                                 r += string[Math.floor(Math.random()*cl)];
//                             }
//                             if(s_1.checked == true && s_2.checked == false){
//                                 r = r.toUpperCase();
//                             }else if(s_1.checked == false && s_2.checked == true){
//                                 r = r.toLowerCase();
//                             }
//                             let add=document.createElement("div");
//                             add.textContent = r;
//                             let area=document.getElementById("area");
//                             area.appendChild(add);
//                     }else if(s_2.checked == true){
//                         const string = lower + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_3.checked == true){
//                         const string = nn + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }
//                     }
//                 console.log(wordCustomNumber.value);
//             }
//     }else if(numCheckValue == "50個" && wordCheckValue == "12文字"　&& checkValue=="強力"){
//             let n=50;
//             let reset_area=document.getElementById("area");
//             reset_area.innerHTML= ""; 
//             for(let i=0; i<n; i++){
//                 let l=12;
//                 const lower = "abcdefghijklmnopqrstuvwxyz"
//                 const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                 const nn = "0123456789"
//                 if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
//                     const string= lower + upper + nn + str;   //id_1 がある時upper 　　id_2lower  id_3数字
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_2.checked == true){
//                     const string = upper + lower+ str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_3.checked == true){
//                     const string = upper + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_2.checked == true && s_3.checked == true){
//                     const string = lower + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true){
//                         const string = upper + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                 }else if(s_2.checked == true){
//                     const string = lower + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_3.checked == true){
//                     const string = nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }
//                 }
//     }else if(numCheckValue == "10個" && wordCheckValue == "8文字" || wordCheckValue == "カスタム"　&& checkValue=="最強"){
//         if(wordCheckValue == "8文字" && checkValue == "最強"){
//             let str = '';
//             let checks = document.getElementsByClassName('checks');
//             for ( i = 0; i < checks.length; i++) {
//                 if ( checks[i].checked === true ) {
//                     str += checks[i].value;
//                 }
//             }
//             console.log(str);
//             let n=10;
//             let reset_area=document.getElementById("area");
//             reset_area.innerHTML= ""; 
//             for(let i=0; i<n; i++){
//                 let l=8;
//                 const lower = "abcdefghijklmnopqrstuvwxyz"
//                 const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                 const nn = "0123456789"
//                 if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
//                     const string= lower + upper + nn + str;   //id_1 がある時upper 　　id_2lower  id_3数字
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_2.checked == true){
//                     const string = upper + lower+ str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_3.checked == true){
//                     const string = upper + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_2.checked == true && s_3.checked == true){
//                     const string = lower + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true){
//                         const string = upper + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                 }else if(s_2.checked == true){
//                     const string = lower + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_3.checked == true){
//                     const string = nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }
//             }
//         }else{
//             const n = 10
//             const wordCustomNumber = document.getElementById("wordCustomNumber");
//             const wordNum = wordCustomNumber.value
//             let reset_area=document.getElementById("area");
//             reset_area.innerHTML= ""; 
//             for(let i=0; i<n; i++){
//                 let l=wordNum;
//                 const lower = "abcdefghijklmnopqrstuvwxyz"
//                 const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                 const nn = "0123456789"
//                 if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
//                     const string= lower + upper + nn + str;   //id_1 がある時upper 　　id_2lower  id_3数字
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_2.checked == true){
//                     const string = upper + lower+ str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_3.checked == true){
//                     const string = upper + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_2.checked == true && s_3.checked == true){
//                     const string = lower + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true){
//                         const string = upper + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                 }else if(s_2.checked == true){
//                     const string = lower + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_3.checked == true){
//                     const string = nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }
//                 }
//             }
//     }else if(numCheckValue == "10個" && wordCheckValue == "12文字"　&& checkValue=="最強"){
//         let n=10;
//         let reset_area=document.getElementById("area");
//         reset_area.innerHTML= ""; 
//         var str = '';
//         let checks = document.getElementsByClassName('checks');
//         for ( i = 0; i < checks.length; i++) {
//             if ( checks[i].checked === true ) {
//                 str += checks[i].value;
//             }
//         }
//         for(let i=0; i<n; i++){
//             let l=12;
//             const lower = "abcdefghijklmnopqrstuvwxyz"
//             const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//             const nn = "0123456789"
//             if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
//                 const string= lower + upper + nn + str;   //id_1 がある時upper 　　id_2lower  id_3数字
//                 let cl=string.length;
//                 let r="";
//                 for(let i=0; i<l; i++){
//                     r += string[Math.floor(Math.random()*cl)];
//                 }
//                 if(s_1.checked == true && s_2.checked == false){
//                     r = r.toUpperCase();
//                 }else if(s_1.checked == false && s_2.checked == true){
//                     r = r.toLowerCase();
//                 }
//                 let add=document.createElement("div");
//                 add.textContent = r;
//                 let area=document.getElementById("area");
//                 area.appendChild(add);
//             }else if(s_1.checked == true && s_2.checked == true){
//                 const string = upper + lower+ str;
//                 let cl=string.length;
//                 let r="";
//                 for(let i=0; i<l; i++){
//                     r += string[Math.floor(Math.random()*cl)];
//                 }
//                 if(s_1.checked == true && s_2.checked == false){
//                     r = r.toUpperCase();
//                 }else if(s_1.checked == false && s_2.checked == true){
//                     r = r.toLowerCase();
//                 }
//                 let add=document.createElement("div");
//                 add.textContent = r;
//                 let area=document.getElementById("area");
//                 area.appendChild(add);
//             }else if(s_1.checked == true && s_3.checked == true){
//                 const string = upper + nn + str;
//                 let cl=string.length;
//                 let r="";
//                 for(let i=0; i<l; i++){
//                     r += string[Math.floor(Math.random()*cl)];
//                 }
//                 if(s_1.checked == true && s_2.checked == false){
//                     r = r.toUpperCase();
//                 }else if(s_1.checked == false && s_2.checked == true){
//                     r = r.toLowerCase();
//                 }
//                 let add=document.createElement("div");
//                 add.textContent = r;
//                 let area=document.getElementById("area");
//                 area.appendChild(add);
//             }else if(s_2.checked == true && s_3.checked == true){
//                 const string = lower + nn + str;
//                 let cl=string.length;
//                 let r="";
//                 for(let i=0; i<l; i++){
//                     r += string[Math.floor(Math.random()*cl)];
//                 }
//                 if(s_1.checked == true && s_2.checked == false){
//                     r = r.toUpperCase();
//                 }else if(s_1.checked == false && s_2.checked == true){
//                     r = r.toLowerCase();
//                 }
//                 let add=document.createElement("div");
//                 add.textContent = r;
//                 let area=document.getElementById("area");
//                 area.appendChild(add);
//             }else if(s_1.checked == true){
//                     const string = upper + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//             }else if(s_2.checked == true){
//                 const string = lower + str;
//                 let cl=string.length;
//                 let r="";
//                 for(let i=0; i<l; i++){
//                     r += string[Math.floor(Math.random()*cl)];
//                 }
//                 if(s_1.checked == true && s_2.checked == false){
//                     r = r.toUpperCase();
//                 }else if(s_1.checked == false && s_2.checked == true){
//                     r = r.toLowerCase();
//                 }
//                 let add=document.createElement("div");
//                 add.textContent = r;
//                 let area=document.getElementById("area");
//                 area.appendChild(add);
//             }else if(s_3.checked == true){
//                 const string = nn + str;
//                 let cl=string.length;
//                 let r="";
//                 for(let i=0; i<l; i++){
//                     r += string[Math.floor(Math.random()*cl)];
//                 }
//                 if(s_1.checked == true && s_2.checked == false){
//                     r = r.toUpperCase();
//                 }else if(s_1.checked == false && s_2.checked == true){
//                     r = r.toLowerCase();
//                 }
//                 let add=document.createElement("div");
//                 add.textContent = r;
//                 let area=document.getElementById("area");
//                 area.appendChild(add);
//             }
//             }
//     }else if(numCheckValue == "50個" && wordCheckValue == "8文字"　&& checkValue=="最強"){
//         let n=50;
//         let reset_area=document.getElementById("area");
//         reset_area.innerHTML= ""; 
//         let checks = document.getElementsByClassName('checks');
//         let str = '';
//         for ( i = 0; i < checks.length; i++) {
//             if ( checks[i].checked === true ) {
//                 str += checks[i].value;
//             }
//         }
//         console.log(str);
//         for(let i=0; i<n; i++){
//             let l=8;
//             const lower = "abcdefghijklmnopqrstuvwxyz"
//             const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//             const nn = "0123456789"
//             if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
//                 const string= lower + upper + nn + str;   //id_1 がある時upper 　　id_2lower  id_3数字
//                 let cl=string.length;
//                 let r="";
//                 for(let i=0; i<l; i++){
//                     r += string[Math.floor(Math.random()*cl)];
//                 }
//                 if(s_1.checked == true && s_2.checked == false){
//                     r = r.toUpperCase();
//                 }else if(s_1.checked == false && s_2.checked == true){
//                     r = r.toLowerCase();
//                 }
//                 let add=document.createElement("div");
//                 add.textContent = r;
//                 let area=document.getElementById("area");
//                 area.appendChild(add);
//             }else if(s_1.checked == true && s_2.checked == true){
//                 const string = upper + lower+ str;
//                 let cl=string.length;
//                 let r="";
//                 for(let i=0; i<l; i++){
//                     r += string[Math.floor(Math.random()*cl)];
//                 }
//                 if(s_1.checked == true && s_2.checked == false){
//                     r = r.toUpperCase();
//                 }else if(s_1.checked == false && s_2.checked == true){
//                     r = r.toLowerCase();
//                 }
//                 let add=document.createElement("div");
//                 add.textContent = r;
//                 let area=document.getElementById("area");
//                 area.appendChild(add);
//             }else if(s_1.checked == true && s_3.checked == true){
//                 const string = upper + nn + str;
//                 let cl=string.length;
//                 let r="";
//                 for(let i=0; i<l; i++){
//                     r += string[Math.floor(Math.random()*cl)];
//                 }
//                 if(s_1.checked == true && s_2.checked == false){
//                     r = r.toUpperCase();
//                 }else if(s_1.checked == false && s_2.checked == true){
//                     r = r.toLowerCase();
//                 }
//                 let add=document.createElement("div");
//                 add.textContent = r;
//                 let area=document.getElementById("area");
//                 area.appendChild(add);
//             }else if(s_2.checked == true && s_3.checked == true){
//                 const string = lower + nn + str;
//                 let cl=string.length;
//                 let r="";
//                 for(let i=0; i<l; i++){
//                     r += string[Math.floor(Math.random()*cl)];
//                 }
//                 if(s_1.checked == true && s_2.checked == false){
//                     r = r.toUpperCase();
//                 }else if(s_1.checked == false && s_2.checked == true){
//                     r = r.toLowerCase();
//                 }
//                 let add=document.createElement("div");
//                 add.textContent = r;
//                 let area=document.getElementById("area");
//                 area.appendChild(add);
//             }else if(s_1.checked == true){
//                     const string = upper + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//             }else if(s_2.checked == true){
//                 const string = lower + str;
//                 let cl=string.length;
//                 let r="";
//                 for(let i=0; i<l; i++){
//                     r += string[Math.floor(Math.random()*cl)];
//                 }
//                 if(s_1.checked == true && s_2.checked == false){
//                     r = r.toUpperCase();
//                 }else if(s_1.checked == false && s_2.checked == true){
//                     r = r.toLowerCase();
//                 }
//                 let add=document.createElement("div");
//                 add.textContent = r;
//                 let area=document.getElementById("area");
//                 area.appendChild(add);
//             }else if(s_3.checked == true){
//                 const string = nn + str;
//                 let cl=string.length;
//                 let r="";
//                 for(let i=0; i<l; i++){
//                     r += string[Math.floor(Math.random()*cl)];
//                 }
//                 if(s_1.checked == true && s_2.checked == false){
//                     r = r.toUpperCase();
//                 }else if(s_1.checked == false && s_2.checked == true){
//                     r = r.toLowerCase();
//                 }
//                 let add=document.createElement("div");
//                 add.textContent = r;
//                 let area=document.getElementById("area");
//                 area.appendChild(add);
//             }
//             }
//     }else if(numCheckValue == "50個" && wordCheckValue == "12文字"　&& checkValue=="最強"){
//         let n=50;
//         let reset_area=document.getElementById("area");
//         reset_area.innerHTML= ""; 
//         let checks = document.getElementsByClassName('checks');
//         let str = '';
//         for ( i = 0; i < checks.length; i++) {
//             if ( checks[i].checked === true ) {
//                 str += checks[i].value;
//             }
//         }
//         console.log(str);
//             for(let i=0; i<n; i++){
//                 const l=12;
//                 const lower = "abcdefghijklmnopqrstuvwxyz"
//                 const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                 const nn = "0123456789"
//                 if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
//                     const string= lower + upper + nn + str;   //id_1 がある時upper 　　id_2lower  id_3数字
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_2.checked == true){
//                     const string = upper + lower+ str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_3.checked == true){
//                     const string = upper + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_2.checked == true && s_3.checked == true){
//                     const string = lower + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true){
//                         const string = upper + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                 }else if(s_2.checked == true){
//                     const string = lower + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_3.checked == true){
//                     const string = nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }
//                 }
//     }else if(wordCheckValue == "8文字"　|| wordCheckValue == "カスタム" && numCheckValue=="10個" && checkValue=="カスタム"){
//         let checks = document.getElementsByClassName('checks');
//         var str = '';
//         for ( i = 0; i < checks.length; i++) {
//             if ( checks[i].checked === true ) {
//                 str += checks[i].value;
//             }
//         }
//         if(wordCheckValue == "8文字"){
//                 const n=10;
//                 let reset_area=document.getElementById("area");
//                 reset_area.innerHTML= ""; 
//                 for(let i=0; i<n; i++){
//                     let l=8;
//                     const lower = "abcdefghijklmnopqrstuvwxyz"
//                     const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                     const nn = "0123456789"
//                     if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
//                         const string= lower + upper + nn + str;   //id_1 がある時upper 　　id_2lower  id_3数字
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_1.checked == true && s_2.checked == true){
//                         const string = upper + lower+ str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_1.checked == true && s_3.checked == true){
//                         const string = upper + nn + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_2.checked == true && s_3.checked == true){
//                         const string = lower + nn + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_1.checked == true){
//                             const string = upper + str;
//                             let cl=string.length;
//                             let r="";
//                             for(let i=0; i<l; i++){
//                                 r += string[Math.floor(Math.random()*cl)];
//                             }
//                             if(s_1.checked == true && s_2.checked == false){
//                                 r = r.toUpperCase();
//                             }else if(s_1.checked == false && s_2.checked == true){
//                                 r = r.toLowerCase();
//                             }
//                             let add=document.createElement("div");
//                             add.textContent = r;
//                             let area=document.getElementById("area");
//                             area.appendChild(add);
//                     }else if(s_2.checked == true){
//                         const string = lower + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_3.checked == true){
//                         const string = nn + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }
//                     }
//             console.log(str);
//         }else if(wordCheckValue == "カスタム"){
//             const n = 10
//                     const wordCustomNumber = document.getElementById("wordCustomNumber");
//                     const wordNum = wordCustomNumber.value
//                     let reset_area=document.getElementById("area");
//                     reset_area.innerHTML= ""; 
//                     for(let i=0; i<n; i++){
//                         let l=wordNum;
//                         const lower = "abcdefghijklmnopqrstuvwxyz"
//                         const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                         const nn = "0123456789"
//                         if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
//                             const string= lower + upper + nn + str;   //id_1 がある時upper 　　id_2lower  id_3数字
//                             let cl=string.length;
//                             let r="";
//                             for(let i=0; i<l; i++){
//                                 r += string[Math.floor(Math.random()*cl)];
//                             }
//                             if(s_1.checked == true && s_2.checked == false){
//                                 r = r.toUpperCase();
//                             }else if(s_1.checked == false && s_2.checked == true){
//                                 r = r.toLowerCase();
//                             }
//                             let add=document.createElement("div");
//                             add.textContent = r;
//                             let area=document.getElementById("area");
//                             area.appendChild(add);
//                         }else if(s_1.checked == true && s_2.checked == true){
//                             const string = upper + lower+ str;
//                             let cl=string.length;
//                             let r="";
//                             for(let i=0; i<l; i++){
//                                 r += string[Math.floor(Math.random()*cl)];
//                             }
//                             if(s_1.checked == true && s_2.checked == false){
//                                 r = r.toUpperCase();
//                             }else if(s_1.checked == false && s_2.checked == true){
//                                 r = r.toLowerCase();
//                             }
//                             let add=document.createElement("div");
//                             add.textContent = r;
//                             let area=document.getElementById("area");
//                             area.appendChild(add);
//                         }else if(s_1.checked == true && s_3.checked == true){
//                             const string = upper + nn + str;
//                             let cl=string.length;
//                             let r="";
//                             for(let i=0; i<l; i++){
//                                 r += string[Math.floor(Math.random()*cl)];
//                             }
//                             if(s_1.checked == true && s_2.checked == false){
//                                 r = r.toUpperCase();
//                             }else if(s_1.checked == false && s_2.checked == true){
//                                 r = r.toLowerCase();
//                             }
//                             let add=document.createElement("div");
//                             add.textContent = r;
//                             let area=document.getElementById("area");
//                             area.appendChild(add);
//                         }else if(s_2.checked == true && s_3.checked == true){
//                             const string = lower + nn + str;
//                             let cl=string.length;
//                             let r="";
//                             for(let i=0; i<l; i++){
//                                 r += string[Math.floor(Math.random()*cl)];
//                             }
//                             if(s_1.checked == true && s_2.checked == false){
//                                 r = r.toUpperCase();
//                             }else if(s_1.checked == false && s_2.checked == true){
//                                 r = r.toLowerCase();
//                             }
//                             let add=document.createElement("div");
//                             add.textContent = r;
//                             let area=document.getElementById("area");
//                             area.appendChild(add);
//                         }else if(s_1.checked == true){
//                                 const string = upper + str;
//                                 let cl=string.length;
//                                 let r="";
//                                 for(let i=0; i<l; i++){
//                                     r += string[Math.floor(Math.random()*cl)];
//                                 }
//                                 if(s_1.checked == true && s_2.checked == false){
//                                     r = r.toUpperCase();
//                                 }else if(s_1.checked == false && s_2.checked == true){
//                                     r = r.toLowerCase();
//                                 }
//                                 let add=document.createElement("div");
//                                 add.textContent = r;
//                                 let area=document.getElementById("area");
//                                 area.appendChild(add);
//                         }else if(s_2.checked == true){
//                             const string = lower + str;
//                             let cl=string.length;
//                             let r="";
//                             for(let i=0; i<l; i++){
//                                 r += string[Math.floor(Math.random()*cl)];
//                             }
//                             if(s_1.checked == true && s_2.checked == false){
//                                 r = r.toUpperCase();
//                             }else if(s_1.checked == false && s_2.checked == true){
//                                 r = r.toLowerCase();
//                             }
//                             let add=document.createElement("div");
//                             add.textContent = r;
//                             let area=document.getElementById("area");
//                             area.appendChild(add);
//                         }else if(s_3.checked == true){
//                             const string = nn + str;
//                             let cl=string.length;
//                             let r="";
//                             for(let i=0; i<l; i++){
//                                 r += string[Math.floor(Math.random()*cl)];
//                             }
//                             if(s_1.checked == true && s_2.checked == false){
//                                 r = r.toUpperCase();
//                             }else if(s_1.checked == false && s_2.checked == true){
//                                 r = r.toLowerCase();
//                             }
//                             let add=document.createElement("div");
//                             add.textContent = r;
//                             let area=document.getElementById("area");
//                             area.appendChild(add);
//                         }
//                         }
//                         console.log(wordCustomNumber.value);
//         }
//     }else if(wordCheckValue == "12文字" && numCheckValue=="10個"　&& checkValue=="カスタム"){
//         var checks = document.getElementsByClassName('checks');
//         var str = '';
//         for ( i = 0; i < checks.length; i++) {
//             if ( checks[i].checked === true ) {
//                 str += checks[i].value;
//             }
//         }
//             let n=10;
//             let reset_area=document.getElementById("area");
//             reset_area.innerHTML= ""; 
//             for(let i=0; i<n; i++){
//                 let l=12;
//                 const lower = "abcdefghijklmnopqrstuvwxyz"
//                 const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                 const nn = "0123456789"
//                 if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
//                     const string= lower + upper + nn + str;   //id_1 がある時upper 　　id_2lower  id_3数字
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_2.checked == true){
//                     const string = upper + lower+ str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_3.checked == true){
//                     const string = upper + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_2.checked == true && s_3.checked == true){
//                     const string = lower + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true){
//                         const string = upper + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                 }else if(s_2.checked == true){
//                     const string = lower + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_3.checked == true){
//                     const string = nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }
//                 }
//         console.log(str);
//     }else if(numCheckValue == "50個" && wordCheckValue == "8文字" || wordCheckValue == "カスタム"　&& checkValue=="カスタム"){
//         var checks = document.getElementsByClassName('checks');
//         var str = '';
//         for ( i = 0; i < checks.length; i++) {
//             if ( checks[i].checked === true ) {
//                 str += checks[i].value;
//             }
//         }
//         if(wordCheckValue == "8文字"){
//             const n=50;
//             const reset_area=document.getElementById("area");
//             reset_area.innerHTML= ""; 
//             for(let i=0; i<n; i++){
//                 for(let i=0; i<n; i++){
//                     let l=8;
//                     const lower = "abcdefghijklmnopqrstuvwxyz"
//                     const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                     const nn = "0123456789"
//                     if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
//                         const string= lower + upper + nn + str;   //id_1 がある時upper 　　id_2lower  id_3数字
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_1.checked == true && s_2.checked == true){
//                         const string = upper + lower+ str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_1.checked == true && s_3.checked == true){
//                         const string = upper + nn + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_2.checked == true && s_3.checked == true){
//                         const string = lower + nn + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_1.checked == true){
//                             const string = upper + str;
//                             let cl=string.length;
//                             let r="";
//                             for(let i=0; i<l; i++){
//                                 r += string[Math.floor(Math.random()*cl)];
//                             }
//                             if(s_1.checked == true && s_2.checked == false){
//                                 r = r.toUpperCase();
//                             }else if(s_1.checked == false && s_2.checked == true){
//                                 r = r.toLowerCase();
//                             }
//                             let add=document.createElement("div");
//                             add.textContent = r;
//                             let area=document.getElementById("area");
//                             area.appendChild(add);
//                     }else if(s_2.checked == true){
//                         const string = lower + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }else if(s_3.checked == true){
//                         const string = nn + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                     }
//                     }
//             }
//         console.log(str);
//         }else if(wordCheckValue == "カスタム"){
//             const n = 50
//             const wordCustomNumber = document.getElementById("wordCustomNumber");
//             const wordNum = wordCustomNumber.value
//             let reset_area=document.getElementById("area");
//             reset_area.innerHTML= ""; 
//             for(let i=0; i<n; i++){
//                 let l=wordNum;
//                 const lower = "abcdefghijklmnopqrstuvwxyz"
//                 const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                 const nn = "0123456789"
//                 if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
//                     const string= lower + upper + nn + str;   //id_1 がある時upper 　　id_2lower  id_3数字
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_2.checked == true){
//                     const string = upper + lower+ str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_3.checked == true){
//                     const string = upper + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_2.checked == true && s_3.checked == true){
//                     const string = lower + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true){
//                         const string = upper + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                 }else if(s_2.checked == true){
//                     const string = lower + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_3.checked == true){
//                     const string = nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }
//                 }
//                 console.log(wordCustomNumber.value);
//         }
//     }else if(numCheckValue == "50個" && wordCheckValue == "12文字"　&& checkValue=="カスタム"){
//         var checks = document.getElementsByClassName('checks');
//         var str = '';
//         for ( i = 0; i < checks.length; i++) {
//             if ( checks[i].checked === true ) {
//                 str += checks[i].value;
//             }
//         }
//             let n=50;
//             let reset_area=document.getElementById("area");
//             reset_area.innerHTML= ""; 
//             for(let i=0; i<n; i++){
//                 let l=12;
//                 const lower = "abcdefghijklmnopqrstuvwxyz"
//                 const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                 const nn = "0123456789"
//                 if(s_1.checked == true && s_2.checked == true && s_3.checked == true){
//                     const string= lower + upper + nn + str;   //id_1 がある時upper 　　id_2lower  id_3数字
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_2.checked == true){
//                     const string = upper + lower+ str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true && s_3.checked == true){
//                     const string = upper + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_2.checked == true && s_3.checked == true){
//                     const string = lower + nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_1.checked == true){
//                         const string = upper + str;
//                         let cl=string.length;
//                         let r="";
//                         for(let i=0; i<l; i++){
//                             r += string[Math.floor(Math.random()*cl)];
//                         }
//                         if(s_1.checked == true && s_2.checked == false){
//                             r = r.toUpperCase();
//                         }else if(s_1.checked == false && s_2.checked == true){
//                             r = r.toLowerCase();
//                         }
//                         let add=document.createElement("div");
//                         add.textContent = r;
//                         let area=document.getElementById("area");
//                         area.appendChild(add);
//                 }else if(s_2.checked == true){
//                     const string = lower + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }else if(s_3.checked == true){
//                     const string = nn + str;
//                     let cl=string.length;
//                     let r="";
//                     for(let i=0; i<l; i++){
//                         r += string[Math.floor(Math.random()*cl)];
//                     }
//                     if(s_1.checked == true && s_2.checked == false){
//                         r = r.toUpperCase();
//                     }else if(s_1.checked == false && s_2.checked == true){
//                         r = r.toLowerCase();
//                     }
//                     let add=document.createElement("div");
//                     add.textContent = r;
//                     let area=document.getElementById("area");
//                     area.appendChild(add);
//                 }
//                 }
//         console.log(str);
//     // }else if(){
//     //     wordCustomNumber
//     //     console.log(passNam.value);
//     //     console.log(quantity.value);
//     }
// }

// 強度の要素（name）を取得 
// let strengthElements=document.getElementsByName("strengthSelects"); //強度のnameの値をまとめて取得
// let len=strengthElements.length;
// let checkValue="";
// for(let i=0;i<len;i++){
//     if(strengthElements.item(i).checked){
//         checkValue=elements.item(i).value;
//     }
// }
// let target=document.getElementsByClassName("strong_none");
// if(checkValue=="強力"){
    // for(let i=0; i<target.length; i++){
    //     elements[i].addEventListener("click",() =>{
    //         target[i].style.diplay="none";
    //     });
    //     console.log("消す");
    // }
// }






console.log("test")

