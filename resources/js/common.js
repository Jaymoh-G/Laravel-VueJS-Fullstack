import axios from "axios";

export default {
    data() {
        return {};
    },
    methods: {
        async callApi(method, url, dataObj) {
            try {
                return await axios({
                    method: method,
                    url: url,
                    data: dataObj
                });
            } catch (e) {
                console.log(e);
                return e.response;
            }
        },
        i(desc, title = "Hey") {
            this.$Notice.info({
                title: title,
                desc: desc
            });
        },
        s(desc, title = "Great") {
            this.$Notice.success({
                title: title,
                desc: desc
            });
        },
        w(desc, title = "Opp!") {
            this.$Notice.warning({
                title: title,
                desc: desc
            });
        },
        e(desc, title = "Error") {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        },
        swr(desc = "Something went wrong! Please try again.", title = "Error") {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        }
    }
};
