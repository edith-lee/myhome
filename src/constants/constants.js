const DEVBASEURL = 'http://192.168.88.168:8080'


// const ONLINEBASEURL =  `http://cnl20044548.cn.hsbc:9081/hubquery`     //===>(cash uat环境)
const MAIN_BRANCH_ONLINE_URL = `http://cnl20044548.cn.hsbc:9081/cash`
// const ONLINEBASEURL = 'http://cnl20044549.cn.hsbc:8080/hubquery'     //===>(uat环境)
// const ONLINEBASEURL = 'http://cnl20044087.cn.hsbc:8080/hubquery'     //===>(生产环境)


const ONLINEBASEURL = 'http://192.168.88.168:8080'



const LinkConstant = '/'

const LOGIN = `${ONLINEBASEURL}/auth/login${LinkConstant}`
const LOGIN_OUT = `${ONLINEBASEURL}/auth/logout${LinkConstant}`

const SEARCH_ALL_QUERY = `${ONLINEBASEURL}/api/all/query${LinkConstant}?property=`
const QUERY_GROUP_ALL_QUERY = `${ONLINEBASEURL}/api/checkQuerys${LinkConstant}?groupId=`
const SEARCH_ALL_GROUP = `${ONLINEBASEURL}/api/groups${LinkConstant}`
const ADD_GUERY = `${ONLINEBASEURL}/api/add/query${LinkConstant}`
const GET_EACH_GUERY = `${ONLINEBASEURL}/api/getquery${LinkConstant}?queryId=`
const GET_ALL_GROUP = `${ONLINEBASEURL}/api/groups${LinkConstant}`
const UPDATA_QUERY = `${ONLINEBASEURL}/api/update/query${LinkConstant}`
const GET_PERIODICITY = `${ONLINEBASEURL}/api/group/periodicity_days${LinkConstant}?periodicity=`
const DELETE_QUERY = `${ONLINEBASEURL}/api/delete/query${LinkConstant}?queryId=`
const GET_EARCH_QUERY = `${ONLINEBASEURL}/api/getquery${LinkConstant}?queryId=`
const GET_EARCH_QROUP = `${ONLINEBASEURL}/api/group${LinkConstant}?groupId=`
const ADD_NEW_GROUP = `${ONLINEBASEURL}/api/group${LinkConstant}`
const UPDATA_GROUP = `${ONLINEBASEURL}/api/update/group${LinkConstant}`
const DELETE_GROUP = `${ONLINEBASEURL}/api/delete/group${LinkConstant}?groupId=`
const GET_REPORT = `${ONLINEBASEURL}/api/reports${LinkConstant}`
const SEARCH_REPORT = `${ONLINEBASEURL}/api/report${LinkConstant}?id=`
const DOWNLOAD = `${ONLINEBASEURL}/api/download${LinkConstant}`
const RUN_QUERY = `${ONLINEBASEURL}/api/query/run${LinkConstant}?queryName=`
const VIEW_REPORT = `${ONLINEBASEURL}/api/preview${LinkConstant}?id=`
const RUN_GROUP = `${ONLINEBASEURL}/api/group/run${LinkConstant}?groupId=`
const GET_INFORMATION = `${ONLINEBASEURL}/api/whoami${LinkConstant}`
const GET_ALL_USER = `${ONLINEBASEURL}/api/backup/page${LinkConstant}?userId=`
const ADD_NEW_USER = `${ONLINEBASEURL}/api/backup${LinkConstant}`
const DELETE_USER_DEMAND = `${ONLINEBASEURL}/api/backup/delete${LinkConstant}?id=`
const SELECT_USER_GROUP = `${ONLINEBASEURL}/api/user/page${LinkConstant}`
const ADD_USER_GROUP = `${ONLINEBASEURL}/api/user${LinkConstant}`
const GET_ALL_USER_CONFIG = `${ONLINEBASEURL}/api/user/all${LinkConstant}`
const GET_ALL_GROUP_USER = `${ONLINEBASEURL}/api/user/group/`
const ADD_NEW_USER_GROUP = `${ONLINEBASEURL}/api/user/group${LinkConstant}`
const DELETE_USER_CONFIG = `${ONLINEBASEURL}/api/user/delete${LinkConstant}?id=`
const GET_ALL_USER_GROUP = `${ONLINEBASEURL}/api/user/group/all${LinkConstant}`
const DELETE_USER_GROUP = `${ONLINEBASEURL}/api/user/group/delete${LinkConstant}?groupId=`
const QUERY_RUN_STATUS = `${ONLINEBASEURL}/api/query/state${LinkConstant}?property=`

