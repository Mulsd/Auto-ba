var url = "https://github.com/Mulsd/Auto-ba/dist/";
var res = http.get(url);
if(res.statusCode != 200){
    toast("更新失败!");
}
files.writeBytes("/sdcard/Autoba/", res.body.bytes());
toast("更新成功")