DROP TABLE IF EXISTS authenView;
DROP TABLE IF EXISTS viewer;
DROP TABLE IF EXISTS nation;
DROP TABLE IF EXISTS region;
DROP TABLE IF EXISTS nation;
DROP TABLE IF EXISTS streamer;
DROP TABLE IF EXISTS ping;
DROP TABLE IF EXISTS authenStreamer;
DROP TABLE IF EXISTS sponsor;
DROP TABLE IF EXISTS gamesPlayed;


CREATE TABLE authenView(
  av_name 			char(32) not null,
  av_viewid 		decimal(12,0) not null,
  av_password		varchar(32) not null,
  av_viewkey		decimal(13,0) not null
 );

CREATE TABLE viewer(
  v_name 			char(32) not null,
  v_viewkey			decimal(13,0) not null,
  v_following		varchar(1000) not null,
  v_nationid		decimal(255) not null, 
  v_regionkey		decimal(2,0) not null
 );

CREATE TABLE nation(
 n_nationid			decimal(255) not null,
 n_name				char(32) not null,
 n_regionkey		decimal(2,0) not null
);

CREATE TABLE region(
r_regionkey		decimal(2,0) not null,
r_name				char(32) not null
);

CREATE TABLE streamer(
s_name				char(25) not null,
s_gender			char(1) not null,
s_accDate		    date not null,
s_nationid			decimal(255) not null,
s_birthday			date not null,
s_streamSchedule	varchar(255) not null,
s_platform			varchar(20) not null,
s_team 				char(25) not null,
s_streamkey			decimal(15) not null,
s_gamesPlayed       char(55) not null,
s_subscriber        decimal(99999999,0) not null
);

CREATE TABLE authenStreamer(
 as_name			char(25) not null,
 as_streamid		decimal(12) not null,
 as_password		char(15) not null,
 as_ipaddress		char(32) not null,
 as_streamkey		decimal(15) not null
);

CREATE TABLE ping(
 p_avgping 			decimal(4,2) not null,
 p_ipaddress		char(32) not null,
 p_nationid			decimal(255,0) not null
);

CREATE TABLE gamesPlayed(
g_avgviewers		decimal(999999,0) not null,
g_numGames			decimal(255,0) not null,
g_gameName			char(255) not null,
g_streamerName 		char(255) not null,
g_mostPlayed		char(255) not null
);

CREATE TABLE sponsor(
spon_streamName		char(25) not null,
spon_streamkey		decimal(15) not null,
spon_company		char(25) not null
);

INSERT INTO authenStreamer(as_name, as_streamid, as_password, as_ipaddress, as_streamkey) VALUES
    ('POW3Rtv','Farzanrex','2Fo!2Gj/','98.119.18.91','001ABC4'),
    ('Liljarvis','IHasInsides','7Oa,2Hb+','117.204.228.160','003CD48'),
    ('KennyS','Fatefides','0Dr#1Hx/','134.161.176.91','0037FE5'),
    ('LilyPichu','Farzanasaex','5Ez(9Yd-','227.252.217.133','003235A'),
    ('Miss_Rage','Farzaarineet','5Nm(8Kj/','25.95.207.89','002430B'),
    ('Chica','Farzaelsh','5Bx)9Pr%','18.11.104.149','003A552'),
    ('Ms_Vixen','Ubatefuppy','3Ov%2Hw/','175.195.191.252','000FECD'),
    ('AlexiaRaye','Disguiseuppy','5Hw''7Gx#','53.6.28.188','0039B20'),
    ('QuarterJade','GratefulInsidMG','9Nu-9Ok*','155.108.244.233','0006A87'),
    ('Masayoshi','DaringInesLOL','7Ko%6Aj*','118.113.68.160','000BA9B'),
    ('Neytiri','SpitensidesOMG','2Wo/1Ty.','74.18.80.235','00353CE'),
    ('Fuslie','GrateeetLOL','5Ew,5Ml.','100.159.155.50','001DC39'),
    ('ItsRyanHiga','DaringFeMG','6Go-7Hg(','255.183.210.181','00040BA'),
    ('Gloom','SpitefetLMAO','3Rm!4Yw,','172.46.3.103','00098B9'),
    ('BrookeAB','Iamgrateful','2No$0Fh,','131.182.234.25','002E68B'),
    ('IHasCupquake','Iamdaring','4Hi%9Hh)','203.71.162.1','002634F'),
    ('Smajor1995','Iamspiteful','1On/7Ka)','89.70.25.17','00292A9'),
    ('LDShadowLady','IamFarzan','3Cd%7Wi"','168.122.29.243','000E896'),
    ('MrBeast','GuppyMilk','9Wv&5Zc/','120.123.117.208','001AD50'),
    ('Jacksepticeye','Farzapitepy','7Sf"5Px.','222.179.210.198','0021CF4'),
    ('Georgenotfound','MindOfFarzan','3Hs*5Eg#','135.94.184.54','000766C'),
    ('TSM_Bjergsen','Gamerguppy','9Io)1Sx/','213.238.74.117','000029D'),
    ('TSM_Daequan','ratefulGamer','8Ry+9Vu*','60.219.181.79','002A074'),
    ('Ninja','Trinamer','3Tf%6Ca"','85.193.75.132','0005F2D'),
    ('Tfue','Thitefuamer','5As%7Sf)','15.186.11.133','000C3A6'),
    ('Myth','DrGrateful','1Vs!1Io#','59.222.348.11','00064C9'),
    ('Pokimane','FarzanInsidespop','5Yp&7Ki+','125.55.299.6','000FC5B'),
    ('Shroud','BigGratppy','4Hw(2Gr)','858.55.222.14','000E549'),
    ('Summit1g','ItIsYeGuppy','0Mt&6Yi-','325.555.987.5','00070D6'),
    ('Nick Mercs','F4rz4n','6Ua#5Ir-','256.21.477.89','0024F0B'),
    ('DrLupo','Guppy Boy','3Jb-2Em%','52.668.991.1','003DD5B'),
    ('xQcOW','Gupdsirl','3Ih.0Oe(','43.85.86.95','0016A92'),
    ('CouRage','Guppy Person','7Ku)5Uj.','122.584.32.5','00323D3'),
    ('Sykkuno','Capateful','9An,5Yd)','35.258.451.6','0021C41'),
    ('RiceGum','IHasFeet','0Jo"0Hn/','78.255.641.3','000BB43'),
    ('Valkyrae','Totsdppy','6Tk!4Lj(','10.054.338.1','001A215'),
    ('Nadeshot','TheGrateful ','7Jm''8Ta-','84.001.41.123','000BE76'),
    ('Disguised Toast','TheGaming','1Xa#2Ak&','804.589.26.1','002E2AD'),
    ('ItsHafu','Mainese','9Kw$8Vb(','87.156.988.15','000AFAA'),
    ('Kitty Plays','Ubolirog','2Og-5Jf/','25.11.65.785','002C2A3'),
    ('LoserFruit','Diuiserog','2Hc-5Pu,','654.87.253.2','0032AE1'),
    ('DizzyKitten','SolidLipMG','7Ny&0Gy+','951.25.368.24','0021A43'),
    ('LolTyler1','SmellipsLOL','4Pz&9Ir''','24.27.298.24','003B136'),
    ('Clix','CowaripMG','4Dg%7Mh+','35.21.20.006','0034D21'),
    ('Ludwig','SolidHiOL','1Wx-3Jr*','82.549.375.21','00340A0'),
    ('Becca','SmelHipMG','5Hk&5Kc&','80.21.53.699','003251D'),
    ('xChocoBars','CowaHiMAO','7Je(3Lt(','528.126.22.4.','001754C'),
    ('Neeko','Iamsolid','2Gk#1Mn''','88.25.352.22','001006B'),
    ('Natsumiii','Iamselly','5Er.4He+','95.325.668.1','000ECE6');