const CLICK_AUTHORIZED = `${ONLINEBASEURL}/api/public/authAck/clickLink${LinkConstant}?`
/*
api/public/authAck/clickLink?
 */
const GET_NOT_GROUP_USER = `${ONLINEBASEURL}/api/query/getAuthBox${LinkConstant}`


const GET_USER_LIST = `${ONLINEBASEURL}/api/mireport/userlist${LinkConstant}`
const GET_ONCE_USER_LIST = `${ONLINEBASEURL}/api/mireport/userlistdetail${LinkConstant}?userId=`
const GET_REPORT_LIST = `${ONLINEBASEURL}/api/mireport/reportlist${LinkConstant}`
const GET_ONCE_REPORT_LIST = `${ONLINEBASEURL}/api/mireport/reportlistdetail${LinkConstant}?reportId=`
const GET_ACTIVITY_LOG = `${ONLINEBASEURL}/api/activitylog${LinkConstant}`
const REPORT_ACTION = `${ONLINEBASEURL}/api/mireport/reportaction${LinkConstant}`


const IMPORT_GROUP = `${ONLINEBASEURL}/api/import/query${LinkConstant}`
const IMPORT_USERDATA = `${ONLINEBASEURL}/api/import/user/file${LinkConstant}`
const IMPORT_QUERY = `${ONLINEBASEURL}/api/import/query/file${LinkConstant}`


const GET_ALL_USER_INFO = `${ONLINEBASEURL}/api/user/all/searchbox${LinkConstant}`
const GET_EARCH_MI_REPORT_USER_LIST = `${ONLINEBASEURL}/api/mireport/userlist${LinkConstant}?userId=`
const GET_EARCH_MI_REPORT_REPORT_LIST = `${ONLINEBASEURL}/api/mireport/reportlist${LinkConstant}?reportId=`
const GET_EARCH_MI_REPORT_REPORT_ACTION_LIST = `${ONLINEBASEURL}/api/mireport/reportaction${LinkConstant}?firstName=`
const SEARCH_EARCH_ACTIVITY_LOG = `${ONLINEBASEURL}/api/activitylog${LinkConstant}?firstName=`
const GET_USER_FILE_LIST = `${ONLINEBASEURL}/api/user/filelist${LinkConstant}`
const SEARCH_FILE_LIST = `${ONLINEBASEURL}/api/user/filelist${LinkConstant}?fileName=`


const DOWNLOAD_QUERY_GROUP_TEMPLATE = `${ONLINEBASEURL}/api/download/querygroup/template${LinkConstant}`
const DOWNLOAD_USER_GROUP_TEMPLATE = `${ONLINEBASEURL}/api/download/usergroup/template${LinkConstant}`


const GET_NEW_TOKEN = `${ONLINEBASEURL}/auth/refresh${LinkConstant}`


const GET_ALL_QUERY_PAN = `${ONLINEBASEURL}/api/all/query/pageable${LinkConstant}?`
const GET_ALL_REPORT_PAN = `${ONLINEBASEURL}/api/reports/pageable${LinkConstant}?`
const GET_ALL_GROUP_PAN = `${ONLINEBASEURL}/api/group/pageable${LinkConstant}?`
const GET_ACTIVTY_LOG_PAN = `${ONLINEBASEURL}/api/activitylog/pageable${LinkConstant}?`
const GET_USER_PAN = `${ONLINEBASEURL}/api/user/pageable${LinkConstant}?`
const GET_USER_GROUP_PAN = `${ONLINEBASEURL}/api/user/group/pageable${LinkConstant}?`
const GET_MI_USER_LIST_PAN = `${ONLINEBASEURL}/api/mireport/userlist/pageable${LinkConstant}?`
const GET_MI_USER_LIST_DETAIL_PAN = `${ONLINEBASEURL}/api/mireport/userlistdetail/pageable${LinkConstant}?`
const GET_MI_REPORT_LIST_PAN = `${ONLINEBASEURL}/api/mireport/reportlist/pageable${LinkConstant}?`
const GET_MI_ACTION_LIST_PAN = `${ONLINEBASEURL}/api/mireport/reportaction/pageable${LinkConstant}?`


