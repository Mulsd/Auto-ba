function update() {files.createWithDirs("/sdcard/Auto-ba/ready.js","/sdcard/Auto-ba/work.js");}
update();
toast("更新UI代码中");
var url1 = "https://fastly.jsdelivr.net/gh/Mulsd/Auto-ba@master/dist/Auto-ba/ready.js";
var res = http.get(url1);
if(res.statusCode != 200){
    toast("更新失败!");
}
files.writeBytes("/sdcard/Auto-ba/ready.js", res.body.bytes());
toast("更新成功");
//
toast("更新工作代码中");
var url2 = "https://fastly.jsdelivr.net/gh/Mulsd/Auto-ba@master/dist/Auto-ba/work.js";
var res = http.get(url2);
if(res.statusCode != 200){
    toast("更新失败!");
}
files.writeBytes("/sdcard/Auto-ba/work.js", res.body.bytes());
toast("更新成功");
sleep(3500);
engines.execScriptFile("/sdcard/Auto-ba/ready.js");