INSERT INTO viewer(v_name, v_viewkey, v_following, v_nationid, v_regionkey) VALUES
    ('alexApple','024D33','Liljarvis, KennyS, Chica, Smajor1995, ItsRyanHiga',0,5),
    ('ryanRuns','01FBF3','Masayoshi, Miss_Rage, Ms_Vixen, Fuslie, LDShadowLady, MrBeast, LilyPichu, POW3Rtv',1,1),
    ('jimmyJumps','03412F','Ninja, Fuslie, ItsRyanHiga',2,1),
    ('charles34','0G6003','Valkyrae, QuarterJade, Neytiri',3,1),
    ('matthewPlays','024AD1','BrookeAB, Jacksepticeye, DrLupo',4,4),
    ('mary43','022DD8','Valkyrae, TSM_Daequan, Myth, Ninja',5,0),
    ('patriciaYes','00AFF1','Nadeshot, Pokimane, Sykkuno, BrookeAB, LilyPichu',6,3),
    ('sammy83','00865D','Myth, xQcOW, CouRage, Georgenotfound',7,3),
    ('jennifer12','03P214','BrookeAB, TSM_Bjergsen, QuarterJade, CouRage',8,2),
    ('brian54','00E637','RiceGum, Jacksepticeye',9,2),
    ('george32','02F3E1','Fuslie, RiceGum, Ms_Vixen, LilyPichu',10,3),
    ('julie65','0655DE','Ninja, Summit1g, Shroud, LDShadowLady',11,4),
    ('adam44','03D7A5','Myth, Gloom, Chica, LDShadowLady',12,2),
    ('diane56','009F21','Nadeshot, Shroud, Smajor1995, Miss_Rage, KennyS',13,4),
    ('sean42','0049F8','Valkyrae',14,0),
    ('arthur54','03C492','Myth, Summit1g, ItsRyanHiga',15,0),
    ('noah11','032B89','ItsRyanHiga, MrBeast, Gloom, Valkyrae',16,0),
    ('france88','038FC2','BrookeAB, MrBeast, LDShadowLady, Neytiri, KennyS, CouRage',17,1),
    ('hannah24','005P60','Sykkuno, Pokimane, CouRage',18,2),
    ('carlPlays','01CA9C','CouRage, Masayoshi, AlexiaRaye',19,3),
    ('walterYa','00B49D','Cordi, Neytiri, AlexiaRaye',20,4),
    ('graceHappy','0217P4','Sykkuno, Fuslie, Masayoshi',21,2),
    ('logan17','021F9E','Chica, xQcOW, Pokimane, MrBeast, Miss_Rage, Liljarvis, POW3Rtv',22,3),
    ('wayneKing','00F355','Ninja, CouRage, LDShadowLady',23,3),
    ('peachpie','024D9E','Nick Mercs, Tfue, Neytiri, Liljarvis, Nadeshot',24,1),
    ('applepie','0079B4','Valkyrae, Gloom, QuarterJade',0,5),
    ('puppyland','039B80','Nick Mercs, Ms_Vixen, Chica, POW3Rtv, Sykkuno',1,1),
    ('fandom','034EC4','DrLupo, MrBeast, Masayoshi, Valkyrae',2,1),
    ('foodland','014D4C','Nick Mercs, Tfue, Neytiri, Miss_Rage',3,1),
    ('cupcake3','01A6A7','Valkyrae, Ludwig, BrookeAB',4,4),
    ('cookiemonster','02AA0E','Disguised Toast, Kitty Plays, Sykkuno',5,0),
    ('cake8me','01RY76','CouRage, Neeko, Sykkuno, TSM_Bjergsen, POW3Rtv, Myth, Sykkuno',6,3),
    ('foodsimp0','0156FC','Shroud, xChocoBars, Sykkuno',7,3),
    ('chicken3wing','0EF195','Neeko, Nadeshot, Valkyrae, CouRage',8,2),
    ('hotdog00','006DE8','Tfue, Nadeshot, Georgenotfound',9,2),
    ('potatoland2','026D54','Natsumiii, LoserFruit, Nadeshot',10,3),
    ('dumplings222','004EB2','TSM_Daequan, Becca, TSM_Bjergsen, Nadeshot',11,4),
    ('mousemouse','0072BA','Becca, Natsumiii, ItsHafu, Valkyrae',12,2),
    ('doggiewolf','02E9BF','xChocoBars, Valkyrae, IHasCupquake',13,4),
    ('seasnow','0BN636','Ludwig, LolTyler1, Tfue, Jacksepticeye, Myth, Valkyrae',14,0),
    ('crabpeas22','011FB5','Clix, xChocoBars, Ninja, Jacksepticeye',15,0),
    ('drumstick12','013B49','Neeko, Disguised Toast, Georgenotfound, Sykkuno',16,0),
    ('snipshoe','0285C4','LolTyler1, Disguised Toast, LDShadowLady',17,1),
    ('nikemeup2','02DG8D','Disguised Toast, Myth, TSM_Daequan',18,2),
    ('compnow321','01HT40','Neeko, xChocoBars, Valkyrae, IHasCupquake',19,3),
    ('razerlaser','02710B','LoserFruit, Nadeshot, RiceGum, TSM_Daequan, Smajor1995, Myth, Valkyrae',20,4),
    ('bluewhite','038B7E','DizzyKitten, RiceGum, Smajor1995',21,2),
    ('tomatopotato','037A0A','Kitty Plays, Ludwig, LolTyler1',22,3),
    ('pusposnip2','026DCF','ItsHafu, Natsumiii, DizzyKitten, BrookeAB, QuarterJade',23,3);

    INSERT INTO nation(n_nationid, n_name, n_regionkey)VALUES
    (0,'AUSTRALIA',5),
    (1,'ARGENTINA',1),
    (2,'BRAZIL',1),
    (3,'CANADA',1),
    (4,'EGYPT',4),
    (5,'ETHIOPIA',0),
    (6,'FRANCE',3),
    (7,'GERMANY',3),
    (8,'INDIA',2),
    (9,'INDONESIA',2),
    (10,'DENMARK',3),
    (11,'IRAQ',4),
    (12,'JAPAN',2),
    (13,'JORDAN',4),
    (14,'KENYA',0),
    (15,'MOROCCO',0),
    (16,'MOZAMBIQUE',0),
    (17,'PERU',1),
    (18,'CHINA',2),
    (19,'ITALY',3),
    (20,'SAUDI ARABIA',4),
    (21,'VIETNAM',2),
    (22,'RUSSIA',3),
    (23,'UNITED KINGDOM',3),
    (24,'UNITED STATES',1);


