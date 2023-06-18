"ui";
ui.layout(
    <frame>
        <button id="start" layout_gravity="bottom" gravity="center" w="*" h="auto" text="点我启动"/>
    </frame>
);
ui.start.on("click",()=>{
    engines.execScript("open", Source); 
}); 