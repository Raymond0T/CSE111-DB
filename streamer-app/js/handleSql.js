const sqlite3 = require('sqlite3')
const Promise = require('bluebird')


class handleSql {
    constructor(dbFilePath) {
        this.db = new sqlite3.Database('./dataIndex.sqlite', (err) => {
            if (err) {
                console.log('Could not connect to database', err)
            } else {
                console.log('Connected to database')
            }
        })
    }

    all(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.all(sql, params, (err, rows) => {
                if (err) {
                    console.log('Error running sql: ' + sql)
                    console.log(err)
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
    }

    allStreamerTeam() {
        return this.all(
            "SELECT DISTINCT s_team FROM streamer ORDER BY s_team", [])
    }

    allSponsor(){
        return this.all(
            "SELECT DISTINCT spon_company FROM sponsor ORDER BY spon_company", [])
    }

    allLocation(){
        return this.all(
            "SELECT DISTINCT n_name FROM nation ORDER BY n_name", [])
    }

    //------------------------------------------------ UPDATE ACCOUNT INFO---------------------------------------------
    updateStreamer(_s_gender, _s_name, _s_birthday,_s_platform){

        return this.all(
            "update streamer " + 
            "set s_gender = COALESCE(?, s_gender), " + 
            "s_birthday = COALESCE(?, s_birthday), " +
            "s_platform = COALESCE(?, s_platform) " +  
            "WHERE s_name = '" + _s_name +"' ", [_s_gender,_s_birthday, _s_platform])
    }

    //------------------------------------------------ CHECKING THE PASSWORD AND USERNAME---------------------------------------------
    accountStreamer(_as_streamid, _as_password){
        return this.all(
            "SELECT as_name AS Streamer, s_name AS name, s_gender AS gender, s_accDate AS AccountSince, " +
            "n_name AS location, s_birthday AS age, s_streamSchedule AS Schedule, s_platform AS platform, " +
            "s_team AS team, s_streamkey AS personalKey, s_gamesPlayed AS PlayedGames, s_subscriber AS follower " +
            "FROM authenStreamer, streamer,nation " +
            "WHERE as_streamid  LIKE '%" + _as_streamid + "%' AND " +
            "s_name = as_name AND " +
            "as_streamkey = s_streamkey AND "+
            "s_nationid = n_nationid AND " +
            "as_password LIKE '%" + _as_password + "%' ", [])
    }
    accountViewer(_av_viewid, _av_password){
        return this.all(
            "SELECT av_name AS Viewer, v_name AS Name, n_name AS Location, v_following AS following, v_viewkey AS PersonalKey " +
            "FROM authenView, viewer, nation " +
            "WHERE av_viewid  LIKE '%" + _av_viewid + "%' AND " +
            "v_nationid = n_nationid AND " +
            "av_name = v_name AND " +
            "av_password LIKE '%" + _av_password + "%' ", [])
    }


    //------------------------------------------------ SQL for searchbar input ----------------------------------------------------------
    byS1(_s_name){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, s_gender AS Gender, s_accdate AS Started, s_birthday AS Age, s_platform AS Platform, s_team AS team " +
            "FROM streamer " +
            "WHERE s_name LIKE '%" + _s_name + "%' ", [])
    }
//------------------------------------------------ SQL for single filter search----------------------------------------------------------
    byF1(_s_gender){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, s_gender AS Gender, s_accdate AS Started, s_birthday AS Age, s_platform AS Platform, s_team AS team " +
            "FROM streamer " +
            "WHERE s_gender = ? ", [_s_gender])
    }

    byF2(_n_name) {
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, s_gender AS gender, s_accdate AS Started, s_birthday AS Age, s_platform AS Platform, s_team AS team, n_name AS Location " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "n_name = ? ", [_n_name])
    }

    byF3(_s_birthday) {
        return this.all(
            "SELECT DISTINCT s_name AS streamer, s_gender AS gender, s_accdate AS Started, s_birthday AS Age, s_platform AS Platform, s_team AS team " +
            "FROM streamer " +
            "WHERE s_birthday = ? ",[_s_birthday])
    }

    byF4(_s_platform) {
        return this.all(
            "SELECT DISTINCT s_name AS streamer, s_gender AS gender, s_accdate AS Started, s_birthday AS Age, s_platform AS Platform, s_team AS team " +
            "FROM streamer " +
            "WHERE s_platform = ? ",[_s_platform])
    }

    byF5(_s_team) {
        return this.all(
            "SELECT DISTINCT s_name AS streamer, s_gender AS gender, s_accdate AS Started, s_birthday AS Age, s_platform AS Platform, s_team AS team " +
            "FROM streamer " +
            "WHERE s_team = ? ",[_s_team])
    }

    byF6(_spon_company) {
        return this.all(
            "SELECT DISTINCT s_name AS streamer, s_gender AS gender, s_accdate AS Started, s_birthday AS Age, s_platform AS Platform, s_team AS team, spon_company AS Sponsor " +
            "FROM streamer, sponsor " +
            "WHERE spon_streamName = s_name AND " +
            "spon_streamkey = s_streamkey AND " +
            "spon_company = ? ",[_spon_company])
    }

    byF7(_s_gamesPlayed) {
        return this.all(
            "SELECT DISTINCT s_name AS streamer, s_gender AS gender, s_accdate AS Started, s_birthday AS Age, s_platform AS Platform, s_team AS team, s_gamesPlayed AS PlayedGames " +
            "FROM streamer " +
            "WHERE s_gamesPlayed LIKE '%" + _s_gamesPlayed + "%'",[])
    }
//------------------------------------------------ SQL for FILTER ONE + AN ADDITIONAL FILTER----------------------------------------------------------
    byF1F2(_s_gender, _n_name){
        return this.all(
            "SELECT DISTINCT s_name AS streamer, s_gender AS gender, s_accdate AS Started, s_birthday AS Age, s_platform AS Platform, s_team AS team, n_name AS Location " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND "+
            "s_gender = '" +_s_gender + "' AND " +
            "n_name = ? ",[_n_name])
    }

    byF1F3(_s_gender, _s_birthday){
        return this.all(
            "SELECT DISTINCT s_name AS streamer, s_gender AS gender, s_accdate AS Started, s_birthday AS Age, s_platform AS Platform, s_team AS team, n_name AS Location " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND "+
            "s_gender = '" +_s_gender + "' AND " +
            "s_birthday = ? ",[_s_birthday])
    }
    byF1F4(_s_gender, _s_platform){
        return this.all(
            "SELECT DISTINCT s_name AS streamer, s_gender AS gender, s_accdate AS Started, s_birthday AS Age, s_platform AS Platform, s_team AS team, n_name AS Location " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND "+
            "s_gender = '" +_s_gender + "' AND " +
            "s_platform = ? ",[_s_platform])
    }
    byF1F5(_s_gender, _s_team){
        return this.all(
            "SELECT DISTINCT s_name AS streamer, s_gender AS gender, s_accdate AS Started, s_birthday AS Age, s_platform AS Platform, s_team AS team, n_name AS Location " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND "+
            "s_gender = '" +_s_gender + "' AND " +
            "s_team = ? ",[_s_team])
    }
    byF1F6(_s_gender, _spon_company){
        return this.all(
            "SELECT DISTINCT s_name AS streamer, s_gender AS gender, s_accdate AS Started, s_birthday AS Age, s_platform AS Platform, s_team AS team, n_name AS Location,spon_company AS Sponsor " +
            "FROM streamer, nation, sponsor " +
            "WHERE s_nationid = n_nationid AND "+
            "s_gender = '" +_s_gender + "' AND " +
            "spon_streamName = s_name AND " +
            "spon_streamkey = s_streamkey AND " +
            "spon_company = ? ",[_spon_company])
    }
    byF1F7(_s_gender, _s_gamesPlayed){
        return this.all(
            "SELECT DISTINCT s_name AS streamer, s_gender AS gender, s_accdate AS Started, s_birthday AS Age, s_platform AS Platform, s_team AS team, n_name AS Location " +
            "FROM streamer, nation, sponsor " +
            "WHERE s_nationid = n_nationid AND "+
            "s_gender = '" +_s_gender + "' AND " +
            "s_gamesPlayed LIKE '%" + _s_gamesPlayed + "%'",[])
    }
//------------------------------------------------ SQL for FILTER TWO + AN ADDITIONAL FILTER----------------------------------------------------------
    byF2F3(_n_name, _s_birthday){
        return this.all(
            "SELECT s_name AS Streamer, n_name AS Location, s_birthday AS Age " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_birthday = " + _s_birthday + " AND " +
            "n_name = ?", [_n_name])
    }
    byF2F4(_n_name, _s_platform){
        return this.all(
            "SELECT s_name AS Streamer, n_name AS Location, s_platform AS Platform " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_platform = '" + _s_platform + "' AND " +
            "n_name = ?", [_n_name])
    }
    byF2F5(_n_name, _s_team){
        return this.all(
            "SELECT s_name AS Streamer, n_name AS Location, s_team AS team " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_team = '" + _s_team + "' AND " +
            "n_name = ?", [_n_name])
    }
    byF2F6(_n_name, _spon_company){
        return this.all(
            "SELECT s_name AS Streamer, n_name AS Location, spon_company AS sponsor " +
            "FROM streamer, nation, sponsor " +
            "WHERE s_nationid = n_nationid AND " +
            "spon_streamkey = s_streamkey AND " +
            "spon_streamName = s_name AND "+
            "spon_company = '" + _spon_company + "' AND " +
            "n_name = ?", [_n_name])
    }
    byF2F7(_n_name, _s_gamesPlayed){
        return this.all(
            "SELECT s_name AS Streamer, n_name AS Location, s_gamesPlayed AS PlayedGames " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_gamesPlayed LIKE '%" + _s_gamesPlayed + "%' AND "  +
            "n_name = ?", [_n_name])
    }

    //------------------------------------------------ SQL for FILTER THREE + AN ADDITIONAL FILTER----------------------------------------------------------    
    byF3F4(_s_birthday, _s_platform){
        return this.all(
            "SELECT s_name AS Streamer, n_name AS Location, s_birthday AS age " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_platform = '" + _s_platform + "' AND "  +
            "s_birthday = ?", [_s_birthday])
    }
    byF3F5(_s_birthday, _s_team){
        return this.all(
            "SELECT s_name AS Streamer, n_name AS Location, s_team AS team " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_team = '" + _s_team + "' AND "  +
            "s_birthday = ?", [_s_birthday])
    }
    byF3F6(_s_birthday, _spon_company){
        return this.all(
            "SELECT s_name AS Streamer, n_name AS Location, spon_company AS Sponsor " +
            "FROM streamer, nation,sponsor " +
            "WHERE s_nationid = n_nationid AND " +
            "spon_company = '" + _spon_company + "' AND "  +
            "spon_streamkey = s_streamkey AND " +
            "s_birthday = ?", [_s_birthday])
    }
    byF3F7(_s_birthday, _s_gamesPlayed){
        return this.all(
            "SELECT s_name AS Streamer, n_name AS Location, s_gamesPlayed AS PlayedGames " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_gamesPlayed LIKE '%" + _s_gamesPlayed + "%' AND "  +
            "s_birthday = ?", [_s_birthday])
    }
//------------------------------------------------ SQL for FILTER FOUR + AN ADDITIONAL FILTER----------------------------------------------------------  
    byF4F5(_s_platform, _s_team){
        return this.all(
            "SELECT s_name AS Streamer, n_name AS Location, s_platform AS platform, s_team AS team " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_team = '" + _s_team + "' AND "  +
            "s_platform = ? ", [_s_platform])
    }
    byF4F6(_s_platform, _spon_company){
        return this.all(
            "SELECT s_name AS Streamer, n_name AS Location, s_platform AS platform, spon_company AS Sponsor " +
            "FROM streamer, nation, sponsor " +
            "WHERE s_nationid = n_nationid AND " +
            "spon_streamkey = s_streamkey AND "+
            "spon_streamName = s_name AND " +
            "spon_company = '" + _spon_company + "' AND "  +
            "s_platform = ? ", [_s_platform])
    }
    byF4F7(_s_platform, _s_gamesPlayed){
        return this.all(
            "SELECT s_name AS Streamer, n_name AS Location, s_platform AS platform, s_gamesPlayed AS PlayedGames " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_gamesPlayed LIKE '%" + _s_gamesPlayed + "%' AND "  +
            "s_platform = ? ", [_s_platform])
    }
//------------------------------------------------ SQL for FILTER FIVE + AN ADDITIONAL FILTER----------------------------------------------------------  
    byF5F6(_s_team, _spon_company){
        return this.all(
            "SELECT s_name AS Streamer, n_name AS Location, s_team AS team, spon_company AS Sponsor " +
            "FROM streamer, nation, sponsor " +
            "WHERE s_nationid = n_nationid AND " +
            "spon_streamkey = s_streamkey AND "+
            "spon_streamName = s_name AND " +
            "spon_company = '" + _spon_company + "' AND "  +
            "s_team = ? ", [_s_team])
    }
    byF5F7(_s_team, _s_gamesPlayed){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, n_name AS Location, s_team AS team, s_gamesPlayed AS PlayedGames " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_gamesPlayed LIKE '%" + _s_gamesPlayed + "%' AND "  +
            "s_team = ? ", [_s_team])
    }
    //------------------------------------------------ SQL for FILTER ONE, TWO + AN ADDITIONAL FILTER---------------------------------------------------------- 
    byF1F2F3(_s_gender, _n_name, _s_birthday){
        return this.all(
            "SELECT s_name AS Streamer, s_gender AS gender, n_name AS Location, s_birthday AS Age " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_gender ='" + _s_gender + "' AND "  +
            "n_name = '" + _n_name +"' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    byF1F2F4(_s_gender, _n_name, _s_platform){
        return this.all(
            "SELECT s_name AS Streamer, s_gender AS gender, n_name AS Location, s_birthday AS Age, s_platform AS platform " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_gender ='" + _s_gender + "' AND "  +
            "n_name = '" + _n_name +"' AND " +
            "s_platform = ? ", [_s_platform])
    }
    byF1F2F5(_s_gender, _n_name, _s_team){
        return this.all(
            "SELECT s_name AS Streamer, s_gender AS gender, n_name AS Location, s_birthday AS Age, s_team AS Team " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_gender ='" + _s_gender + "' AND "  +
            "n_name = '" + _n_name +"' AND " +
            "s_team = ? ", [_s_team])
    }
    byF1F2F6(_s_gender, _n_name, _spon_company){
        return this.all(
            "SELECT s_name AS Streamer, s_gender AS gender, n_name AS Location, s_birthday AS Age, spon_company AS sponsor " +
            "FROM streamer, nation, sponsor " +
            "WHERE s_nationid = n_nationid AND " +
            "spon_streamkey = s_streamkey AND "+
            "spon_streamName = s_name AND " +
            "s_gender ='" + _s_gender + "' AND "  +
            "n_name = '" + _n_name +"' AND " +
            "spon_company = ? ", [_spon_company])
    }
    byF1F2F7(_s_gender, _n_name, _s_gamesPlayed){
        return this.all(
            "SELECT s_name AS Streamer, s_gender AS gender, n_name AS Location, s_birthday AS Age, s_gamesPlayed AS PlayedGames " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_gender ='" + _s_gender + "' AND "  +
            "n_name = '" + _n_name +"' AND " +
            "s_gamesPlayed LIKE '% " + _s_gamesPlayed + "%' ", [])
    }
    //------------------------------------------------ SQL for FILTER ONE, TWO + TWO ADDITIONAL FILTER---------------------------------------------------------- 
    byF1F2F3F4(_s_gender, _n_name, _s_birthday, _s_platform){
        return this.all(
            "SELECT s_name AS Streamer, s_gender AS gender, n_name AS Location, s_birthday AS Age, s_platform AS platform " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_gender ='" + _s_gender + "' AND "  +
            "n_name = '" + _n_name +"' AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    byF1F2F3F5(_s_gender, _n_name, _s_birthday, _s_team){
        return this.all(
            "SELECT s_name AS Streamer, s_gender AS gender, n_name AS Location, s_birthday AS Age, s_team AS team " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_gender ='" + _s_gender + "' AND "  +
            "n_name = '" + _n_name +"' AND " +
            "s_team = '" +_s_team +"' AND " +
            "s_birthday= ? ", [_s_birthday])
    } 
    byF1F2F3F6(_s_gender, _n_name, _s_birthday, _spon_company){
        return this.all(
            "SELECT s_name AS Streamer, s_gender AS gender, n_name AS Location, s_birthday AS Age, spon_company AS sponsor " +
            "FROM streamer, nation, sponsor " +
            "WHERE s_nationid = n_nationid AND " +
            "spon_streamName = s_name AND " +
            "spon_streamkey = s_streamkey AND " +
            "s_gender ='" + _s_gender + "' AND "  +
            "n_name = '" + _n_name +"' AND " +
            "spon_company = '" +_spon_company +"' AND " +
            "s_birthday= ? ", [_s_birthday])
    } 
    byF1F2F3F7(_s_gender, _n_name, _s_birthday, _s_gamesPlayed){
        return this.all(
            "SELECT s_name AS Streamer, s_gender AS gender, n_name AS Location, s_birthday AS Age, s_gamesPlayed AS PlayedGames " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_gender ='" + _s_gender + "' AND "  +
            "n_name = '" + _n_name +"' AND " +
            "s_gamesPlayed LIKE '%" +_s_gamesPlayed +"%' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    //------------------------------------------------ SQL for FILTER ONE, TWO + THREE ADDITIONAL FILTER---------------------------------------------------------- 
    byF1F2F3F4F5(_s_gender, _n_name, _s_birthday, _s_platform, _s_team){
        return this.all(
            "SELECT s_name AS Streamer, s_gender AS gender, n_name AS Location, s_birthday AS Age, s_platform AS platform, s_team AS team " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_gender ='" + _s_gender + "' AND "  +
            "n_name = '" + _n_name +"' AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "s_team = '" + _s_team + "' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    byF1F2F3F4F6(_s_gender, _n_name, _s_birthday, _s_platform, _spon_company){
        return this.all(
            "SELECT s_name AS Streamer, s_gender AS gender, n_name AS Location, s_birthday AS Age, s_platform AS platform, spon_company AS sponsor " +
            "FROM streamer, nation, sponsor " +
            "WHERE s_nationid = n_nationid AND " +
            "spon_streamkey = s_streamkey AND "+
            "spon_streamName = s_name AND " +
            "s_gender ='" + _s_gender + "' AND "  +
            "n_name = '" + _n_name +"' AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "spon_company = '" + _spon_company + "' AND " +
            "s_birthday= ? ", [_s_birthday])
    } 
    byF1F2F3F4F7(_s_gender, _n_name, _s_birthday, _s_platform, _s_gamesPlayed){
        return this.all(
            "SELECT s_name AS Streamer, s_gender AS gender, n_name AS Location, s_birthday AS Age, s_platform AS platform, s_gamesPlayed AS PlayedGames " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_gender ='" + _s_gender + "' AND "  +
            "n_name = '" + _n_name +"' AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "s_gamesPlayed LIKE '%" + _s_gamesPlayed + "%' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    //------------------------------------------------ SQL for FILTER ONE, TWO + FOUR ADDITIONAL FILTER---------------------------------------------------------- 
    byF1F2F3F4F5F6(_s_gender, _n_name, _s_birthday, _s_platform, _s_team, _spon_company){
        return this.all(
            "SELECT s_name AS Streamer, s_gender AS gender, n_name AS Location, s_birthday AS Age, s_platform AS platform, s_team AS team, spon_company AS sponsor " +
            "FROM streamer, nation, sponsor " +
            "WHERE s_nationid = n_nationid AND " +
            "spon_streamName = s_name AND " + 
            "spon_streamkey = s_streamkey AND "+
            "s_gender ='" + _s_gender + "' AND "  +
            "n_name = '" + _n_name +"' AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "s_team = '" + _s_team + "' AND " +
            "spon_company = '" +_spon_company + "' AND " +
            "s_birthday= ? ", [_s_birthday])
    }  
    byF1F2F3F4F5F7(_s_gender, _n_name, _s_birthday, _s_platform, _s_team, _s_gamesPlayed){
        return this.all(
            "SELECT s_name AS Streamer, s_gender AS gender, n_name AS Location, s_birthday AS Age, s_platform AS platform, s_team AS team, s_gamesPlayed AS PlayedGames " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "s_gender ='" + _s_gender + "' AND "  +
            "n_name = '" + _n_name +"' AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "s_team = '" + _s_team + "' AND " +
            "s_gamesPlayed LIKE '%" +_s_gamesPlayed + "%' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    //------------------------------------------------ SQL for FILTER ONE, TWO + FIVE ADDITIONAL FILTER---------------------------------------------------------- 
    byF1F2F3F4F5F6F7(_s_gender, _n_name, _s_birthday, _s_platform, _s_team, _spon_company, _s_gamesPlayed){
        return this.all(
            "SELECT s_name AS Streamer, s_gender AS gender, n_name AS Location, s_birthday AS Age, s_platform AS platform, s_team AS team, spon_company AS sponsor, s_gamesPlayed AS PlayedGames " +
            "FROM streamer, nation, sponsor " +
            "WHERE s_nationid = n_nationid AND " +
            "spon_streamName = s_name AND " + 
            "spon_streamkey = s_streamkey AND "+
            "s_gender ='" + _s_gender + "' AND "  +
            "n_name = '" + _n_name +"' AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "s_team = '" + _s_team + "' AND " +
            "spon_company = '" +_spon_company + "' AND " +
            "s_gamesPlayed LIKE '%" + _s_gamesPlayed +"%' AND " +
            "s_birthday= ? ", [_s_birthday])
    }     
    //------------------------------------------------ SQL for FILTER TWO, THREE + ONE ADDITIONAL FILTER---------------------------------------------------------- 
    byF2F3F4(_n_name, _s_birthday, _s_platform){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, n_name AS Location, s_birthday AS Age, s_platform AS platform " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "n_name = '" + _n_name +"' AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    byF2F3F5(_n_name, _s_birthday, _s_team){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, n_name AS Location, s_birthday AS Age, s_team AS team " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "n_name = '" + _n_name +"' AND " +
            "s_team = '" +_s_team +"' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    byF2F3F6(_n_name, _s_birthday, _spon_company){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, n_name AS Location, s_birthday AS Age, spon_company AS company " +
            "FROM streamer, nation, sponsor " +
            "WHERE s_nationid = n_nationid AND " +
            "spon_streamkey = s_streamkey AND "+
            "spon_streamName = s_name AND " +
            "n_name = '" + _n_name +"' AND " +
            "spon_company = '" +_spon_company +"' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    byF2F3F7(_n_name, _s_birthday, _s_gamesPlayed){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, n_name AS Location, s_birthday AS Age, s_gamesPlayed AS games " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "n_name = '" + _n_name +"' AND " +
            "s_gamesPlayed LIKE '%" +_s_gamesPlayed +"%' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    //------------------------------------------------ SQL for FILTER TWO, THREE + TWO ADDITIONAL FILTER---------------------------------------------------------- 
    byF2F3F4F5(_n_name, _s_birthday, _s_platform, _s_team){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, n_name AS Location, s_birthday AS Age, s_platform AS platform ,s_team AS team " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "n_name = '" + _n_name +"' AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "s_team = '" +_s_team +"' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    byF2F3F4F6(_n_name, _s_birthday, _s_platform, _spon_company){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, n_name AS Location, s_birthday AS Age, s_platform AS platform ,spon_company AS sponsor " +
            "FROM streamer, nation, sponsor " +
            "WHERE s_nationid = n_nationid AND " +
            "spon_streamkey = s_streamkey AND " +
            "spon_streamName = s_name AND " +
            "n_name = '" + _n_name +"' AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "spon_company = '" +_spon_company +"' AND " +
            "s_birthday= ? ", [_s_birthday])
    } 
    byF2F3F4F7(_n_name, _s_birthday, _s_platform, _s_gamesPlayed){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, n_name AS Location, s_birthday AS Age, s_platform AS platform ,s_gamesPlayed AS PlayedGames " +
            "FROM streamer, nation, sponsor " +
            "WHERE s_nationid = n_nationid AND " +
            "n_name = '" + _n_name +"' AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "s_gamesPlayed LIKE '%" +_s_gamesPlayed +"%' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    //------------------------------------------------ SQL for FILTER TWO, THREE + THREE ADDITIONAL FILTER---------------------------------------------------------- 
    byF2F3F4F5F6(_n_name, _s_birthday, _s_platform, _s_team, _spon_company){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, n_name AS Location, s_birthday AS Age, s_platform AS platform ,s_team AS team , spon_company AS sponsor " +
            "FROM streamer, nation,sponsor " +
            "WHERE s_nationid = n_nationid AND " +
            "spon_streamkey = s_streamkey AND " +
            "spon_streamName = s_name AND " +
            "n_name = '" + _n_name +"' AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "s_team = '" +_s_team +"' AND " +
            "spon_company = '" +_spon_company +"' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    byF2F3F4F5F7(_n_name, _s_birthday, _s_platform, _s_team, _s_gamesPlayed){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, n_name AS Location, s_birthday AS Age, s_platform AS platform ,s_team AS team , s_gamesPlayed AS PlayedGames " +
            "FROM streamer, nation " +
            "WHERE s_nationid = n_nationid AND " +
            "n_name = '" + _n_name +"' AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "s_team = '" +_s_team +"' AND " +
            "s_gamesPlayed LIKE '%" +_s_gamesPlayed +"%' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    //------------------------------------------------ SQL for FILTER THREE, FOUR + ONE ADDITIONAL FILTER---------------------------------------------------------- 
    byF3F4F5( _s_birthday, _s_platform, _s_team){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, s_birthday AS Age, s_platform AS platform, s_team AS team " +
            "FROM streamer " +
            "WHERE s_team = '" +_s_team +"' AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    byF3F4F6( _s_birthday, _s_platform, _spon_company){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, s_birthday AS Age, s_platform AS platform, spon_company AS sponsor " +
            "FROM streamer, sponsor " +
            "WHERE spon_streamkey = s_streamkey AND " +
            "spon_streamName = s_name AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "spon_company = '" +_spon_company +"' AND " +
            "s_birthday= ? ", [_s_birthday])
    }  
    byF3F4F7( _s_birthday, _s_platform, _s_gamesPlayed){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, s_birthday AS Age, s_platform AS platform, s_gamesPlayed AS PlayedGames " +
            "FROM streamer " +
            "WHERE s_platform = '" +_s_platform +"' AND " +
            "s_gamesPlayed LIKE '%" +_s_gamesPlayed +"%' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    //------------------------------------------------ SQL for FILTER THREE, FOUR + TWO ADDITIONAL FILTER---------------------------------------------------------- 
    byF3F4F5F6( _s_birthday, _s_platform, _s_team, _spon_company){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, s_birthday AS Age, s_platform AS platform, s_team AS team, spon_company AS sponsor " +
            "FROM streamer, sponsor " +
            "WHERE s_team = '" +_s_team +"' AND " +
            "spon_streamkey = s_streamkey AND " +
            "spon_streamName = s_name AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "spon_company = '" +_spon_company +"' AND " +
            "s_birthday= ? ", [_s_birthday])
    }   
    byF3F4F5F7( _s_birthday, _s_platform, _s_team, _s_gamesPlayed){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, s_birthday AS Age, s_platform AS platform, s_team AS team, s_gamesPlayed AS PlayedGames " +
            "FROM streamer " +
            "WHERE s_team = '" +_s_team +"' AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "s_gamesPlayed LIKE '%" +_s_gamesPlayed +"%' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    //------------------------------------------------ SQL for FILTER THREE, FOUR + THREE ADDITIONAL FILTER---------------------------------------------------------- 
    byF3F4F5F6F7( _s_birthday, _s_platform, _s_team, _spon_company, _s_gamesPlayed){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, s_birthday AS Age, s_platform AS platform, s_team AS team, spon_company AS sponsor, s_gamesPlayed AS PlayedGames " +
            "FROM streamer, sponsor " +
            "WHERE s_team = '" +_s_team +"' AND " +
            "spon_streamkey = s_streamkey AND " +
            "spon_streamName = s_name AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "spon_company = '" +_spon_company +"' AND " +
            "s_gamesPlayed LIKE '%" +_s_gamesPlayed +"%' AND " +
            "s_birthday= ? ", [_s_birthday])
    }
    //------------------------------------------------ SQL for FILTER FOUR, FIVE + ONE ADDITIONAL FILTER---------------------------------------------------------- 
    byF4F5F6( _s_platform, _s_team, _spon_company){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, s_platform AS platform, s_team AS team, spon_company AS sponsor " +
            "FROM streamer, sponsor " +
            "WHERE s_team = '" +_s_team +"' AND " +
            "spon_streamkey = s_streamkey AND " +
            "spon_streamName = s_name AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "spon_company = '" +_spon_company +"' ",[])
    } 
    byF4F5F7( _s_platform, _s_team, _s_gamesPlayed){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, s_platform AS platform, s_team AS team, s_gamesPlayed AS PlayedGames " +
            "FROM streamer, sponsor " +
            "WHERE s_team = '" +_s_team +"' AND " +
            "spon_streamkey = s_streamkey AND " +
            "spon_streamName = s_name AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "s_gamesPlayed LIKE '%" +_s_gamesPlayed +"%' ",[])
    } 
    //------------------------------------------------ SQL for FILTER FOUR, FIVE + TWO ADDITIONAL FILTER---------------------------------------------------------- 
    byF4F5F6F7( _s_platform, _s_team, _spon_company, _s_gamesPlayed){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, s_platform AS platform, s_team AS team, spon_company AS sponsor, s_gamesPlayed AS PlayedGames " +
            "FROM streamer, sponsor " +
            "WHERE s_team = '" +_s_team +"' AND " +
            "spon_streamkey = s_streamkey AND " +
            "spon_streamName = s_name AND " +
            "s_platform = '" +_s_platform +"' AND " +
            "s_gamesPlayed LIKE '%" +_s_gamesPlayed +"%' AND " +
            "spon_company = '" +_spon_company +"' ",[])
    }
    //------------------------------------------------ SQL for FILTER FIVE, SIX + ONE ADDITIONAL FILTER---------------------------------------------------------- 
    byF6F7(_spon_company, _s_gamesPlayed){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, spon_company AS sponsor, s_gamesPlayed AS PlayedGames " +
            "FROM streamer, sponsor " +
            "WHERE spon_streamkey = s_streamkey AND " +
            "spon_streamName = s_name AND " +
            "s_gamesPlayed LIKE '%" +_s_gamesPlayed +"%' AND " +
            "spon_company = '" +_spon_company +"' ",[])
    } 

    //------------------------------------------------ MISSED SQL SECTION---------------------------------------------------------- 
    byF1F3F5F7(_s_gender, _s_birthday, _s_team, _s_gamesPlayed){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, s_gender AS gender, s_birthday AS age, s_team AS team, s_gamesPlayed AS PlayedGames " +
            "FROM streamer " +
            "WHERE s_gender = '" + _s_gender +"' AND " +
            "s_team = '" +_s_team + "' AND " +
            "s_gamesPlayed LIKE '%" +_s_gamesPlayed +"%' AND " +
            "s_birthday = ? ", [_s_birthday])
    }
    byF2F4F6(_n_name, _s_platform, _spon_company){
        return this.all(
            "SELECT DISTINCT s_name AS Streamer, n_name AS location, s_platform as Platform, spon_company AS sponsor " +
            "FROM streamer, nation, sponsor " +
            "WHERE s_nationid = n_nationid AND "+
            "spon_streamkey = s_streamkey AND " +
            "spon_streamName = s_name AND " +
            "n_name = '" + _n_name +"' AND "+
            "spon_company = '" + _spon_company +"' ",[])
    }
    

               
}
module.exports = handleSql
