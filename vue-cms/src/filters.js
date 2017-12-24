import Vue from "vue"

import moment from "moment"

Vue.filter('dataFormat',function(dataStr){
    return moment(dataStr).format('YYYY-MM-DD HH:mm:ss')
})