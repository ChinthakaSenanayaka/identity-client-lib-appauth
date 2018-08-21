import { AuthorizationServiceConfiguration, QueryStringUtils, Requestor, StorageBackend, UserInfoRequest, UserInfoResponse } from '@openid/appauth';
/**
 * Defines the interface which is capable of handling an user info request
 * using various methods (iframe / popup / different process etc.).
 */
export interface UserInfoRequestHandler {
    /**
     * Makes an UserInfo request.
     */
    performUserInfoRequest(configuration: AuthorizationServiceConfiguration, request?: UserInfoRequest): Promise<UserInfoResponse>;
}
/**
 * The default user info request handler.
 */
export declare class BaseUserInfoRequestHandler implements UserInfoRequestHandler {
    readonly storageBackend: StorageBackend;
    readonly requestor: Requestor;
    readonly utils: QueryStringUtils;
    constructor(storageBackend?: StorageBackend);
    private isUserInfoResponse;
    performUserInfoRequest(configuration: AuthorizationServiceConfiguration, request?: UserInfoRequest): Promise<UserInfoResponse>;
}
