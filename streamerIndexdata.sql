CREATE TABLE authenView(
  av_name 			char(32) not null,
  av_viewid 		decimal(12,0) not null,
  av_password		varchar(32) not null,
  av_viewkey		decimal(13,0) not null
 );

CREATE TABLE viewer (
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
s_accDate		date not null,
s_nationid			decimal(255) not null,
s_birthday			date not null,
s_streamSchedule	varchar(255) not null,
s_platform			varchar(20) not null,
s_team 				char(25) not null,
s_streamkey			decimal(15) not null,
s_gamesPlayed       char(55) not null
);

CREATE TABLE authenStreamer(
 as_name				char(25) not null,
 as_streamid			decimal(12) not null,
 as_password			char(15) not null,
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
g_streamerName 				char(255) not null,
g_mostPlayed		char(255) not null
);

CREATE TABLE sponsor(
spon_streamName		char(25) not null,
spon_streamkey		decimal(15) not null,
spon_company		char(25) not null
);

INSERT INTO authenStreamer VALUES
    ('Reynold','thavers0','4YeB1E6kpbf','98.119.18.91',3.67107E+14),
    ('Silvan','asidey1','QZj5D6MaHzb','117.204.228.160',3.80547E+14),
    ('Hamish','sgrutchfield2','w89xXj9oZ1wU','134.161.176.91',7.82865E+14),
    ('Stern','lkienzle3','HRzD0zOs','227.252.217.133',1.20526E+14),
    ('Samuel','aorrick4','q47N3fiAGMwK','25.95.207.89',1.63275E+14),
    ('Robby','ldeakin5','x9fMLIbl','18.11.104.149',5.16243E+14),
    ('Aldus','ggoodsell6','Xh6fGFErD','175.195.191.252',5.22071E+14),
    ('Reinold','rbearn7','8CY25dtJ','53.6.28.188',3.92379E+14),
    ('Gaston','cmein8','9TyrUZSI4y','155.108.244.233',8.9887E+14),
    ('Angie','mmairs9','QuuYb2','118.113.68.160',1.39986E+14),
    ('Gannon','bpercivala','WjaPJHN','74.18.80.235',8.84829E+14),
    ('Sigismundo','nkittimanb','WwInLAx','100.159.155.50',3.70417E+14),
    ('Corby','mgrolmannc','9osO2Vbm','255.183.210.181',7.34365E+14),
    ('Marshal','kmulroyd','sT5hK6yI','172.46.3.103',9.43338E+14),
    ('Mitch','hedmundsone','eHgT66','131.182.234.25',9.34215E+14),
    ('Ara','dbradanef','b54q1swuMt2W','203.71.162.1',8.81192E+14),
    ('Frieda','ccaughang','0mBiDn','89.70.25.17',7.00684E+14),
    ('Cordi','phunsworthh','0L6zkbLDeqY','168.122.29.243',7.87863E+14),
    ('Crin','ghiziri','7AtgX7pYWCSg','120.123.117.208',4.56492E+14),
    ('Augusta','bmathew1h','o42mTXnHvV','222.179.210.198',2.31121E+14),
    ('Ariel','dvandenveldenk','9WBECihS','135.94.184.54',1.00586E+14),
    ('Marilee','gsyplusl','tFo6k8','213.238.74.117',4.1623E+14),
    ('Joellyn','dleatherlandm','91qDHXMxZ40Q','60.219.181.79',9.214E+14),
    ('Sandy','cstansburyn','3Sj9Qf','85.193.75.132',4.75412E+14);