INSERT INTO region(r_regionkey, r_name) VALUES
    (0,'AFRICA'),
    (1,'AMERICA'),
    (2,'ASIA'),
    (3,'EUROPE'),
    (4,'MIDDLE EAST'),
    (5,'OCEANIA');

INSERT INTO streamer(s_name, s_gender, s_accDate, s_nationid, s_birthday, s_streamSchedule, s_platform, s_team, s_streamkey, s_gamesPlayed, s_subscriber) VALUES
    ('POW3Rtv','M','2019-04-26',19,27,'Monday','Twitch','Fnatic','001ABC4','COD, Overwatch',1200000),
    ('Liljarvis','M','2016-10-07',24,18,'Monday','Twitch','FaZe Clan','003CD48','Fortnite',785000),
    ('KennyS','M','2013-11-05',6,25,'Wednesday','Twitch','G2 Esports','0037FE5','CSGO',360000),
    ('LilyPichu','F','2017-07-22',24,28,'Tuesday','Twitch','OfflineTv','003235A','AmongUs, Minecraft, LoL',1700000),
    ('Miss_Rage','F','2015-10-08',0,30,'Tuesday','Twitch','N/A','002430B','LoL, Valorant, WoW',368000),
    ('Chica','F','2015-03-18',24,26,'Thursday','Twitch','TSM','003A552','Fortnite',1300000),
    ('Ms_Vixen','F','2019-07-08',24,33,'Monday','Twitch','TeamVGaming','000FECD','COD, Grounded, Conan Exiles',337000),
    ('AlexiaRaye','F','2016-08-18',24,25,'Friday','Twitch','N/A','0039B20','Minecraft, AmongUs, Dead by Daylight',379000),
    ('QuarterJade','F','2019-04-13',24,23,'Friday','Twitch','Twitch Ambassador','0006A87','Valorant, AmongUs, Minecraft',425000),
    ('Masayoshi','M','2015-07-22',24,23,'Saturday','Twitch','N/A','000BA9B','Valorant, AmongUs, Minecraft',214000),
    ('Neytiri','F','2019-12-06',24,23,'Sunday','Twitch','N/A','00353CE','Minecraft, Valorant, Genshin Impact',100000),
    ('Fuslie','F','2019-04-13',24,27,'Tuesday','Twitch','N/A','001DC39','Valorant, AmongUs, Minecraft',496000),
    ('ItsRyanHiga','M','2014-01-15',24,30,'Monday','Twitch','N/A','00040BA','Valorant, AmongUs, Minecraft',301000),
    ('Gloom','F','2017-03-14',3,29,'Thursday','YouTube','N/A','00098B9','AmongUs',5700000),
    ('BrookeAB','F','2018-08-22',24,21,'Friday','Twitch','100 Thieves','002E68B','COD, AmongUs, Phasmophobia',841000),
    ('IHasCupquake','F','2013-06-17',24,32,'Thursday','Twitch','N/A','002634F','AmongUs, Phasmophobia, The Long Dark',179000),
    ('Smajor1995','M','2020-03-15',23,24,'Wednesday','Twitch','N/A','00292A9','AmongUs, Minecraft, Phasmophobia',200000),
    ('LDShadowLady','F','2017-03-08',23,28,'Monday','Twitch','N/A','000E896','AmongUs, Minecraft, Sims',242000),
    ('MrBeast','M','2017-05-13',24,22,'Tuesday','YouTube','N/A','001AD50','Minecraft, AmongUs',10300000),
    ('Jacksepticeye','M','2014-07-27',23,30,'Thursday','Twitch','N/A','0021CF4','APEX, AmongUs, FallGuys',1600000),
    ('Georgenotfound','M','2019-01-29',23,23,'Wednesday','Twitch','N/A','000766C','AmongUs, Phasmophobia, Minecraft',1300000),
    ('TSM_Bjergsen','M','2018-06-11',10,24,'Saturday','Twitch','TSM','000029D','LoL',1500000),
    ('TSM_Daequan','M','2019-01-14',24,26,'Tuesday','Twitch','TSM','002A074','COD, Fortnite',3800000),
    ('Ninja','M','2019-06-12',24,29,'Monday','Twitch','N/A','0005F2D','Valorant, Fortnite, Dead by Daylight',16100000),
    ('Tfue','M','2016-09-21',24,22,'Monday','Twitch','FaZe Clan','000C3A6','COD, AmongUs, CSGO',9500000),
    ('Myth','M','2019-09-11',24,21,'Monday','Twitch','TSM','00064C9','Valorant, APEX, AmongUs',7000000),
    ('Pokimane','F','2016-01-26',24,24,'Wednesday','Twitch','OfflineTv','000FC5B','AmongUs, Valorant, Genshin Impact',6300000),
    ('Shroud','M','2015-05-16',3,26,'Tuesday','Twitch','Cloud9','000E549','APEX, Assassin''s Creed, Valorant',8400000),
    ('Summit1g','M','2019-11-09',24,33,'Tuesday','Twitch','1G Squad','00070D6','PUBG, CSGO, Valorant',5700000),
    ('Nick Mercs','M','2020-06-13',24,29,'Thursday','Twitch','FaZe Clan','0024F0B','COD, APEX',4500000),
    ('DrLupo','M','2016-07-18',24,33,'Monday','Twitch','Rogue','003DD5B','Escape From Tarkov, Destiny 2, APEX',4300000),
    ('xQcOW','M','2014-12-01',3,24,'Friday','Twitch','N/A','0016A92','Minecraft, AmongUs, WoW',4100000),
    ('CouRage','M','2020-11-08',24,26,'Friday','YouTube','100 Thieves','00323D3','COD, AmongUs',3130000),
    ('Sykkuno','M','2016-12-11',24,28,'Saturday','Twitch','N/A','0021C41','AmongUs, Minecraft, LoL',1300000),
    ('RiceGum','M','2016-06-11',24,23,'Sunday','Twitch','N/A','000BB43','Fortnite',930000),
    ('Valkyrae','F','2015-03-10',24,28,'Tuesday','YouTube','100 Thieves','001A215','AmongUs, Minecraft, LoL',2000000),
    ('Nadeshot','M','2015-02-06',24,28,'Monday','Twitch','100 Thieves','000BE76','Valorant, COD, AmongUs',1600000),
    ('Disguised Toast','M','2019-03-20',3,28,'Thursday','Facebook','OfflineTv','002E2AD','Valorant, AmongUs, Minecraft',1000000),
    ('ItsHafu','F','2015-03-26',24,28,'Friday','Twitch','G2 Esports','000AFAA','WoW, LoL, Hearthstone',963000),
    ('Kitty Plays','F','2018-06-28',3,27,'Thursday','Twitch','Team Kitty','002C2A3','FallGuys',1100000),
    ('LoserFruit','F','2013-03-29',0,27,'Wednesday','Twitch','Cucks','0032AE1','AmongUs, Fortnite, Watch Dogs',2100000),
    ('DizzyKitten','F','2020-04-28',24,26,'Monday','Twitch','Ader','0021A43','APEX, Phasmophobia, Genshin Impact',632000),
    ('LolTyler1','M','2019-08-19',24,25,'Tuesday','Twitch','N/A','003B136','LoL',3900000),
    ('Clix','M','2014-10-02',24,15,'Thursday','Twitch','NRG','0034D21','Fortnite',2600000),
    ('Ludwig','M','2017-03-21',24,25,'Wednesday','Twitch','Shill Gang','00340A0','AmongUs, Witch It, Risk',769000),
    ('Becca','F','2019-01-11',24,27,'Saturday','Twitch','N/A','003251D','LoL, AmongUs',367000),
    ('xChocoBars','F','2019-08-20',3,26,'Tuesday','Twitch','N/A','001754C','AmongUs, Phasmophobia, Minecraft',630000),
    ('Neeko','F','2015-05-18',24,23,'Monday','Twitch','100 Thieves','001006B','AmongUs',282000),
    ('Natsumiii','F','2013-06-21',3,29,'Tuesday','Twitch','GenG Esports','000ECE6','AmongUs, Minecraft, LoL',220000);


   INSERT INTO authenView VALUES
    ('alexApple','snowman','3Xn&9Fh,','01AA04'),
    ('ryanRuns','chicken','5Vd$8So''','01FBF3'),
    ('jimmyJumps','hamburger','3So#5Kv/','03412F'),
    ('charles34','potato','4Df!6Ma,','0G6003'),
    ('matthewPlays','creampie','6Do-4Mi#','024AD1'),
    ('mary43','babanaice','8Ml(3So''','022DD8'),
    ('patriciaYes','ladder','6Ck&2Ep/','00AFF1'),
    ('sammy83','snipping','1Nr%1Hn+','00865D'),
    ('jennifer12','newspaper','7Vs!9Yx.','03P214'),
    ('brian54','roadtrip','0Nr+3Yb*','00E637'),
    ('george32','gambling','2Lw!0Lh,','02F3E1'),
    ('julie65','roronoro','0Ts''7Dy/','0655DE'),
    ('adam44','epsorts','2Uf%5Ps&','03D7A5'),
    ('diane56','areantime','2Oa"5Hd$','009F21'),
    ('sean42','drivenight','7Re!1He.','0049F8'),
    ('arthur54','mountain','1Cp.9Bf$','03C492'),
    ('noah11','fingers','9Qw/3Bz*','032B89'),
    ('france88','muscles','2Gi/6Xy)','038FC2'),
    ('hannah24','stomach','2Wa+3Ti"','005P60'),
    ('carlPlays','algorithm','0Et&3Mc+','01CA9C'),
    ('walterYa','computer','5Av/7Ki)','00B49D'),
    ('graceHappy','laptop','4Iw-8Dg,','0217P4'),
    ('logan17','snapback','0Xz&0Na"','021F9E'),
    ('wayneKing','disneynow','5Fd"6Vg.','00F355'),
    ('peachpie','slopyslope','5Wr''8If''','024D9E'),
    ('applepie','codenames','7Qe,1Mp%','0079B4'),
    ('puppyland','resistance','5Gu$3Rh%','039B80'),
    ('fandom','cableline','7Ca*9Li(','034EC4'),
    ('foodland','eggtart','9Bi"1Za#','014D4C'),
    ('cupcake3','tacotaco','7Kp&8Qj(','01A6A7'),
    ('cookiemonster','drinksoda','6Ma(0Zi+','02AA0E'),
    ('cake8me','waterbottle','3Qs*2Pm%','01RY76'),
    ('foodsimp0','snackaroo','2Xt#2Rj)','0156FC'),
    ('chicken3wing','chipschips','1Nn!7Ev,','0EF195'),
    ('hotdog00','speakers','2Cc$5Gi%','006DE8'),
    ('potatoland2','needbass','3Xe"8Nk%','026D54'),
    ('dumplings222','papertowel','4Zk-4Wa(','004EB2'),
    ('mousemouse','shaking','6Ri+1Je''','0072BA'),
    ('doggiewolf','vibration','4Yk''3Jd(','02E9BF'),
    ('seasnow','tornado','8Fb*7Dc"','0BN636'),
    ('crabpeas22','pumping','6Rf-1Im''','011FB5'),
    ('drumstick12','pulsing','2Ln+7Wm''','013B49'),
    ('snipshoe','pajamas','1Gc$7Jq)','0285C4'),
    ('nikemeup2','street','8Qw/9Ne*','02DG8D'),
    ('compnow321','supreme','2Hw)9Ri*','01HT40'),
    ('razerlaser','windows','6Jl/8Fr&','02710B'),
    ('bluewhite','insulation','3Vz.5Rm.','038B7E'),
    ('tomatopotato','lotionnow','0Mp*9Fq/','037A0A'),
    ('pusposnip2','cardboard','5Aw$4Fl-','026DCF');
    
