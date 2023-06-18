"ui";
ui.layout(
    <frame>
        <button id="start" text="点我启动" layout_gravity="bottom" w="*" h="*" />
    </frame>
);
ui.start.click(function(){
    launch("com.nexon.bluearchive")
})