INSERT INTO viewer VALUES
    ('alexApple',5.5289E+12,'Reynold',12,2),
    ('ryanRuns',3.43028E+12,'Silvan',1,1),
    ('jimmyJumps',9.17467E+12,'Hamish',14,0),
    ('charles34',7.8495E+12,'Stern',6,3),
    ('matthewPlays',2.09676E+12,'Samuel',5,0),
    ('mary43',1.50353E+12,'Robby',20,4),
    ('patriciaYes',2.51282E+12,'Aldus',5,0),
    ('sammy83',3.73683E+12,'Ara',18,2),
    ('jennifer12',1.15326E+11,'Frieda',21,2),
    ('brian54',5.91727E+12,'Cordi',22,3),
    ('george32',7.43066E+12,'Crin',16,0),
    ('julie65',1.18784E+12,'Augusta',16,0),
    ('adam44',4.84773E+12,'Ariel',24,1),
    ('diane56',7.94857E+12,'Marilee',24,1),
    ('sean42',5.79544E+12,'Joellyn',24,1),
    ('arthur54',3.77302E+12,'Corby',24,1),
    ('noah11',6.27589E+12,'Marshal',23,3),
    ('france88',7.81752E+12,'Corby',23,3),
    ('hannah24',8.20267E+12,'Ara',23,3),
    ('carlPlays',2.35155E+12,'Frieda',12,2),
    ('walterYa',5.32717E+12,'Cordi',9,2),
    ('graceHappy',1.63337E+12,'Crin',2,1),
    ('logan17',1.46208E+12,'Hamish',3,1),
    ('wayneKing',9.17467E+12,'Stern',19,3);

    INSERT INTO nation VALUES
    (0,'ALGERIA',0),
    (1,'ARGENTINA',1),
    (2,'BRAZIL',1),
    (3,'CANADA',1),
    (4,'EGYPT',4),
    (5,'ETHIOPIA',0),
    (6,'FRANCE',3),
    (7,'GERMANY',3),
    (8,'INDIA',2),
    (9,'INDONESIA',2),
    (10,'IRAN',4),
    (11,'IRAQ',4),
    (12,'JAPAN',2),
    (13,'JORDAN',4),
    (14,'KENYA',0),
    (15,'MOROCCO',0),
    (16,'MOZAMBIQUE',0),
    (17,'PERU',1),
    (18,'CHINA',2),
    (19,'ROMANIA',3),
    (20,'SAUDI ARABIA',4),
    (21,'VIETNAM',2),
    (22,'RUSSIA',3),
    (23,'UNITED KINGDOM',3),
    (24,'UNITED STATES	',1);

    INSERT INTO region VALUES
    (0,'AFRICA'),
    (1,'AMERICA'),
    (2,'ASIA'),
    (3,'EUROPE'),
    (4,'MIDDLE EAST');