INSERT INTO ping(p_avgping, p_ipaddress, p_nationid) VALUES
    (23,'98.119.18.91',19),
    (38,'117.204.228.160',24),
    (35,'134.161.176.91',6),
    (34,'227.252.217.133',24),
    (46,'25.95.207.89',0),
    (61,'18.11.104.149',24),
    (58,'175.195.191.252',24),
    (54,'53.6.28.188',24),
    (20,'155.108.244.233',24),
    (31,'118.113.68.160',24),
    (55,'74.18.80.235',24),
    (62,'100.159.155.50',24),
    (16,'255.183.210.181',24),
    (51,'172.46.3.103',3),
    (34,'131.182.234.25',24),
    (24,'203.71.162.1',24),
    (22,'89.70.25.17',23),
    (58,'168.122.29.243',23),
    (65,'120.123.117.208',24),
    (20,'222.179.210.198',23),
    (68,'135.94.184.54',23),
    (67,'213.238.74.117',10),
    (16,'60.219.181.79',24),
    (52,'85.193.75.132',24),
    (32,'15.186.11.133',24),
    (45,'59.222.348.11',24),
    (66,'125.55.299.6',24),
    (60,'858.55.222.14',3),
    (38,'325.555.987.5',24),
    (42,'256.21.477.89',24),
    (32,'52.668.991.1',24),
    (64,'43.85.86.95',3),
    (24,'122.584.32.5',24),
    (32,'35.258.451.6',24),
    (63,'78.255.641.3',24),
    (29,'10.054.338.1',24),
    (27,'84.001.41.123',24),
    (62,'804.589.26.1',3),
    (58,'87.156.988.15',24),
    (53,'25.11.65.785',3),
    (48,'654.87.253.2',0),
    (55,'951.25.368.24',24),
    (59,'24.27.298.24',24),
    (22,'35.21.20.006',24),
    (55,'82.549.375.21',24),
    (52,'80.21.53.699',24),
    (52,'528.126.22.4.',3),
    (26,'88.25.352.22',24),
    (55,'95.325.668.1',3);

