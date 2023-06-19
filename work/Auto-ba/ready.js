"ui";
ui.layout(
    <frame>
    <horizontal>
        <text>先开加速器在启动工具</text>
    </horizontal>
        <button style="Widget.AppCompat.Button.Colored" id="start" text="点我启动" layout_gravity="bottom" w="*" h="auto" />
    </frame>
);
/*
ui.start.on("click", ()=>{
    var network = new ui.network.getSelectedItemPosition();
if (network = "UU") {
    function UU(){
        launch("com.netease.uu")
    };
    UU();
} else {
    toast("先开好加速器在开脚本!");
    sleep(3500);
    function game (){launch("com.nexon.bluearchive")}
}
});
*/
ui.start.click(function(){
    launch("com.nexon.bluearchive")
})
engines.execScriptFile("/sdcard/Auto-ba/work.js");