INSERT INTO streamer VALUES
    ('Reynold','m','2018-05-06',24,'1996-03-17','Monday','twitch','red',3.67107E+14,'Fortnite'),
    ('Silvan','f','2015-08-29',2,'2004-05-07','Monday','youtube','blue',3.80547E+14,'Valorant'),
    ('Hamish','a','2013-09-22',4,'1998-01-15','Wednesday','mixr','green',7.82865E+14,'CSGO'),
    ('Stern','m','2011-12-10',6,'1994-08-01','Tuesday','twitch','orange',1.20526E+14,'Minecraft'),
    ('Samuel','f','2019-05-09',12,'1993-05-24','Tuesday','twitch','blue',1.63275E+14,'Minecraft'),
    ('Robby','a','2018-07-13',14,'1991-04-21','Thursday','twitch','blue',5.16243E+14,'CSGO'),
    ('Aldus','a','2008-12-18',16,'1994-08-26','Monday','youtube','red',5.22071E+14,'AmongUs'),
    ('Reinold','m','2012-01-04',7,'1988-02-10','Friday','twitch','green',3.92379E+14,'FallGuys'),
    ('Gaston','f','2006-07-08',1,'2000-04-14','Friday','twitch','red',8.9887E+14,'Fortnite'),
    ('Angie','m','2017-01-31',18,'1989-02-28','Saturday','mixr','green',1.39986E+14,'Minecraft'),
    ('Gannon','f','2020-03-11',22,'1992-09-19','Sunday','twitch','green',8.84829E+14,'Minecraft'),
    ('Sigismundo','f','2015-03-07',21,'1997-09-22','Tuesday','twitch','red',3.70417E+14,'CSGO'),
    ('Corby','f','2008-05-02',14,'1989-11-03','Monday','youtube','blue',7.34365E+14,'Fortnite'),
    ('Marshal','m','2010-09-07',21,'1988-04-27','Thursday','youtube','red',9.43338E+14,'LoL'),
    ('Mitch','m','2008-06-12',24,'1988-10-14','Friday','youtube','green',9.34215E+14,'LoL'),
    ('Ara','f','2004-09-17',15,'1999-01-10','Thursday','twitch','green',8.81192E+14,'Fortnite'),
    ('Frieda','m','2009-05-19',22,'1994-09-14','Wednesday','twitch','orange',7.00684E+14,'Valorant'),
    ('Cordi','f','2015-07-02',7,'1998-03-10','Monday','mixr','green',7.87863E+14,'LoL'),
    ('Crin','m','2020-08-11',8,'2003-12-02','Tuesday','twitch','red',4.56492E+14,'Minecraft'),
    ('Augusta','m','2010-07-13',13,'2003-05-23','Thursday','twitch','orange',2.31121E+14,'Fortnite'),
    ('Ariel','m','2013-06-11',11,'2001-02-25','Wednesday','youtube','blue',1.00586E+14,'Fortnite'),
    ('Marilee','f','2012-04-13',24,'2000-01-12','Saturday','twitch','orange',4.1623E+14,'LoL'),
    ('Joellyn','m','2009-03-10',17,'1993-10-09','Saturday','twitch','blue',9.214E+14,'LoL'),
    ('Sandy','f','2007-06-12',24,'1987-11-30','Tuesday','twitch','green',4.75412E+14,'Minecraft');

    INSERT INTO authenView VALUES
    ('alexApple',1.86317E+11,'9j4Ldzn2sKL',5.5289E+12),
    ('ryanRuns',9.37009E+11,'7DxG2MeH',3.43028E+12),
    ('jimmyJumps',25833812917,'4bYRK8BgZ',9.17467E+12),
    ('charles34',6.20957E+11,'d85NJeHnwBYP',7.8495E+12),
    ('matthewPlays',1.28191E+11,'kEp9ZebvV',2.09676E+12),
    ('mary43',9.92093E+11,'nHUkOrPT7Ns',1.50353E+12),
    ('patriciaYes',2.77799E+11,'OJ8N7PFkuKSU',2.51282E+12),
    ('sammy83',5.37653E+11,'1Z3AnDBFZF',3.73683E+12),
    ('jennifer12',5.11109E+11,'FYcnAAC1',1.15326E+11),
    ('brian54',4.48127E+11,'giF9FmI2g',5.91727E+12),
    ('george32',5.42417E+11,'o2HzCXkWBYY',7.43066E+12),
    ('julie65',5.72768E+11,'OrTm5kV',1.18784E+12),
    ('adam44',5.48136E+11,'TMauTVNv',4.84773E+12),
    ('diane56',4.68769E+11,'SPfEFr',7.94857E+12),
    ('sean42',8.09989E+11,'nloYaHY',5.79544E+12),
    ('arthur54',2.93857E+11,'xXQJWiD',3.77302E+12),
    ('noah11',9.34772E+11,'GTUk8Zp1O',6.27589E+12),
    ('france88',6.26073E+11,'NjvP0Q',7.81752E+12),
    ('hannah24',27394296604,'vJett1B1I2hJ0Ty8',8.20267E+12),
    ('carlPlays',2.17035E+11,'wA3XtMVczG1',2.35155E+12),
    ('walterYa',6.52804E+11,'qKW2j1P4',5.32717E+12),
    ('graceHappy',8.57801E+11,'b6FYhdXu',1.63337E+12),
    ('logan17',1.9198E+11,'ck8YLBD0',1.46208E+12),
    ('wayneKing',31353297957,'X70vCFxJ',9.17467E+12);

INSERT INTO ping VALUES
    (12,'98.119.18.91',24),
    (83,'117.204.228.160',2),
    (88,'134.161.176.91',4),
    (40,'227.252.217.133',6),
    (66,'25.95.207.89',12),
    (21,'18.11.104.149',14),
    (48,'175.195.191.252',16),
    (27,'53.6.28.188',7),
    (67,'155.108.244.233',1),
    (33,'118.113.68.160',18),
    (19,'74.18.80.235',22),
    (66,'100.159.155.50',21),
    (14,'255.183.210.181',14),
    (27,'172.46.3.103',21),
    (22,'131.182.234.25',24),
    (52,'203.71.162.1',15),
    (31,'89.70.25.17',22),
    (7,'168.122.29.243',7),
    (35,'120.123.117.208',8),
    (18,'222.179.210.198',13),
    (43,'135.94.184.54',11),
    (14,'213.238.74.117',24),
    (4,'60.219.181.79',17),
    (3,'85.193.75.132',24);