INSERT INTO gamesPlayed(g_avgviewers, g_numGames, g_gameName, g_streamerName, g_mostPlayed) VALUES
    (2777,2,'Fortnite','POW3Rtv','Fortnite'),
    (3645,3,'Valorant','Liljarvis','CSGO'),
    (8143,3,'CSGO','KennyS','Minecraft'),
    (8221,1,'Minecraft','LilyPichu','Minecraft'),
    (3849,3,'Minecraft','Miss_Rage','FallGuys'),
    (4507,2,'CSGO','Chica','LoL'),
    (9554,3,'AmongUs','Ms_Vixen','LoL'),
    (3708,1,'FallGuys','AlexiaRaye','Fortnite'),
    (7387,1,'Fortnite','QuarterJade','Minecraft'),
    (8188,1,'Minecraft','Masayoshi','LoL'),
    (4777,3,'Minecraft','Neytiri','Minecraft'),
    (8612,3,'CSGO','Fuslie','Valorant'),
    (5023,3,'Fortnite','ItsRyanHiga','AmongUs'),
    (2190,1,'LoL','Gloom','Fortnite'),
    (8901,1,'LoL','BrookeAB','LoL'),
    (3080,1,'Fortnite','iHasCupquake','Fortnite'),
    (5233,1,'Valorant','Smajor1995','Fortnite'),
    (5110,1,'LoL','LDShadowLady','LoL'),
    (3047,3,'Minecraft','MrBeast','Minecraft'),
    (8566,2,'Fortnite','Jacksepticeye','Fortnite'),
    (4682,3,'Fortnite','Georgenotfound','CSGO'),
    (8156,1,'LoL','TSM_Bjergsen','CSGO'),
    (9730,2,'LoL','TSM_Daequan','Minecraft'),
    (4058,1,'Minecraft','Ninja','Fortnite'),
    (1343,3,'Fortnite','Tfue','Fortnite'),
    (9740,3,'Valorant','Myth','CSGO'),
    (2772,3,'CSGO','Pokimane','Minecraft'),
    (712,3,'Minecraft','Shroud','Minecraft'),
    (9995,3,'Minecraft','Summit1g','FallGuys'),
    (891,2,'CSGO','Nick Mercs','LoL'),
    (9119,3,'AmongUs','DrLupo','LoL'),
    (1422,2,'FallGuys','xQcOW','Fortnite'),
    (8500,2,'Fortnite','CouRage','Minecraft'),
    (639,2,'Minecraft','Sykkuno','LoL'),
    (6801,3,'Minecraft','RiceGum','Minecraft'),
    (4358,2,'CSGO','Valkyrae','Valorant'),
    (5219,2,'Fortnite','Nadeshot','AmongUs'),
    (2861,2,'LoL','Disguised Toast','Fortnite'),
    (5151,1,'LoL','itsHafu','LoL'),
    (6434,3,'Fortnite','Kitty Plays','Fortnite'),
    (2751,1,'Valorant','LoserFruit','Fortnite'),
    (4660,3,'LoL','DizzyKitten','LoL'),
    (7387,3,'Minecraft','LolTyler1','Minecraft'),
    (2473,3,'Fortnite','Clix','Fortnite'),
    (7488,1,'Fortnite','Ludwig','CSGO'),
    (1492,3,'LoL','Becca','CSGO'),
    (8637,1,'LoL','xChocoBars','Minecraft'),
    (1002,3,'Minecraft','Neeko','Fortnite'),
    (3854,2,'AmongUs','Natsumiii','CSGO');


