/**
 * name: storage.types.ts
 * desc: This file contains the storage types.
 */

/**
 * The keys types.
 */
export type Key =
    '@LANGUAGE' |
    '@USER';

/**
 * user model.
 */
export type UserType = 'NONE' | 'GUEST' | 'GOOGLE_USER';
export type User = {
    userName: string;
    name: string;
    id: string;
    type: UserType;
};

/**
 * all storage models.
 */
export type StorageModel =
    string |
    User |
    null;