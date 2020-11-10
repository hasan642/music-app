/**
 * name: Artist.ts
 * desc: The artist model.
 */

/**
* type checking.
*/
interface ArtistProperties {
    artistName: string;
    artistId: number;
    coverPhoto: string;
};

/**
 * An Artist model.
 */
class Artist {

    /**
     * local variables.
     */
    artistName: string = '';
    artistId: number = -1;
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