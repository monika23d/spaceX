const request  = require('request')
const { removeEmitHelper } = require('typescript')

const launchService = {
    getLaunch(){
        return new Promise((resolve, reject) =>{
            const options = {
                uri: 'https://api.spaceXdata.com/v3/launches?limit=100',
                method:'GET',
                json:{},
                headers : {
                    'content-types':'application/json',
                    'Authorization':''
                }
            }
            
            request(options,(error,restResp, body) => {
                if(!error){
                    let resposnse = this.composeResponse (body)
                    resolve(JSON.stringify(resposnse))
                } else {
                    reject(error)
                }
            })
        })
    },

    composeResponse(details){
        let launchDetailsArr = []
        details.forEach(elm => {
            let launch = {
                missionName:elm.mission_name,
                flightNum: elm.flight_number,
                missionID: elm.mission_id,
                launchYear: elm.launch_year,
                successLaunch:elm.launch_success ? elm.launch_success : false,
                rocketDetails:elm.rocket.first_stage && elm.rocket.first_stage.cores,
                imgLink:elm.links && elm.links.mission_patch_small
            }
            launchDetailsArr.push(launch)
        });
        return launchDetailsArr
    }
}

module.exports = launchService