const GET_ALL_CONTROL_FILE = `${ONLINEBASEURL}/api/migration/filelist/pageable${LinkConstant}?`
const GET_ALL_MIGRATION_LSIT = `${ONLINEBASEURL}/api/user/filelist${LinkConstant}`
const ADD__NEW_MIGRATION = `${ONLINEBASEURL}/api/clorcmfl/add${LinkConstant}`
const DETELETE_MIGRATION = `${ONLINEBASEURL}/api/clorcmfl/remove${LinkConstant}?id=`
const UPDATA_MIGRATION = `${ONLINEBASEURL}/api/clorcmfl/update${LinkConstant}`
const EXTRACT_MIGRATION = `${ONLINEBASEURL}/api/clorcmfl/extract${LinkConstant}?id=`
const GET_ONCE_FILE = `${ONLINEBASEURL}/api/clorcmfl/page${LinkConstant}?id=`
const GET_ALL_PUBLIC_FILE_LIST = `${ONLINEBASEURL}/api/public/filelist/pageable${LinkConstant}`
const GET_ALL_FILE_LIST = `${ONLINEBASEURL}/api/public/filelist${LinkConstant}`

const GET_RJQ_JOB = `${ONLINEBASEURL}/api/jobManage/ejqJobs${LinkConstant}`
const KILL_CURRENT_JOB = `${ONLINEBASEURL}/api/jobManage/stop${LinkConstant}?`
const GET_USER_REPORT_LIST = `${ONLINEBASEURL}/api/reportList/query/pageable${LinkConstant}?`

//api/jobManage/stop？taskId=
const SEARCH_ALL_FilE_LIST = `${ONLINEBASEURL}/api/sqlstate/fileList${LinkConstant}`
const SEARCH_ALL_COLUMN_LIST = `${ONLINEBASEURL}/api/sqlstate/columnList${LinkConstant}?`
const SEARCH_ALL_QUERY_DATA = `${ONLINEBASEURL}/api/sqlstate/querydata${LinkConstant}?`

const SEARCH_ALL_USER = `${ONLINEBASEURL}/api/activitylog/getsearch${LinkConstant}`

const DOWNLOAD_MIGRATION_FILE = `${ONLINEBASEURL}/api/download/userfilelist/template${LinkConstant}`
const UPLOAD_FILE = `${ONLINEBASEURL}/api/import/clorcmfl/file${LinkConstant}`

const GET_MIGRATION_PERIODICITY_VALUES = `${ONLINEBASEURL}/api/clorcmfl/periodicity_values`
const GET_MIGRATION_STRATEGY_NAMES = `${ONLINEBASEURL}/api/clorcmfl/strategy_names`


const GET_RENAME_DATA_OR_EXCEPTION_DATA = `${ONLINEBASEURL}/api/monitoring/renameOrExceptionFiles?status=`


const GETUSERREPORTINGBRACH = `${ONLINEBASEURL}/api/cashReport/getMainBranchs`
const GEUSERSUBBRANCH = `${ONLINEBASEURL}/api/cashReport/getSubBranchs`
const REPORTPAGEGETUSERREPORTINGBRACH = `${ONLINEBASEURL}/api/cashReport/getUserMainBranchs`
const REPORTPAGEGETUSERSUBBRANCH = `${ONLINEBASEURL}/api/cashReport/getUserSubBranchs`


const REPORTVIEWREPORTINGBRANCH = `${MAIN_BRANCH_ONLINE_URL}/getMonthlyRecord`
const REPORTVIEWSUBBRANCH = `${MAIN_BRANCH_ONLINE_URL}/getDailyRecord`
const REPORTDOWNLOADREPORTINGBRANCH = `${MAIN_BRANCH_ONLINE_URL}/genMonthlyReport`
const REPORTDOWNLOADSUBBRANCH = `${MAIN_BRANCH_ONLINE_URL}/genDailyReport`
const PARAMETER_ADD = `${ONLINEBASEURL}/api/var/add${LinkConstant}`
const PARAMETER_UPDATE = `${ONLINEBASEURL}/api/var/update${LinkConstant}`
const GET_SYSTEM_PARAMETER_LIST = `${ONLINEBASEURL}/api/var/systemVars${LinkConstant}`
const GET_USER_PARAMETER_LIST = `${ONLINEBASEURL}/api/var/userVars${LinkConstant}`
const GET_USABLE_PARAMETER = `${ONLINEBASEURL}/api/var/usableVars${LinkConstant}`
const DELETE_USER_PARAMETER = `${ONLINEBASEURL}/api/var/delete${LinkConstant}`
const QUERY_ADD_EDIT_REPORT_USER_CHANGE = `${ONLINEBASEURL}/api/query/check/email${LinkConstant}?userName=`
//api/query/check/email?userName=