INSERT INTO sponsor(spon_streamName, spon_streamkey, spon_company) VALUES
    ('POW3Rtv','001ABC4','NIKE'),
    ('Liljarvis','003CD48','ADIDAS'),
    ('KennyS','0037FE5','NIKE'),
    ('LilyPichu','003235A','CORSAIR'),
    ('Miss_Rage','002430B','LOGITECH'),
    ('Chica','003A552','LOGITECH'),
    ('Ms_Vixen','000FECD','RAZER'),
    ('AlexiaRaye','0039B20','NIKE'),
    ('QuarterJade','0006A87','RAZER'),
    ('Masayoshi','000BA9B','HYPERX'),
    ('Neytiri','00353CE','HYPERX'),
    ('Fuslie','001DC39','ADIDAS'),
    ('ItsRyanHiga','00040BA','LOGITECH'),
    ('Gloom','00098B9','CORSAIR'),
    ('BrookeAB','002E68B','TOTINOS'),
    ('IHasCupquake','002634F','CORSAIR'),
    ('Smajor1995','00292A9','NIKE'),
    ('LDShadowLady','000E896','RAZER'),
    ('MrBeast','001AD50','LOGITECH'),
    ('Jacksepticeye','0021CF4','ASUS'),
    ('Georgenotfound','000766C','ASUS'),
    ('TSM_Bjergsen','000029D','GIGABYTE'),
    ('TSM_Daequan','002A074','GIGABYTE'),
    ('Ninja','0005F2D','REDBULL'),
    ('Tfue','000C3A6','REDBULL'),
    ('Myth','00064C9','HYPERX'),
    ('Pokimane','000FC5B','GIGABYTE'),
    ('Shroud','000E549','NVIDIA'),
    ('Summit1g','00070D6','NVIDIA'),
    ('Nick Mercs','0024F0B','AMD'),
    ('DrLupo','003DD5B','CORSAIR'),
    ('xQcOW','0016A92','REDBULL'),
    ('CouRage','00323D3','TOTINOS'),
    ('Sykkuno','0021C41','LOGITECH'),
    ('RiceGum','000BB43','RAZER'),
    ('Valkyrae','001A215','TOTINOS'),
    ('Nadeshot','000BE76','TOTINOS'),
    ('Disguised Toast','002E2AD','GIGABYTE'),
    ('ItsHafu','000AFAA','HYPERX'),
    ('Kitty Plays','002C2A3','NIKE'),
    ('LoserFruit','0032AE1','ADIDAS'),
    ('DizzyKitten','0021A43','REDBULL'),
    ('LolTyler1','003B136','ASUS'),
    ('Clix','0034D21','RAZER'),
    ('Ludwig','00340A0','LOGITECH'),
    ('Becca','003251D','AMD'),
    ('xChocoBars','001754C','NVIDIA'),
    ('Neeko','001006B','TOTINOS'),
    ('Natsumiii','000ECE6','AMD');


