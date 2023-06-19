function update() {files.createWithDirs("/sdcard/Auto-ba/ready.js");}
update();
toast("尝试下载最新代码");
var url1 = "https://fastly.jsdelivr.net/gh/Mulsd/Auto-ba@master/dist/Auto-ba/ready.js";
var res = http.get(url1);
if(res.statusCode != 200){
    toast("更新失败!");
}
files.writeBytes("/sdcard/Auto-ba/ready.js", res.body.bytes());
toast("更新成功");
sleep(3500);
engines.execScriptFile("/sdcard/Auto-ba/ready.js");