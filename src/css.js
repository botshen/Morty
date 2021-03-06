const string = `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*::before {
    box-sizing: border-box
}

*::after {
    box-sizing: border-box
}

body {
    background: #d5f1da;
    min-height: 100vh;
}
.frame {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 500px;
    background: #d5f1da;
    overflow: hidden;
}
/*
 * Morty 的大头
 */
.head {
    width: 335px;
    height: 335px;
    border-radius: 50% 50% 45% 45%;
    border: 1px solid #666;
    background: #fed8b1;
    position: absolute;
    transform: translate(180px, 100px);
    box-shadow: 0 -50px 0 10px #935613, 0 -50px 0 11px #666;
}
/*
 * 两只无神的眼睛
 */
.head .eye1,
.head .eye2 {
    position: absolute;
    top: 78px;
    width: 122px;
    height: 120px;
    border: 1px solid #666;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: inset 0 0 0 55px #fff, inset 0 0 0 70px #666;
}
.head .eye1:after, .head .eye1:before,
.head .eye2:after,
.head .eye2:before {
    position: absolute;
    display: block;
    content: "";
}
.head .eye1 {
    left: 32px;
    border-radius: 50% 50% 45% 45%;
}
.head .eye1:before {
    width: 70px;
    height: 40px;
    transform: rotate(-25deg);
    border-radius: 50%;
    top: -25px;
    left: 10px;
    border-top: 1px solid rgba(0, 0, 0, 0.7);
    z-index: -1;
}
.head .eye1:after {
    width: 70px;
    height: 40px;
    transform: rotate(30deg);
    border-radius: 50%;
    bottom: -5px;
    left: -10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.7);
    z-index: -1;
}
.head .eye2 {
    left: 182px;
    border-radius: 50% 50% 48% 45%;
}
.head .eye2:before {
    width: 70px;
    height: 40px;
    transform: rotate(25deg);
    border-radius: 50%;
    top: -25px;
    left: 35px;
    border-top: 1px solid rgba(0, 0, 0, 0.7);
    z-index: -1;
}
.head .eye2:after {
    width: 80px;
    height: 25px;
    transform: rotate(-30deg);
    border-radius: 50%;
    bottom: -5px;
    left: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.7);
    z-index: -1;
}
/*
 * 这里是鼻子
 */
.head .nose {
    position: absolute;
    width: 50px;
    height: 30px;
    top: 185px;
    left: 145px;
    transform: rotate(45deg);
    border-radius: 50% 40% 50% 30%;
    border-right: 1px solid rgba(0, 0, 0, 0.7);
    background: rgba(255, 0, 0, 0);
}
/*
 * 这里是嘴巴
 */
.head .mouth {
    position: absolute;
    width: 60px;
    height: 25px;
    background: #780202;
    top: 270px;
    left: 130px;
    border-radius: 80px 80px 25px 25px;
    box-shadow: inset 0 0 0 1px #000;
}
.head .mouth:after {
    display: block;
    content: "";
    position: absolute;
    width: 70px;
    height: 16px;
    background: #fed8b1;
    top: 15px;
    left: 0;
    border-radius: 50% 50% 0 0;
}
/*
 * 飞出来两只圆耳朵
 */
.ear1,
.ear2 {
    display: block;
    position: absolute;
    content: "";
    background: #fed8b1;
    border: 1px solid #666;
    border-radius: 50%;
}

.ear1 {
    width: 78px;
    height: 75px;
    top: 250px;
    left: 150px;
    z-index: -1;
}
.ear2 {
    width: 78px;
    height: 70px;
    top: 250px;
    left: 465px;
    z-index: -1;
}
/*
 * 黄色的衣服
 */
.body {
    position: absolute;
    top: 400px;
    left: 220px;
    border-radius: 50% 50% 0 0;
    z-index: -1;
    width: 255px;
    height: 250px;
    background: #fdfe76;
    border: 1px solid #666;
}
/*
 * 好了，呆呆的Morty送给你
 */
 `
export default string;