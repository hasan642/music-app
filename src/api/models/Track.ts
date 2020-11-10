/**
 * name: Track.ts
 * desc: The track model.
 */

/**
* type checking.
*/
interface TrackProperties {
    trackId: number;
    label: string;
    lyrics?: string;
};

/**
 * A track model.
 */
class Track {

    /**
     * local variables.
     */
    trackId: number = -1;
    label: string = '';
    lyrics?: string = '';

    constructor(obj: TrackProperties) {
        this.setAttributes(obj);
    };

    setAttributes = (obj: TrackProperties) => {
        for (let key in obj) {
            this[key] = obj[key];
        };
    };

};

/**
 * export as default.
 */
export default Track;