--#1 
--View of all the streamers in Alphabetical order. Prints all the streamers with all their information
SELECT *
FROM streamer
ORDER BY s_name ASC;

--#2
--View all the streamers that has followers and sorting by Alphabetical order, Prints all streamer name.
SELECT s_name
FROM viewer, streamer
WHERE s_subscriber > '0'
GROUP BY s_name
ORDER BY s_name ASC;

--#3
--Check for all the streamers that plays valorant from america and list the team they play for. Prints the streamer name and the streamer's team.
SELECT s_name, s_team
FROM streamer, nation, region
WHERE s_nationid = n_nationid AND
    n_regionkey = r_regionkey AND
    s_gamesPlayed LIKE '%Valorant%' AND
    r_name = 'AMERICA';

--#4 
--Find the viewers that are from Europe that includes myth. Prints the viewer name and the amount of people they are following
SELECT DISTINCT v_name
FROM streamer, viewer, nation, region
WHERE v_following LIKE '%Myth%' AND
    v_nationid = n_nationid AND
    n_regionkey = r_regionkey AND
    r_name = 'EUROPE';

--#5
--Print all the games that ninja plays
SELECT s_gamesPlayed
FROM streamer, gamesPlayed
WHERE s_name = 'Ninja'
GROUP BY s_gamesPlayed;

--#6
--List all the streamers that are sponsored by logitech. Prints the name of all streamers.
SELECT s_name
FROM sponsor, streamer
WHERE spon_streamkey = s_streamkey AND
    spon_streamName = s_name AND
    spon_company = 'LOGITECH';

