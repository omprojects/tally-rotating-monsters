"use strict";

var GradientsByMid = (function() { 

var data = 
{"1":{"mid":"1"},"6":{"mid":"6","hex1":"#5f1475","hex2":"#7a5dce","same":"*****"},"42":{"mid":"42"},"48":{"mid":"48","hex1":"#081e29","hex2":"#058eb8"},"52":{"mid":"52","hex1":"#f4e713","hex2":"#42da82"},"63":{"mid":"63","hex1":"#8820aa","hex2":"#4192c4"},"86":{"mid":"86","hex1":"#42da82","hex2":"#f413bc"},"89":{"mid":"89","hex1":"#f413bc","hex2":"#f2c14b"},"110":{"mid":"110","hex1":"#3f0236","hex2":"#d62b9a"},"111":{"mid":"111","hex1":"#42da82","hex2":"#f4e713"},"118":{"mid":"118","hex1":"#31a8cb","hex2":"#42da82"},"121":{"mid":"121","hex1":"#42da82","hex2":"#f4e713"},"122":{"mid":"122","hex1":"#f413bc","hex2":"#f2c14b"},"123":{"mid":"123"},"132":{"mid":"132","hex1":"#6261a8","hex2":"#2bb39c"},"137":{"mid":"137","hex1":"#ec391a","hex2":"#f9c900"},"150":{"mid":"150"},"151":{"mid":"151","hex1":"#4d7bbd","hex2":"#f6717b"},"154":{"mid":"154","hex1":"#6261a8","hex2":"#2bb39c","same":"132"},"155":{"mid":"155","hex1":"#5f1475","hex2":"#705bb8"},"158":{"mid":"158","hex1":"#31a8cb","hex2":"#42da82"},"161":{"mid":"161","hex1":"#ec391a","hex2":"#f9c900"},"165":{"mid":"165","hex1":"#6939ac","hex2":"#48daa3","same":"*****"},"169":{"mid":"169","hex1":"#6261a8","hex2":"#2bb39c","same":"132"},"170":{"mid":"170","hex1":"#6939ac","hex2":"#ec391a","same":"*****"},"171":{"mid":"171","hex1":"#48daa3","hex2":"#f9c900"},"172":{"mid":"172","hex1":"#ec391a","hex2":"#f9c900","same":"161"},"174":{"mid":"174","hex1":"#5f40bd","hex2":"#27dba9","same":"*****"},"176":{"mid":"176","hex1":"#f413bc","hex2":"#f2c14b"},"177":{"mid":"177","hex1":"#5f40bd","hex2":"#27dba9"},"178":{"mid":"178","hex1":"#6939ac","hex2":"#ec391a","same":"170"},"179":{"mid":"179","hex1":"#074381","hex2":"#9d5ef2","same":"*****"},"184":{"mid":"184","hex1":"#5f40bd","hex2":"#27dba9"},"186":{"mid":"186"},"201":{"mid":"201"},"202":{"mid":"202","hex1":"#074381","hex2":"#9d5ef2","same":"179"},"204":{"mid":"204","hex1":"#5f40bd","hex2":"#27dba9","same":"174"},"205":{"mid":"205","hex1":"#de2319","hex2":"#eec72d","same":"*****"},"207":{"mid":"207","hex1":"#058eb8","hex2":"#c6ad44"},"209":{"mid":"209","hex1":"#121a1e","hex2":"#d5000b"},"210":{"mid":"210","hex1":"#5f1475","hex2":"#705bb8","same":"6"},"215":{"mid":"215","hex1":"#6939ac","hex2":"#ec391a","same":"170"},"216":{"mid":"216","hex1":"#5f1475","hex2":"#7a5dce","same":"6"},"217":{"mid":"217","hex1":"#074381","hex2":"#9d5ef2","same":"179"},"218":{"mid":"218","hex1":"#de2319","hex2":"#eec72d","same":"205"},"221":{"mid":"221","hex1":"#463260","hex2":"#74ffc4"},"223":{"mid":"223"},"224":{"mid":"224","hex1":"#ae1ff1","hex2":"#fa271e"},"231":{"mid":"231","hex1":"#ae1ff1","hex2":"#f2da0d"},"239":{"mid":"239"},"242":{"mid":"242","hex1":"#2f0450","hex2":"#c30872","same":"*****"},"271":{"mid":"271","hex1":"#69004b","hex2":"#5300e3"},"272":{"mid":"272","hex1":"#5300e3","hex2":"#e200a0"},"274":{"mid":"274","hex1":"#129740","hex2":"#F7E639"},"277":{"mid":"277","hex1":"#f413bc","hex2":"#f2c14b"},"278":{"mid":"278","hex1":"#ae1ff1","hex2":"#fa271e"},"283":{"mid":"283","hex1":"#de2319","hex2":"#eec72d","same":"205"},"286":{"mid":"286"},"300":{"mid":"300","hex1":"#418fb0","hex2":"#59bc96"},"301":{"mid":"301","hex1":"#5f1475","hex2":"#705bb8","same":"6"},"310":{"mid":"310","hex1":"#074381","hex2":"#9d5ef2","same":"179"},"315":{"mid":"315","hex1":"#2f0450","hex2":"#c30872","same":"242"},"324":{"mid":"324","hex1":"#ae1ff1","hex2":"#fa271e"},"325":{"mid":"325","hex1":"#463260","hex2":"#74ffc4"},"326":{"mid":"326","hex1":"#a43a9f","hex2":"#f692f4"},"327":{"mid":"327","hex1":"#0356d8","hex2":"#f84bec"},"329":{"mid":"329","hex1":"#ae1ff1","hex2":"#fa271e"},"330":{"mid":"330","hex1":"#2f0450","hex2":"#c30872","same":"242"},"331":{"mid":"331","hex1":"#f3af1f","hex2":"#e2190e"},"332":{"mid":"332","hex1":"#5f1475","hex2":"#7a5dce","same":"6"},"333":{"mid":"333","hex1":"#a6134c","hex2":"#261036"},"334":{"mid":"334","hex1":"#02b65c","hex2":"#a8cd01"},"335":{"mid":"335","hex1":"#ef4138","hex2":"#f8c200","same":"*****"},"336":{"mid":"336","hex1":"#de2dca","hex2":"#f97a1f"},"338":{"mid":"338"},"379":{"mid":"379"},"381":{"mid":"381","hex1":"#63fbf0","hex2":"#ed0000"},"383":{"mid":"383","hex1":"#5300e3","hex2":"#e200a0"},"384":{"mid":"384","hex1":"#5f1475","hex2":"#7a5dce","same":"6"},"385":{"mid":"385","hex1":"#8336bd","hex2":"#f00c28"},"386":{"mid":"386","hex1":"#3957c9","hex2":"#c55fe3"},"391":{"mid":"391"},"422":{"mid":"422"},"432":{"mid":"432"},"441":{"mid":"441"},"453":{"mid":"453"},"464":{"mid":"464"},"466":{"mid":"466","hex1":"#ce218d","hex2":"#ab7dbf"},"469":{"mid":"469","hex1":"#074381","hex2":"#9d5ef2","same":"179"},"470":{"mid":"470","hex1":"#5f1475","hex2":"#7a5dce","same":"6"},"472":{"mid":"472","hex1":"#ef4138","hex2":"#f8c200","same":"335"},"473":{"mid":"473"},"477":{"mid":"477","hex1":"#32004b","hex2":"#bb1249"},"483":{"mid":"483"},"492":{"mid":"492","hex1":"#90c053","hex2":"#272798"},"552":{"mid":"552"},"589":{"mid":"589","hex1":"#5fadd1","hex2":"#98d241"},"594":{"mid":"594","hex1":"#f41182","hex2":"#5fadd1"},"596":{"mid":"596","hex1":"#5f1475","hex2":"#7a5dce","same":"6"},"625":{"mid":"625","hex1":"#ef4138","hex2":"#f8c200","same":"335"},"628":{"mid":"628","hex1":"#5f1475","hex2":"#7a5dce","same":"6"},"632":{"mid":"632","hex1":"#42da82","hex2":"#f4e713"},"637":{"mid":"637","hex1":"#5300e3","hex2":"#e200a0"},"640":{"mid":"640"},"653":{"mid":"653"},"655":{"mid":"655","hex1":"#5bd6fa","hex2":"#f17139"},"677":{"mid":"677","hex1":"#1f4fbc","hex2":"#27987f"},"680":{"mid":"680"},"681":{"mid":"681","hex1":"#60139b","hex2":"#ac4499"},"683":{"mid":"683","hex1":"#f413bc","hex2":"#42da82"},"684":{"mid":"684","hex1":"#5f1475","hex2":"#7a5dce","same":"6"}}; 

return { data: data }; 

})(); 
