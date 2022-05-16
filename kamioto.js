//性別選択
var sex_len = Math.floor(Math.random()*2);
if(sex_len == 0){
  var sex = "男性";
}else{
  var sex = "女性";
}

//年代選択
var age_len = Math.floor(Math.random()*3);
if(age_len == 0){
  var age = "20代";
}else if(age_len == 1){
  var age = "30代";
}else{
  var age = "40代";
}

//質問1
var artist_array = ['461\u30e2\u30f3\u30d6\u30e9\u30f3', 'AIKO', 'Aly', 'Cheesa', 'Hirotausu', 'KAORI', 'KAORI&Cheesa', 'KenKen', 'Minako', 'OKU', 'Quatuor AVENA', 'R1SA', 'Salia', 'SAYOKO', 'SAYUMI', 'sotaro', 'STICK+', 'YOUJI', 'YuyaTomoi', '\u30aa\u30ab\u30c0\u30c8\u30e2\u30e4', '\u30ab\u30a6\u30dc\u30fc\u30a4\u67d3\u7530\u5c4b', '\u3058\u3093\u306e\u3086\u3046\u3053', '\u3084\u306a\u3081', '\u30ea\u30a8\u30eb', '\u4e0a\u5e73\u7530 \u4e9c\u5915', '\u4e0a\u7530 \u5320', '\u4e0b\u5185 \u611b\u5b50', '\u4e2d\u5c3e \u5065\u592a', '\u4e2d\u5cf6 \u5eb7\u96c5', '\u4e38\u5c71 \u831c\u8449', '\u4e95\u91ce \u30a2\u30ad\u30f2', '\u4ec1\u85e4 \u9ebb\u8863', '\u4f50\u3005\u6728 \u62d3', '\u4f50\u85e4 \u52c7\u4f5c', '\u4f50\u85e4 \u78a7\u7f8e', '\u4f59\u7530 \u611b\u5b50', '\u516b\u5c3e \u304b\u305a\u307e', '\u54b2\u91ce \u3086\u308a', '\u571f\u4e95 \u91cd\u5f70', '\u5800\u7530 \u6709\u5e0c', '\u5927\u897f \u7f8e\u6c99', '\u5927\u962a\u5927\u5b66\u66f8\u9053\u90e8', '\u5b89\u5ddd \u771e\u4e5f', '\u5b9d\u5b50', '\u5bae\u8107 \u6709\u5b63', '\u5c0f\u6797 \u5343\u6676', '\u5c3e\u5d0e \u85ab', '\u5c71\u4e0b \u62d3\u90ce', '\u5c71\u53e3 \u771f\u5e0c', '\u5ca9\u702c \u7ae0\u5149', '\u5ddd\u5185 \u307e\u308a\u5b50', '\u5e73\u52e2 \u590f\u6d77', '\u5e73\u85ae \u98db\u9ce5', '\u5f8c\u85e4 \u4fca\u660e', '\u5fd7\u8cc0 \u771f\u5948', '\u65b0 \u6dbc\u5e73', '\u661f\u5c71 \u5553\u4e00', '\u6728\u4f50\u8cab \u6d0b\u5e73', '\u6728\u5c71 \u4eae\u5b50', '\u698e\u672c \u6709\u5e0c', '\u6a2a\u7530 \u7267\u5b50', '\u7530\u4e2d \u831c', '\u7551\u4e2d \u7adc\u4e5f', '\u771e\u5d0e \u6709\u8cb4', '\u771f\u7802 \u7f8e\u6a39', '\u798f\u6c5f \u5143\u592a', '\u7acb\u6728 \u8cb4\u4e5f', '\u7d00\u5e73 \u6681\u4eba', '\u897f\u53e3 \u82f1\u751f', '\u897f\u6751 \u6cf3\u5b50', '\u8fbb\u5ddd \u5c1a\u4ee3', '\u8fbb\u5ddd \u90f7', '\u91d1\u4e38 \u7cbe\u5fd7', '\u9577\u8c37\u5ddd \u7a3f\u53f2', '\u98ef\u7530 \u304b\u306a\u5b50', '\u9ad8\u6a4b \u771f\u73e0','\u65b0\u9053\u611b\u5e2b', '\u6238\u68b6\u548c\u5e0c', 'WistaFernost', '\u677e\u672c\u4e00\u5e0c', 'bud&harbor', '\u30b6\u30fb\u30b9\u30ca\u30cd\u30b3\u30ba', 'The Best Regards', 'yoshioka band circle','yutori', '\u30da\u30eb\u30b7\u30ab\u30ea\u30a2', 'Conton Candy', '\u30af\u30e9\u30a4\u30ce\u30fc\u30c8'];
var artist = artist_array[Math.floor(Math.random()*artist_array.length)];

