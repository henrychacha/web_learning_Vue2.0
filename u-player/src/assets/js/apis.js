let base = '/api';
//轮播图
let banner = base + '/banner';
//推荐歌单
let personalized = base + '/personalized?limit=6';
//歌单详情
let songList = base + '/playlist/detail';
//推荐新音乐接口
let newSong = base + '/personalized/newsong'
//榜单
let topList = base + '/top/list'
//热门搜索
let searchHot = base + '/search/hot'
//搜索接口
let search = base + '/search'
//获取音乐Url地址接口
let songUrl = base + '/song/url'
//获取音乐详情
let songDetail = base + '/song/detail'
//获取歌词
let songLyric = base + '/lyric'
export default {
    banner,personalized,newSong,songList,
    topList,searchHot,search,
    songUrl,songDetail,songLyric
}