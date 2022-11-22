module.exports = Object.freeze({
    TIME_EXP_TOKEN: 30 * 24 * 60 * 60,
    TIME_EXP_RESET_CODE: 30 * 60,
    CRON_CONFIG: {
        TIME_EXP_CHECK_CONFRIM: '0 */1 * * * *'
    },
    HEADER: {
        LOCALE_DEFAULT: 'en',
        LOCALE_HEADER: 'locale',
        AUTH: 'auth',
        TOKEN: 'token',
        LOCALE_VIETNAM: 'vi',
        AUTH_TOKEN_SECRET: 'auth_token_secret',
        TOKEN_ID: 'token_id',
        DEVICE_ID: 'device_id',
        USER_ID: 'user_id',
        TIME_ZONE: 'time_zone'
    },
    PARAM: {
        TYPE: 'type',
        CODE: 'code',
        ID: 'id',
        PAGE: 'page',
        LIMIT: 'limit',
        LANGUAGE: 'lang',
        PARENT_CATEGORY: 'parent_category',
        ORDER_BY: 'order_by',
        SORT: 'sort',
        TEXT: 'text'
    },
    TABLE: {
        USER: 'users'
    },
    FIELD_NAME: {
        ID: 'id',
        FULL_NAME: 'full_name',
        EMAIL: 'email',
        PHONE_NUMBER: 'phone_number',
        PASSWORD: 'password',
        IMAGE: 'image',
        COIN: 'coin',
        ROLE: 'role',
        STATUS: 'status',
        DEL_FLAG: 'del_flag',
        SEX: 'sex',
        BIRTHDAY: 'birthday',
        SALT: 'salt',
        SECRET_KEY: 'secretKey',
        CREATE_DATE_TSP: 'create_date_timestamp',
        UPDATE_DATE_TSP: 'update_date_timestamp',
        CREATE_DATE: 'create_date',
        UPDATE_DATE: 'update_date',
        ACTIVATION_CODE: 'activation_code',
        ACTIVATION_EXPIRE: 'activation_expire',
    },
    DATABASE_DEFAULT: {
        START_DATE: '2022-10-01',
        LANGUAGE: 'en',
        LIMIT: 20,
        PAGE: 1,
        ACCOUNT_BALANCE: 0
    },
    BOOLEAN_VALUE: {
        TRUE: 1,
        FALSE: 0
    },
    OAUTH: {
    },
    USER: {
        STATUS: {
            NEW: 1,
            ACTIVE: 2,
        }
    },
    ORDER: {
        ASC: 'ASC',
        DESC: 'DESC'
    },
    SETTING: {
        TYPE: {
            NORMAL: 1,
            AUTO: 2,
        }
    },
    REDIS: {
        PREFIX: 'je',
        QUEUE: {
            LOW: 'low',
            NORMAL: 'normal',
            MEDIUM: 'medium',
            HIGH: 'high',
            CRITICAL: 'critical'
        }
    },
    SESSION: {
        VALUE: -1
    }
});
