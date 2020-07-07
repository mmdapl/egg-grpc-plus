'use strict';

/**
 * egg-grpc-plus default config
 * @member Config#grpcPlus
 * @property {String} SOME_KEY - some description
 */
exports.grpcPlus = {
    // grpc module load config loadOptions
    options:{

    },
    // just only one client , can provide config like this
    client:{
        app:true,
        agent:false,
        host:'127.0.0.1',
        port:50001,
        protoPath:'app/proto'
    },
    // two or more client ,can provide configs like those ,but you need choose your config by client's counts
    clients:{
        serviceOne:{
            app:true,
            agent:false,
            host:'127.0.0.1',
            port:50001,
            protoPath:'app/proto'
        },
        serviceTwo:{
            app:true,
            agent:false,
            host:'127.0.0.1',
            port:50001,
            protoPath:'app/proto'
        }
    }


};
