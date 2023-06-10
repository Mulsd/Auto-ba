"ui";
ui.layout(
    <frame>
        <button id="start" layout_gravity="bottom" gravity="center" w="*" h="auto" text="点我启动"/>
    </frame>
);
ui.start.on("click",()=>{
    launch("com.nexon.bluearchive");
    setScreenMetrics(1080, 1920);
    click(1746, 857);
    sleep(2000);
    click(1540, 756);
    sleep(2000);
    click(571, 698);
    sleep(2000);
    click(690, 1014);
    sleep(2000);
    click(571, 577);
    sleep(2000);
    click(690, 1014);
    sleep(2000);
    click(1218, 897);
    sleep(2000);
    click(970, 854);
    sleep(2000);
    click(1753, 999);
    sleep(2000);
    click(961, 693);
    sleep(2000);
    back();
}); 