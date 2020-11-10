/**
 * name: Album.ts
 * desc: The album model.
 */

/**
* type checking.
*/
interface ArtistProperties {
    albumName: string;
    albumId: string;
    coverPhoto: string;
};

/**
 * An Artist model.
 */
class Artist {

    /**
     * local variables.
     */
    albumName: string = '';
    albumId: number = -1;
    coverPhoto: string = '';

    constructor(obj: ArtistProperties) {
        this.setAttributes(obj);
    };

    setAttributes = (obj: ArtistProperties) => {
        for (let key in obj) {
            this[key] = obj[key];
        }
    };
};

/**
 * export as default.
 */
export default Artist;