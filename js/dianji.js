//需引入jq
/* 鼠标特效 */
// 页面加载事件
jQuery(function() {
    //给页面创建点击事件
    $("html").click(function(e) {
        //创建颜色库
        //随机颜色
        //创建颜色码
        const beforeArr = ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99', 'aa', 'bb', 'cc', 'dd', 'ee', 'ff'];
        const middleArr = ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99', 'aa', 'bb', 'cc', 'dd', 'ee', 'ff'];
        const afterArr = ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99', 'aa', 'bb', 'cc', 'dd', 'ee', 'ff'];

        //从颜色库选取一种颜色;当然这是数组的方式;随机性
        var before = Math.floor(Math.random() * beforeArr.length);
        var middle = Math.floor(Math.random() * middleArr.length);
        var after = Math.floor(Math.random() * afterArr.length);

        // console.log("前颜色码 = " + 前颜色码 + "; 中颜色码 = " + 中颜色码 + "; 后颜色码 = " + 后颜色码 + ";")
        // console.log("#" + 前颜色码库[前颜色码] + 中颜色码库[中颜色码] + 后颜色码库[后颜色码]);

        //每当鼠标点击页面随机语句
        //自强,民主,文明,和谐,自由,平等,公平,法治,爱国,敬业,诚信,友善
        var a = ["自强", "民主", "和谐", "文明", "自由", "平等", "公平", "法治", "爱国", "敬业", "诚信", "友善"];
        //创建元素; 创建的元素是span元素,这个元素的内容是"鼠标点击了第" + 点击数(这个是一个变量) + "次"
        var createEle = $("<span>").text(a[Math.floor(Math.random() * a.length)]);

        //在页面上添加span元素
        jQuery("html").append(createEle);

        //获取鼠标点击坐标
        var x = e.pageX;
        var y = e.pageY;

        //给span元素添加css样式
        createEle.css({
            "z-index": 999, //设置或获取定位对象的堆叠次序(z-index):999
            "top": y - 30, //上(top):y-20
            "left": x - 30, //左:x
            "position": "absolute", //定位:绝对定位
            "font-weight": "bold", //字体粗细:粗体
            "color": "#" + beforeArr[before] + middleArr[middle] + afterArr[after], //颜色:绿色
            "user-select": "none", //使文字不被选中
        });

        //
        createEle.animate({
                "top": 0, //上:y-20
                "opacity": 0 //透明度(opacity):0
            }, 2000, //1500,调节动画速度
            function() { //功能函数
                createEle.remove(); //$i的删除
            }
        );

    })
});