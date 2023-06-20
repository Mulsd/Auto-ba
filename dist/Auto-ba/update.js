/**
脚本完全开源,地址 github.com/Mulsd/Auto-ba/
最后编辑时间 2023年6月20日20:27:56
**/
(function (_0x3d54b7) {
    var _0x2f5b04 = a1_0x1d44, _0x1773d9 = {};
    function _0x158f4a(_0x21eb4a) {
        var _0x18baba = a1_0x1d44;
        if (_0x1773d9[_0x21eb4a])
            return _0x1773d9[_0x21eb4a][_0x18baba(0x159)];
        var _0x5ae114 = _0x1773d9[_0x21eb4a] = {
            'i': _0x21eb4a,
            'l': ![],
            'exports': {}
        };
        return _0x3d54b7[_0x21eb4a][_0x18baba(0x156)](_0x5ae114[_0x18baba(0x159)], _0x5ae114, _0x5ae114[_0x18baba(0x159)], _0x158f4a), _0x5ae114['l'] = !![], _0x5ae114[_0x18baba(0x159)];
    }
    return _0x158f4a['m'] = _0x3d54b7, _0x158f4a['c'] = _0x1773d9, _0x158f4a['d'] = function (_0x57c896, _0x5ddf09, _0x565f17) {
        var _0x43e876 = a1_0x1d44;
        !_0x158f4a['o'](_0x57c896, _0x5ddf09) && Object[_0x43e876(0x158)](_0x57c896, _0x5ddf09, {
            'enumerable': !![],
            'get': _0x565f17
        });
    }, _0x158f4a['r'] = function (_0x3d3f73) {
        var _0x17c0ca = a1_0x1d44;
        typeof Symbol !== _0x17c0ca(0x155) && Symbol['toStringTag'] && Object[_0x17c0ca(0x158)](_0x3d3f73, Symbol[_0x17c0ca(0x15f)], { 'value': 'Module' }), Object['defineProperty'](_0x3d3f73, _0x17c0ca(0x14d), { 'value': !![] });
    }, _0x158f4a['t'] = function (_0x3b4f00, _0x3d6d29) {
        var _0x1479a4 = a1_0x1d44;
        if (_0x3d6d29 & 0x1)
            _0x3b4f00 = _0x158f4a(_0x3b4f00);
        if (_0x3d6d29 & 0x8)
            return _0x3b4f00;
        if (_0x3d6d29 & 0x4 && typeof _0x3b4f00 === 'object' && _0x3b4f00 && _0x3b4f00[_0x1479a4(0x14d)])
            return _0x3b4f00;
        var _0x2f24ae = Object[_0x1479a4(0x152)](null);
        _0x158f4a['r'](_0x2f24ae), Object[_0x1479a4(0x158)](_0x2f24ae, _0x1479a4(0x153), {
            'enumerable': !![],
            'value': _0x3b4f00
        });
        if (_0x3d6d29 & 0x2 && typeof _0x3b4f00 != _0x1479a4(0x15e)) {
            for (var _0x2a149d in _0x3b4f00)
                _0x158f4a['d'](_0x2f24ae, _0x2a149d, function (_0x46185e) {
                    return _0x3b4f00[_0x46185e];
                }['bind'](null, _0x2a149d));
        }
        return _0x2f24ae;
    }, _0x158f4a['n'] = function (_0x47921a) {
        var _0x568c8f = _0x47921a && _0x47921a['__esModule'] ? function _0x1cd4d2() {
            return _0x47921a['default'];
        } : function _0x1be355() {
            return _0x47921a;
        };
        return _0x158f4a['d'](_0x568c8f, 'a', _0x568c8f), _0x568c8f;
    }, _0x158f4a['o'] = function (_0x146f5d, _0x57328e) {
        var _0x2e07e3 = a1_0x1d44;
        return Object['prototype']['hasOwnProperty'][_0x2e07e3(0x156)](_0x146f5d, _0x57328e);
    }, _0x158f4a['p'] = '', _0x158f4a(_0x158f4a['s'] = _0x2f5b04(0x154));
}({
    '../work/Auto-ba/update.js': function (_0x4de6e4, _0x80eed9) {
        var _0x4ec408 = a1_0x1d44;
        function _0x12372d() {
            files['createWithDirs']('/sdcard/Auto-ba/ready.js');
        }
        _0x12372d(), toast(_0x4ec408(0x14b));
        var _0x1e1950 = _0x4ec408(0x160), _0xd69840 = http['get'](_0x1e1950);
        _0xd69840[_0x4ec408(0x15d)] != 0xc8 && toast(_0x4ec408(0x14e));
        files[_0x4ec408(0x15a)]('/sdcard/Auto-ba/ready.js', _0xd69840[_0x4ec408(0x15b)][_0x4ec408(0x14f)]()), toast(_0x4ec408(0x151));
        function _0x28b385() {
            var _0x3c5871 = _0x4ec408;
            files['createWithDirs'](_0x3c5871(0x14c));
        }
        _0x28b385(), toast(_0x4ec408(0x157));
        var _0x445f43 = _0x4ec408(0x150), _0xd69840 = http['get'](_0x445f43);
        _0xd69840[_0x4ec408(0x15d)] != 0xc8 && toast(_0x4ec408(0x14e)), files[_0x4ec408(0x15a)](_0x4ec408(0x14c), _0xd69840['body']['bytes']()), toast(_0x4ec408(0x151)), sleep(0xdac), engines['execScriptFile'](_0x4ec408(0x15c));
    }
}));
function a1_0x1d44(_0x5d7c99, _0x3ad5bd) {
    var _0x1d4464 = a1_0x3ad5();
    return a1_0x1d44 = function (_0x2b1da2, _0x1bdbdf) {
        _0x2b1da2 = _0x2b1da2 - 0x14b;
        var _0x14e57a = _0x1d4464[_0x2b1da2];
        return _0x14e57a;
    }, a1_0x1d44(_0x5d7c99, _0x3ad5bd);
}
function a1_0x3ad5() {
    var _0x1a9b66 = [
        '更新UI代码中',
        '/sdcard/Auto-ba/work.js',
        '__esModule',
        '更新失败!',
        'bytes',
        'https://fastly.jsdelivr.net/gh/Mulsd/Auto-ba@master/dist/Auto-ba/work.js',
        '更新成功',
        'create',
        'default',
        '../work/Auto-ba/update.js',
        'undefined',
        'call',
        '更新工作代码中',
        'defineProperty',
        'exports',
        'writeBytes',
        'body',
        '/sdcard/Auto-ba/ready.js',
        'statusCode',
        'string',
        'toStringTag',
        'https://fastly.jsdelivr.net/gh/Mulsd/Auto-ba@master/dist/Auto-ba/ready.js'
    ];
    a1_0x3ad5 = function () {
        return _0x1a9b66;
    };
    return a1_0x3ad5();
}