INSERT INTO gamesPlayed VALUES
    (160,3,'Fortnite','thavers0','Fortnite'),
    (702,4,'Valorant','asidey1','CSGO'),
    (342,2,'CSGO','sgrutchfield2','Minecraft'),
    (633,3,'Minecraft','lkienzle3','Minecraft'),
    (427,2,'Minecraft','aorrick4','FallGuys'),
    (1110,3,'CSGO','ldeakin5','LoL'),
    (1137,4,'AmongUs','ggoodsell6','LoL'),
    (183,5,'FallGuys','rbearn7','Fortnite'),
    (382,2,'Fortnite','cmein8','Minecraft'),
    (754,7,'Minecraft','mmairs9','LoL'),
    (920,6,'Minecraft','bpercivala','Minecraft'),
    (76,4,'CSGO','nkittimanb','Valorant'),
    (1014,5,'Fortnite','mgrolmannc','AmongUs'),
    (8,2,'LoL','kmulroyd','Fortnite'),
    (420,2,'LoL','hedmundsone','LoL'),
    (364,4,'Fortnite','dbradanef','Fortnite'),
    (15,3,'Valorant','ccaughang','Fortnite'),
    (344,1,'LoL','phunsworthh','LoL'),
    (44,1,'Minecraft','ghiziri','Minecraft'),
    (5,1,'Fortnite','bmathew1h','Fortnite'),
    (88,4,'Fortnite','dvandenveldenk','CSGO'),
    (604,6,'LoL','gsyplusl','CSGO'),
    (177,7,'LoL','dleatherlandm','Minecraft'),
    (56,2,'Minecraft','cstansburyn','Fortnite');

INSERT INTO sponsor VALUES
    ('Reynold',3.67107E+14,'NRG'),
    ('Silvan',3.80547E+14,'TSM'),
    ('Hamish',7.82865E+14,'LQD'),
    ('Stern',1.20526E+14,'TSM'),
    ('Samuel',1.63275E+14,'NRG'),
    ('Robby',5.16243E+14,'FAZE'),
    ('Aldus',5.22071E+14,'FAZE'),
    ('Reinold',3.92379E+14,'TSM'),
    ('Gaston',8.9887E+14,'LQD'),
    ('Angie',1.39986E+14,'NRG'),
    ('Gannon',8.84829E+14,'BBG'),
    ('Sigismundo',3.70417E+14,'BBG'),
    ('Corby',7.34365E+14,'FAZE'),
    ('Marshal',9.43338E+14,'NIP'),
    ('Mitch',9.34215E+14,'T1'),
    ('Ara',8.81192E+14,'LQD'),
    ('Frieda',7.00684E+14,'T1'),
    ('Cordi',7.87863E+14,'FAZE'),
    ('Crin',4.56492E+14,'FAZE'),
    ('Augusta',2.31121E+14,'T1'),
    ('Ariel',1.00586E+14,'BBG'),
    ('Marilee',4.1623E+14,'NRG'),
    ('Joellyn',9.214E+14,'BBG'),
    ('Sandy',4.75412E+14,'TSM');



--#1 
--View of all the streamers in Alphabetical order. Prints all the streamers with all their information
SELECT *
FROM streamer
ORDER BY s_name DESC;

--#2
--View all the streamers that has followers and sorting by Alphabetical order, Prints all streamer name.
SELECT  s_name
FROM viewer, streamer
WHERE v_following = s_name
ORDER BY s_name ASC;

--#3
--Check for all the streamers that plays valorant from america and list the team they play for. Prints the streamer name and the streamer's team.
SELECT s_name, s_team
FROM streamer, nation, region
WHERE s_nationid = n_nationid AND
    n_regionkey = r_regionkey AND
    r_name = "AMERICA";

