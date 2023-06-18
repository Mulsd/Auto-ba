var url1 = "https://fastly.jsdelivr.net/gh/Mulsd/Auto-ba@master/dist/Auto-ba/ready.js";
var res = http.get(url);
if(res.statusCode != 200){
    toast("更新失败!");
}
files.writeBytes("/sdcard/Auto-ba/ready.js", res.body.bytes());
toast("更新成功")