const app = {
    apiUrl: 'http://192.168.10.84:8081/', //请求的地址
    baseRequest(obj) {
        try {
            const userToken = uni.getStorageSync('token');
            if (userToken) {
                if (obj.header) {
                    obj.header["Authorization"] = userToken;
                } else {
                    obj.header = { "Authorization": userToken };
                }
                obj.url = this.apiUrl + obj.url;
                uni.request(obj)
            }
            else{
                console.log("获取不到userToken")
                
            }
        } catch (e) {
            console.log(e)
            console.log("获取不到userToken")
        } 
    },
}
export default app;