--#4 
--Find the viewers that are following less than 5 streamers that includes myth. Prints the viewer name and the amount of people they are following
SELECT v_name, COUNT(v_following) AS totalFollowing
FROM streamer, viewer
WHERE s_name LIKE "%Reynold%" AND
    v_following = s_name
GROUP BY v_name
HAVING totalFollowing < "5";

--#5
--Print all the games that ninja plays
SELECT g_gameName
FROM streamer, gamesPlayed
WHERE s_name = "Reynold";

--#6
--List all the companies sponsors ninja. Prints the name of all companies.
SELECT spon_company
FROM sponsor, streamer
WHERE spon_streamkey = s_streamkey AND
    spon_streamName = s_name AND
    s_name = "Reynold";

--#7
--Find the nation with the most streamer. Print the nation and amount of streamer
SELECT n_name, mostStreamer
FROM nation, streamer,
    (SELECT MAX(s_name) AS mostStreamer
    FROM nation, streamer
    WHERE s_nationid = n_nationid) sCount
GROUP BY n_name;


--#8
--Find the streamer that are on twitch and streaming on monday. Sort by gender.
SELECT s_name 
FROM streamer
WHERE s_platform = "twitch" AND
    s_streamSchedule = "Monday"
ORDER BY s_gender ASC;



--#9
--Find the streamer that plays minecraft or valorant. Print the streamer name
SELECT s_name
From streamer, gamesPlayed
WHERE s_gamesPlayed = "Minecraft"
UNION
SELECT s_name
From streamer, gamesPlayed
WHERE s_gamesPlayed = "Valorant";


--#10
--Find the viewer that follows ninja and myth
SELECT v_name
FROM viewer, streamer
WHERE v_following = "Reynold"
UNION
SELECT v_name
FROM viewer, streamer
WHERE v_following = "Crin";

--#11
--Find the amount of female streamer in the united states. Print the number of female streamer
SELECT COUNT(s_name)
FROM streamer, nation
WHERE s_nationid = n_nationid AND
    s_gender = "f" AND
    n_name = "UNITED STATES";

--#12
--Find the total amount of streaming platform. Print the number of platform
SELECT COUNT(DISTINCT s_platform)
FROM streamer;

--#13
--Find the streamer that are streaming on Monday, Tuesday, or Friday that are from canada. Print the streamer name
SELECT s_name
FROM streamer, nation
WHERE (s_streamSchedule = "Monday" OR s_streamSchedule = "Tuesday" OR s_streamSchedule = "Friday") AND
    s_nationid = n_nationid AND
    n_name = "VIETNAM";

--#14
--Find the streamer that started after 2015. Print the streamer name and year started streaming
SELECT s_name, s_accDate
FROM streamer
WHERE strftime("%Y", s_accDate) > "2015";

--#15
--find the teams that have more than 3 streamers. Print the team name
SELECT s_team 
FROM streamer
GROUP BY s_team
HAVING COUNT(s_name) > 3;

--#16
--find the streamer that plays league from america. Print the streamer name, the game, and region name
SELECT DISTINCT s_name, g_gameName, r_name
FROM streamer, gamesPlayed , region, nation
WHERE s_nationid = n_nationid AND
    n_regionkey = r_regionkey AND
    r_name = "AMERICA" AND
    g_gameName = "LoL"
ORDER BY s_name DESC;

--#17
--Find when myth would be streaming. Print the day when he would be streaming
SELECT s_streamSchedule
FROM streamer
WHERE s_name = "Reynold";

--#18
--Find streamers that are female, that plays fallguys, that is from canada. Print the streamer name, and team
SELECT DISTINCT s_name , s_team
FROM streamer, nation, gamesPlayed
WHERE s_gender = "f" AND
    s_gamesPlayed = "Fortnite" AND
    s_nationid = n_nationid AND
    n_name = "ARGENTINA";


--#19
--update the team for a streamer.
UPDATE streamer
SET s_team = "green"
WHERE s_name = "Reynold";

SELECT s_name, s_team
FROM streamer
WHERE s_name = "Reynold";

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
WHERE s_team = "green" AND
    spon_company = "TSM" AND
    spon_streamName = s_name;

--#22
--
