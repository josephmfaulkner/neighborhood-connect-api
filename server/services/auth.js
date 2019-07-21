const AWS = require('aws-sdk');

const cognitoIdentityOptions = {
    UserPoolId : 'us-west-2_q2Y6U8uuY',
    ClientId : '224kjog47ojnt9ov773erj7qn9'
};

const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

const Auth = {
    getUserAccount: async (username) => {
        try {
            const params = {
                UserPoolId: cognitoIdentityOptions.UserPoolId, /* required */
                Username: username /* required */
            };

            const {err, data} = await cognitoIdentityServiceProvider.adminGetUser(params);

            if (err) {
                console.log(err, err.stack);
                return err;
            }

            console.log(data);
            return data;
        } catch (err) {
            console.log(err, err.stack);
            return err;
        }
    },

    changePassword: async (accessToken, currentPassword, newPassword) => {
        try {
            const params = {
                AccessToken: accessToken, /* required */
                PreviousPassword: currentPassword, /* required */
                ProposedPassword: newPassword /* required */
            };

            const { err, data } = await cognitoIdentityServiceProvider.changePassword(params);

            if (err) {
                console.log(err, err.stack);
                return err;
            }

            console.log(data);
            return data;
        } catch(err) {
            console.log(err, err.stack);
            return err;
        }
    },

    resetPassword: async (username) => {
        try {
            const params = {
                UserPoolId: cognitoIdentityOptions.UserPoolId, /* required */
                Username: username /* required */
            };

            const {err, data} = await cognitoIdentityServiceProvider.adminResetUserPassword(params);

            if (err) {
                console.log(err, err.stack);
                return err;
            }

            console.log(data);
            return data;
        } catch(err) {
            console.log(err, err.stack);
            return err;
        }
    },

    registerUser: async (username, password) => {
        const params = {
            ClientId: 'STRING_VALUE', /* required */
            Password: password, /* required */
            Username: username, /* required */
            AnalyticsMetadata: {
                AnalyticsEndpointId: 'STRING_VALUE'
            },
            SecretHash: 'STRING_VALUE',
            UserAttributes: [
                {
                    Name: 'STRING_VALUE', /* required */
                    Value: 'STRING_VALUE'
                },
                /* more items */
            ],
            UserContextData: {
                EncodedData: 'STRING_VALUE'
            },
            ValidationData: [
                {
                    Name: 'STRING_VALUE', /* required */
                    Value: 'STRING_VALUE'
                },
                /* more items */
            ]
        };

        const { err, data } = await cognitoIdentityServiceProvider.signUp(params);

        if (err) {
            console.log(err, err.stack);
            return err;
        }

        // successfully signed-up
        console.log(data);
        return data;
    }
};


module.exports = Auth;
