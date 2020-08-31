import * as Storage from '../utils/storage_helper/index';
import prefKeys from '../utils/storage_helper/prefKeys';

export const isLoggedIn = () => {
    /**
     * Here we will handle INTRO_VISITED check from the API response.
     */
    if (Storage.retrieveItem(prefKeys.INTRO_VISITED)) {
        return true;
    } else {
        return false;
    }
}