//質問4
var intro_array = ['\u304a\u3069\u308b\u30dd\u30f3\u30dd\u30b3\u30ea\u30f3','\u6d6a\u6f2b\u98db\u884c','\u4eca\u3059\u3050Kiss Me','\u3055\u3088\u306a\u3089\u4eba\u985e','OH YEAH\uff01','Dear Friend','\u60c5\u71b1\u306e\u8594\u8587','\u304f\u3061\u3073\u308b\u304b\u3089\u5a9a\u85ac','\u771f\u590f\u306e\u679c\u5b9f','\u30a4\u30d5\u30fb\u30a6\u30a4\u30fb\u30db\u30fc\u30eb\u30c9\u30fb\u30aa\u30f3\u30fb\u30c8\u30a5\u30b2\u30b6\u30fc','\u30e9\u30d6\u30fb\u30b9\u30c8\u30fc\u30ea\u30fc\u306f\u7a81\u7136\u306b','SAY YES','\u611b\u306f\u52dd\u3064','\u3069\u3093\u306a\u3068\u304d\u3082\u3002','\u306f\u3058\u307e\u308a\u306f\u3044\u3064\u3082\u96e8','\u3042\u306a\u305f\u306b\u4f1a\u3048\u3066\u3088\u304b\u3063\u305f','LADY NAVIGATION','\u3057\u3083\u307c\u3093\u7389','Eyes to me\uff0f\u5f7c\u306f\u53cb\u9054','ALONE','\u541b\u304c\u3044\u308b\u3060\u3051\u3067','\u60b2\u3057\u307f\u306f\u96ea\u306e\u3088\u3046\u306b','BLOWIN'','\u305d\u308c\u304c\u5927\u4e8b','\u6d99\u306e\u30ad\u30c3\u30b9','\u30ac\u30e9\u30ac\u30e9\u30d8\u30d3\u304c\u3084\u3063\u3066\u304f\u308b','\u3082\u3046\u604b\u306a\u3093\u3066\u3057\u306a\u3044','if','PIECE MY WISH','\u6d45\u3044\u7720\u308a','YAH YAH YAH','\u611b\u306e\u307e\u307e\u306b\u308f\u304c\u307e\u307e\u306b \u50d5\u306f\u541b\u3060\u3051\u3092\u50b7\u3064\u3051\u306a\u3044','\u30ed\u30fc\u30c9','\u30a8\u30ed\u30c6\u30a3\u30ab\u30fb\u30bb\u30d6\u30f3','\u88f8\u8db3\u306e\u5973\u795e','\u8ca0\u3051\u306a\u3044\u3067','\u6642\u306e\u6249','\u771f\u590f\u306e\u591c\u306e\u5922','\u63fa\u308c\u308b\u60f3\u3044','\u4e16\u754c\u4e2d\u306e\u8ab0\u3088\u308a\u304d\u3063\u3068','innocent world','\u30ed\u30de\u30f3\u30b9\u306e\u795e\u69d8','\u604b\u3057\u3055\u3068 \u305b\u3064\u306a\u3055\u3068 \u5fc3\u5f37\u3055\u3068','Don't Leave Me','\u7a7a\u3068\u541b\u306e\u3042\u3044\u3060\u306b','Hello\uff0cmy friend','survival dAnce\uff5eno no cry more\uff5e','\u3042\u306a\u305f\u3060\u3051\u898b\u3064\u3081\u3066\u308b','Boy Meets Girl','\u4e16\u754c\u304c\u7d42\u308b\u307e\u3067\u306f\uff65\uff65\uff65','LOVE LOVE LOVE','WOW WAR TONIGHT\uff5e\u6642\u306b\u306f\u8d77\u3053\u305b\u3088\u30e0\u30fc\u30f4\u30e1\u30f3\u30c8','HELLO','Tomorrow never knows','\u30b7\u30fc\u30bd\u30fc\u30b2\u30fc\u30e0\uff5e\u52c7\u6562\u306a\u604b\u306e\u6b4c\uff5e','Hello\uff0cAgain\uff5e\u6614\u304b\u3089\u3042\u308b\u5834\u6240\uff5e','\u5947\u8de1\u306e\u5730\u7403','TOMORROW','\u30ed\u30d3\u30f3\u30bd\u30f3','LOVE PHANTOM','\u540d\u3082\u306a\u304d\u8a69','DEPARTURES','LA\u30fbLA\u30fbLA LOVE SONG','\u30c1\u30a7\u30ea\u30fc','\u82b1\uff0dMemento-Mori\uff0d','\u7a7a\u3082\u98db\u3079\u308b\u306f\u305a','\u611b\u306e\u8a00\u970a\uff5eSpiritual Message','I'm proud','Don't wanna cry','Chase the Chance','CAN YOU CELEBRATE\uff1f','\u785d\u5b50\u306e\u5c11\u5e74','\u3072\u3060\u307e\u308a\u306e\u8a69','FACE','STEADY','PRIDE','YOU ARE THE ONE','Everything','HOWEVER','White Love','\u8a98\u60d1','\u591c\u7a7a\u30ce\u30e0\u30b3\u30a6','my graduation','\u30bf\u30a4\u30df\u30f3\u30b0','SOUL LOVE','\u9577\u3044\u9593','HONEY','\u611b\u3055\u308c\u308b\u3088\u308a \u611b\u3057\u305f\u3044','Time goes by','\u5168\u90e8\u3060\u304d\u3057\u3081\u3066\uff0f\u9752\u306e\u6642\u4ee3\u3060\u3093\u3054\uff13\u5144\u5f1f','Winter\uff0cagain','A','energy flow','Automatic','Addicted To You','Movin'on without you','LOVE\u30de\u30b7\u30fc\u30f3','BE WITH YOU','HEAVEN\u2019S DRIVE']
var intro = intro_array[Math.floor(Math.random()*intro_array.length)];

//質問5
var ityuu_array = ['\u304a\u3069\u308b\u30dd\u30f3\u30dd\u30b3\u30ea\u30f3','\u6d6a\u6f2b\u98db\u884c','\u4eca\u3059\u3050Kiss Me','\u3055\u3088\u306a\u3089\u4eba\u985e','OH YEAH\uff01','Dear Friend','\u60c5\u71b1\u306e\u8594\u8587','\u304f\u3061\u3073\u308b\u304b\u3089\u5a9a\u85ac','\u771f\u590f\u306e\u679c\u5b9f','\u30a4\u30d5\u30fb\u30a6\u30a4\u30fb\u30db\u30fc\u30eb\u30c9\u30fb\u30aa\u30f3\u30fb\u30c8\u30a5\u30b2\u30b6\u30fc','\u30e9\u30d6\u30fb\u30b9\u30c8\u30fc\u30ea\u30fc\u306f\u7a81\u7136\u306b','SAY YES','\u611b\u306f\u52dd\u3064','\u3069\u3093\u306a\u3068\u304d\u3082\u3002','\u306f\u3058\u307e\u308a\u306f\u3044\u3064\u3082\u96e8','\u3042\u306a\u305f\u306b\u4f1a\u3048\u3066\u3088\u304b\u3063\u305f','LADY NAVIGATION','\u3057\u3083\u307c\u3093\u7389','Eyes to me\uff0f\u5f7c\u306f\u53cb\u9054','ALONE','\u541b\u304c\u3044\u308b\u3060\u3051\u3067','\u60b2\u3057\u307f\u306f\u96ea\u306e\u3088\u3046\u306b','BLOWIN'','\u305d\u308c\u304c\u5927\u4e8b','\u6d99\u306e\u30ad\u30c3\u30b9','\u30ac\u30e9\u30ac\u30e9\u30d8\u30d3\u304c\u3084\u3063\u3066\u304f\u308b','\u3082\u3046\u604b\u306a\u3093\u3066\u3057\u306a\u3044','if','PIECE MY WISH','\u6d45\u3044\u7720\u308a','YAH YAH YAH','\u611b\u306e\u307e\u307e\u306b\u308f\u304c\u307e\u307e\u306b \u50d5\u306f\u541b\u3060\u3051\u3092\u50b7\u3064\u3051\u306a\u3044','\u30ed\u30fc\u30c9','\u30a8\u30ed\u30c6\u30a3\u30ab\u30fb\u30bb\u30d6\u30f3','\u88f8\u8db3\u306e\u5973\u795e','\u8ca0\u3051\u306a\u3044\u3067','\u6642\u306e\u6249','\u771f\u590f\u306e\u591c\u306e\u5922','\u63fa\u308c\u308b\u60f3\u3044','\u4e16\u754c\u4e2d\u306e\u8ab0\u3088\u308a\u304d\u3063\u3068','innocent world','\u30ed\u30de\u30f3\u30b9\u306e\u795e\u69d8','\u604b\u3057\u3055\u3068 \u305b\u3064\u306a\u3055\u3068 \u5fc3\u5f37\u3055\u3068','Don't Leave Me','\u7a7a\u3068\u541b\u306e\u3042\u3044\u3060\u306b','Hello\uff0cmy friend','survival dAnce\uff5eno no cry more\uff5e','\u3042\u306a\u305f\u3060\u3051\u898b\u3064\u3081\u3066\u308b','Boy Meets Girl','\u4e16\u754c\u304c\u7d42\u308b\u307e\u3067\u306f\uff65\uff65\uff65','LOVE LOVE LOVE','WOW WAR TONIGHT\uff5e\u6642\u306b\u306f\u8d77\u3053\u305b\u3088\u30e0\u30fc\u30f4\u30e1\u30f3\u30c8','HELLO','Tomorrow never knows','\u30b7\u30fc\u30bd\u30fc\u30b2\u30fc\u30e0\uff5e\u52c7\u6562\u306a\u604b\u306e\u6b4c\uff5e','Hello\uff0cAgain\uff5e\u6614\u304b\u3089\u3042\u308b\u5834\u6240\uff5e','\u5947\u8de1\u306e\u5730\u7403','TOMORROW','\u30ed\u30d3\u30f3\u30bd\u30f3','LOVE PHANTOM','\u540d\u3082\u306a\u304d\u8a69','DEPARTURES','LA\u30fbLA\u30fbLA LOVE SONG','\u30c1\u30a7\u30ea\u30fc','\u82b1\uff0dMemento-Mori\uff0d','\u7a7a\u3082\u98db\u3079\u308b\u306f\u305a','\u611b\u306e\u8a00\u970a\uff5eSpiritual Message','I'm proud','Don't wanna cry','Chase the Chance','CAN YOU CELEBRATE\uff1f','\u785d\u5b50\u306e\u5c11\u5e74','\u3072\u3060\u307e\u308a\u306e\u8a69','FACE','STEADY','PRIDE','YOU ARE THE ONE','Everything','HOWEVER','White Love','\u8a98\u60d1','\u591c\u7a7a\u30ce\u30e0\u30b3\u30a6','my graduation','\u30bf\u30a4\u30df\u30f3\u30b0','SOUL LOVE','\u9577\u3044\u9593','HONEY','\u611b\u3055\u308c\u308b\u3088\u308a \u611b\u3057\u305f\u3044','Time goes by','\u5168\u90e8\u3060\u304d\u3057\u3081\u3066\uff0f\u9752\u306e\u6642\u4ee3\u3060\u3093\u3054\uff13\u5144\u5f1f','Winter\uff0cagain','A','energy flow','Automatic','Addicted To You','Movin'on without you','LOVE\u30de\u30b7\u30fc\u30f3','BE WITH YOU','HEAVEN\u2019S DRIVE']
var ityuu = ityuu_array[Math.floor(Math.random()*ityuu_array.length)];

//質問9
var song18_array = ['\u304a\u3069\u308b\u30dd\u30f3\u30dd\u30b3\u30ea\u30f3','\u6d6a\u6f2b\u98db\u884c','\u4eca\u3059\u3050Kiss Me','\u3055\u3088\u306a\u3089\u4eba\u985e','OH YEAH\uff01','Dear Friend','\u60c5\u71b1\u306e\u8594\u8587','\u304f\u3061\u3073\u308b\u304b\u3089\u5a9a\u85ac','\u771f\u590f\u306e\u679c\u5b9f','\u30a4\u30d5\u30fb\u30a6\u30a4\u30fb\u30db\u30fc\u30eb\u30c9\u30fb\u30aa\u30f3\u30fb\u30c8\u30a5\u30b2\u30b6\u30fc','\u30e9\u30d6\u30fb\u30b9\u30c8\u30fc\u30ea\u30fc\u306f\u7a81\u7136\u306b','SAY YES','\u611b\u306f\u52dd\u3064','\u3069\u3093\u306a\u3068\u304d\u3082\u3002','\u306f\u3058\u307e\u308a\u306f\u3044\u3064\u3082\u96e8','\u3042\u306a\u305f\u306b\u4f1a\u3048\u3066\u3088\u304b\u3063\u305f','LADY NAVIGATION','\u3057\u3083\u307c\u3093\u7389','Eyes to me\uff0f\u5f7c\u306f\u53cb\u9054','ALONE','\u541b\u304c\u3044\u308b\u3060\u3051\u3067','\u60b2\u3057\u307f\u306f\u96ea\u306e\u3088\u3046\u306b','BLOWIN'','\u305d\u308c\u304c\u5927\u4e8b','\u6d99\u306e\u30ad\u30c3\u30b9','\u30ac\u30e9\u30ac\u30e9\u30d8\u30d3\u304c\u3084\u3063\u3066\u304f\u308b','\u3082\u3046\u604b\u306a\u3093\u3066\u3057\u306a\u3044','if','PIECE MY WISH','\u6d45\u3044\u7720\u308a','YAH YAH YAH','\u611b\u306e\u307e\u307e\u306b\u308f\u304c\u307e\u307e\u306b \u50d5\u306f\u541b\u3060\u3051\u3092\u50b7\u3064\u3051\u306a\u3044','\u30ed\u30fc\u30c9','\u30a8\u30ed\u30c6\u30a3\u30ab\u30fb\u30bb\u30d6\u30f3','\u88f8\u8db3\u306e\u5973\u795e','\u8ca0\u3051\u306a\u3044\u3067','\u6642\u306e\u6249','\u771f\u590f\u306e\u591c\u306e\u5922','\u63fa\u308c\u308b\u60f3\u3044','\u4e16\u754c\u4e2d\u306e\u8ab0\u3088\u308a\u304d\u3063\u3068','innocent world','\u30ed\u30de\u30f3\u30b9\u306e\u795e\u69d8','\u604b\u3057\u3055\u3068 \u305b\u3064\u306a\u3055\u3068 \u5fc3\u5f37\u3055\u3068','Don't Leave Me','\u7a7a\u3068\u541b\u306e\u3042\u3044\u3060\u306b','Hello\uff0cmy friend','survival dAnce\uff5eno no cry more\uff5e','\u3042\u306a\u305f\u3060\u3051\u898b\u3064\u3081\u3066\u308b','Boy Meets Girl','\u4e16\u754c\u304c\u7d42\u308b\u307e\u3067\u306f\uff65\uff65\uff65','LOVE LOVE LOVE','WOW WAR TONIGHT\uff5e\u6642\u306b\u306f\u8d77\u3053\u305b\u3088\u30e0\u30fc\u30f4\u30e1\u30f3\u30c8','HELLO','Tomorrow never knows','\u30b7\u30fc\u30bd\u30fc\u30b2\u30fc\u30e0\uff5e\u52c7\u6562\u306a\u604b\u306e\u6b4c\uff5e','Hello\uff0cAgain\uff5e\u6614\u304b\u3089\u3042\u308b\u5834\u6240\uff5e','\u5947\u8de1\u306e\u5730\u7403','TOMORROW','\u30ed\u30d3\u30f3\u30bd\u30f3','LOVE PHANTOM','\u540d\u3082\u306a\u304d\u8a69','DEPARTURES','LA\u30fbLA\u30fbLA LOVE SONG','\u30c1\u30a7\u30ea\u30fc','\u82b1\uff0dMemento-Mori\uff0d','\u7a7a\u3082\u98db\u3079\u308b\u306f\u305a','\u611b\u306e\u8a00\u970a\uff5eSpiritual Message','I'm proud','Don't wanna cry','Chase the Chance','CAN YOU CELEBRATE\uff1f','\u785d\u5b50\u306e\u5c11\u5e74','\u3072\u3060\u307e\u308a\u306e\u8a69','FACE','STEADY','PRIDE','YOU ARE THE ONE','Everything','HOWEVER','White Love','\u8a98\u60d1','\u591c\u7a7a\u30ce\u30e0\u30b3\u30a6','my graduation','\u30bf\u30a4\u30df\u30f3\u30b0','SOUL LOVE','\u9577\u3044\u9593','HONEY','\u611b\u3055\u308c\u308b\u3088\u308a \u611b\u3057\u305f\u3044','Time goes by','\u5168\u90e8\u3060\u304d\u3057\u3081\u3066\uff0f\u9752\u306e\u6642\u4ee3\u3060\u3093\u3054\uff13\u5144\u5f1f','Winter\uff0cagain','A','energy flow','Automatic','Addicted To You','Movin'on without you','LOVE\u30de\u30b7\u30fc\u30f3','BE WITH YOU','HEAVEN\u2019S DRIVE']
var song18 = song18_array[Math.floor(Math.random()*song18_array.length)];

document.forms.ttg130.elements.q_2.value = sex;
document.forms.ttg130.elements.q_16.value = age;
artist_san = Math.floor(Math.random()*100);
if(artist_san > 30){
  document.forms.ttg130.elements.q_3.value = artist + "さん";
}else{
  document.forms.ttg130.elements.q_3.value = artist;
}
document.forms.ttg130.elements.q_6.value = intro;
document.forms.ttg130.elements.q_7.value = ityuu;
document.forms.ttg130.elements.q_11.value = song18;