module.exports = {
    LOGIN: LOGIN,
    LOGIN_OUT: LOGIN_OUT,
    IMPORT_QUERY: IMPORT_QUERY,
    QUERY_GROUP_ALL_QUERY: QUERY_GROUP_ALL_QUERY,
    IMPORT_GROUP: IMPORT_GROUP,
    IMPORT_USERDATA: IMPORT_USERDATA,
    SEARCH_ALL_QUERY: SEARCH_ALL_QUERY,
    SEARCH_ALL_GROUP: SEARCH_ALL_GROUP,
    ADD_GUERY: ADD_GUERY,
    GET_EACH_GUERY: GET_EACH_GUERY,
    GET_ALL_GROUP: GET_ALL_GROUP,
    UPDATA_QUERY: UPDATA_QUERY,
    GET_PERIODICITY: GET_PERIODICITY,
    DELETE_QUERY: DELETE_QUERY,
    GET_EARCH_QUERY: GET_EARCH_QUERY,
    GET_EARCH_QROUP: GET_EARCH_QROUP,
    ADD_NEW_GROUP: ADD_NEW_GROUP,
    UPDATA_GROUP: UPDATA_GROUP,
    DELETE_GROUP: DELETE_GROUP,
    GET_REPORT: GET_REPORT,
    DOWNLOAD: DOWNLOAD,
    RUN_QUERY: RUN_QUERY,
    VIEW_REPORT: VIEW_REPORT,
    RUN_GROUP: RUN_GROUP,
    GET_INFORMATION: GET_INFORMATION,
    GET_ALL_USER: GET_ALL_USER,
    ADD_NEW_USER: ADD_NEW_USER,
    DELETE_USER_DEMAND: DELETE_USER_DEMAND,
    SELECT_USER_GROUP: SELECT_USER_GROUP,
    ADD_USER_GROUP: ADD_USER_GROUP,
    GET_ALL_USER_CONFIG: GET_ALL_USER_CONFIG,
    GET_ALL_GROUP_USER: GET_ALL_GROUP_USER,
    ADD_NEW_USER_GROUP: ADD_NEW_USER_GROUP,
    GET_ALL_USER_GROUP: GET_ALL_USER_GROUP,
    DELETE_USER_CONFIG: DELETE_USER_CONFIG,
    DELETE_USER_GROUP: DELETE_USER_GROUP,
    QUERY_RUN_STATUS: QUERY_RUN_STATUS,
    GET_USER_LIST: GET_USER_LIST,
    GET_ONCE_USER_LIST: GET_ONCE_USER_LIST,
    GET_REPORT_LIST: GET_REPORT_LIST,
    GET_ONCE_REPORT_LIST: GET_ONCE_REPORT_LIST,
    SEARCH_ACTIVTY_LOG_PANGET_ACTIVITY_LOG: GET_ACTIVITY_LOG,
    REPORT_ACTION: REPORT_ACTION,
    GET_EARCH_MI_REPORT_USER_LIST: GET_EARCH_MI_REPORT_USER_LIST,
    GET_EARCH_MI_REPORT_REPORT_LIST: GET_EARCH_MI_REPORT_REPORT_LIST,
    GET_EARCH_MI_REPORT_REPORT_ACTION_LIST: GET_EARCH_MI_REPORT_REPORT_ACTION_LIST,
    SEARCH_EARCH_ACTIVITY_LOG: SEARCH_EARCH_ACTIVITY_LOG,
    GET_USER_FILE_LIST: GET_USER_FILE_LIST,
    GET_NEW_TOKEN: GET_NEW_TOKEN,
    DOWNLOAD_QUERY_GROUP_TEMPLATE: DOWNLOAD_QUERY_GROUP_TEMPLATE,
    DOWNLOAD_USER_GROUP_TEMPLATE: DOWNLOAD_USER_GROUP_TEMPLATE,
    SEARCH_REPORT: SEARCH_REPORT,
    SEARCH_FILE_LIST: SEARCH_FILE_LIST,
    GET_ALL_QUERY_PAN: GET_ALL_QUERY_PAN,
    GET_ALL_REPORT_PAN: GET_ALL_REPORT_PAN,
    GET_ALL_GROUP_PAN: GET_ALL_GROUP_PAN,
    GET_ACTIVTY_LOG_PAN: GET_ACTIVTY_LOG_PAN,
    SEARCH_ACTIVTY_LOG_PAN: SEARCH_ALL_USER,
    GET_USER_PAN: GET_USER_PAN,
    GET_USER_GROUP_PAN: GET_USER_GROUP_PAN,
    GET_MI_USER_LIST_PAN: GET_MI_USER_LIST_PAN,
    GET_MI_USER_LIST_DETAIL_PAN: GET_MI_USER_LIST_DETAIL_PAN,
    GET_MI_REPORT_LIST_PAN: GET_MI_REPORT_LIST_PAN,
    GET_MI_ACTION_LIST_PAN: GET_MI_ACTION_LIST_PAN,
    GET_ALL_USER_INFO: GET_ALL_USER_INFO,
    GET_ALL_MIGRATION_LSIT: GET_ALL_MIGRATION_LSIT,
    ADD__NEW_MIGRATION: ADD__NEW_MIGRATION,
    DETELETE_MIGRATION: DETELETE_MIGRATION,
    UPDATA_MIGRATION: UPDATA_MIGRATION,
    EXTRACT_MIGRATION: EXTRACT_MIGRATION,
    GET_ONCE_FILE: GET_ONCE_FILE,
    GET_ALL_PUBLIC_FILE_LIST: GET_ALL_PUBLIC_FILE_LIST,
    GET_ALL_FILE_LIST: GET_ALL_FILE_LIST,
    SEARCH_ALL_FilE_LIST: SEARCH_ALL_FilE_LIST,
    SEARCH_ALL_COLUMN_LIST: SEARCH_ALL_COLUMN_LIST,
    SEARCH_ALL_QUERY_DATA: SEARCH_ALL_QUERY_DATA,
    DOWNLOAD_MIGRATION_FILE: DOWNLOAD_MIGRATION_FILE,
    UPLOAD_FILE: UPLOAD_FILE,
    GET_MIGRATION_PERIODICITY_VALUES: GET_MIGRATION_PERIODICITY_VALUES,
    GET_MIGRATION_STRATEGY_NAMES: GET_MIGRATION_STRATEGY_NAMES,
    GET_RENAME_DATA_OR_EXCEPTION_DATA: GET_RENAME_DATA_OR_EXCEPTION_DATA,
    GET_ALL_CONTROL_FILE: GET_ALL_CONTROL_FILE,
    GETUSERREPORTINGBRACH: GETUSERREPORTINGBRACH,
    GEUSERSUBBRANCH: GEUSERSUBBRANCH,
    REPORTPAGEGETUSERREPORTINGBRACH: REPORTPAGEGETUSERREPORTINGBRACH,
    REPORTPAGEGETUSERSUBBRANCH: REPORTPAGEGETUSERSUBBRANCH,
    REPORTVIEWREPORTINGBRANCH: REPORTVIEWREPORTINGBRANCH,
    REPORTVIEWSUBBRANCH: REPORTVIEWSUBBRANCH,
    REPORTDOWNLOADREPORTINGBRANCH: REPORTDOWNLOADREPORTINGBRANCH,
    REPORTDOWNLOADSUBBRANCH: REPORTDOWNLOADSUBBRANCH,
    PARAMETER_ADD: PARAMETER_ADD,
    PARAMETER_UPDATE: PARAMETER_UPDATE,
    GET_SYSTEM_PARAMETER_LIST: GET_SYSTEM_PARAMETER_LIST,
    GET_USER_PARAMETER_LIST: GET_USER_PARAMETER_LIST,
    GET_USABLE_PARAMETER: GET_USABLE_PARAMETER,
    DELETE_USER_PARAMETER:DELETE_USER_PARAMETER,
    GET_RJQ_JOB:GET_RJQ_JOB,
    KILL_CURRENT_JOB:KILL_CURRENT_JOB,
    GET_USER_REPORT_LIST:GET_USER_REPORT_LIST,
    GET_NOT_GROUP_USER:GET_NOT_GROUP_USER,
    CLICK_AUTHORIZED:CLICK_AUTHORIZED,
    QUERY_ADD_EDIT_REPORT_USER_CHANGE:QUERY_ADD_EDIT_REPORT_USER_CHANGE
}
