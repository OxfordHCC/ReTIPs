compile = (iotdata) => {
    let devs = [ ... new Set(aa.geos.map( x => x.appid ))];
    return devs.reduce( (result,dev) => { 
        result[dev] = 
            iotdata.geos.filter( d => d.appid == dev ).reduce( (ipres, record) => {
                const { ip, city, country_name, organisation, latitude, longitude } = record.geo;
                ipres[ip] = ({ city, organisation, country_name, latitude, longitude });                    
                return ipres;
            }, {})
        return result;
    }, {});
};