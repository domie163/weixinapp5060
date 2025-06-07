const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootyc1mt/",
            name: "springbootyc1mt",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootyc1mt/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "疫情核酸预约小程序"
        } 
    }
}
export default base