--#7
--Find the nation with the most streamer. Print all the nation and the amount of streamer
SELECT n_name, MAX(streamName)
FROM nation, streamer,
    (SELECT COUNT(s_name) AS streamName, s_nationid
    FROM streamer
    GROUP BY s_nationid) streamCount
WHERE streamCount.s_nationid = n_nationid
GROUP BY n_name;


--#8
--Find the streamer that are on twitch and streaming on monday. Sort by gender.
SELECT s_name 
FROM streamer
WHERE s_platform = 'Twitch' AND
    s_streamSchedule = 'Monday'
ORDER BY s_gender ASC;

--#9
--Find the streamer that plays minecraft or valorant. Print the streamer name
SELECT s_name, s_gamesPlayed
From streamer, gamesPlayed
WHERE s_gamesPlayed LIKE '%WoW%'
UNION
SELECT s_name, s_gamesPlayed
From streamer, gamesPlayed
WHERE s_gamesPlayed LIKE '%Phasmophobia%';


--#10
--Find the viewer that follows ninja and myth. Print all the viewer
SELECT v_name
FROM viewer, streamer
WHERE v_following LIKE '%Ninja%'
INTERSECT
SELECT v_name
FROM viewer, streamer
WHERE v_following LIKE '%Myth%';

--#11
--Find the amount of female streamer in the united states. Print the number of female streamer
SELECT COUNT(s_name)
FROM streamer, nation
WHERE s_nationid = n_nationid AND
    s_gender = 'F' AND
    n_name = 'UNITED STATES';

--#12
--Find the total amount of streaming platform. Print the number of platform
SELECT COUNT(DISTINCT s_platform)
FROM streamer;

--#13
--Find the streamer that are streaming on Monday, Tuesday, or Friday that are from canada. Print the streamer name
SELECT s_name
FROM streamer, nation
WHERE (s_streamSchedule = 'Monday' OR s_streamSchedule = 'Tuesday' OR s_streamSchedule = 'Friday') AND
    s_nationid = n_nationid AND
    n_name = 'CANADA';

--#14
--Find the streamer that started after 2018. Print the streamer name and year started streaming
SELECT s_name, s_accDate
FROM streamer
WHERE strftime('%Y', s_accDate) > '2018';

--#15
--find the teams that have more than 3 streamers. Print the team name
SELECT s_team
FROM streamer
GROUP BY s_team
HAVING COUNT(s_name) > 3;

--#16
--find the streamer that plays league from america. Print the streamer name, the game, and region name
SELECT s_name, s_gamesPlayed, r_name
FROM streamer, gamesPlayed , region, nation
WHERE s_nationid = n_nationid AND
    n_regionkey = r_regionkey AND
    r_name = 'AMERICA' AND
    s_gamesPlayed LIKE '%LoL%'
GROUP BY s_name
ORDER BY s_name DESC;

--#17
--Find when Valkyrae would be streaming. Print the day when he would be streaming
SELECT s_streamSchedule
FROM streamer
WHERE s_name = 'Valkyrae';

--#18
--Find streamers that are female, that plays AmongUs, that is from canada. Print the streamer name, and team
SELECT DISTINCT s_name , s_team
FROM streamer, nation, gamesPlayed
WHERE s_gender = 'F' AND
    s_gamesPlayed LIKE '%AmongUs%' AND
    s_nationid = n_nationid AND
    n_name = 'CANADA';


--#19
--update the team for a streamer.
UPDATE streamer
SET s_team = 'NOT TSM'
WHERE s_name = 'Myth';

SELECT s_name, s_team
FROM streamer
WHERE s_name = 'Myth';

--#20
--Find all the companies that sponsors and sort them by name. Print the company name
SELECT spon_company
FROM sponsor, streamer
GROUP BY spon_company
ORDER BY spon_company ASC;

--#21
--Find the streamer that is on green team. Print the name of the streamer
SELECT s_name, spon_company
FROM streamer, sponsor
WHERE s_team = '100 Thieves' AND
    spon_company = "TOTINOS" AND
    spon_streamName = s_name;

--#22
--Find the streamer with the least subscriber. Print all information about the subsriber
SELECT *
FROM streamer
WHERE s_name IN
    (SELECT streamName
    FROM
        (SELECT s_name AS streamName,MIN(s_subscriber)
        FROM streamer) leastSub);

--#23 
--DELETE the streamer with the most subscriber(ninja). Print the streamer 
DELETE FROM streamer
WHERE s_name = 'Ninja';

SELECT *
FROM streamer
WHERE s_name IN
    (SELECT streamName
    FROM
        (SELECT s_name AS streamName,MAX(s_subscriber)
        FROM streamer) leastSub);

--#24 
--update the streamer with the least subscriber(neytiri) to +200000 subscriber. Print the streamer
UPDATE streamer
SET s_subscriber = '300000'
WHERE s_name = 'Neytiri';

SELECT *
FROM streamer
WHERE s_name = 'Neytiri';

--#25
--Find the streamer with the most subscriber. Print all information about the subsriber
SELECT *
FROM streamer
WHERE s_name IN
    (SELECT streamName
    FROM
        (SELECT s_name AS streamName,MAX(s_subscriber)
        FROM streamer) leastSub);

--#26
--DELETE all streamer that are under 27
DELETE FROM streamer
WHERE s_birthday < '27';

SELECT * 
FROM streamer;


