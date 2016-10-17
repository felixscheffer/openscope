import _forEach from 'lodash/forEach';
import _isArray from 'lodash/isArray';
import _isObject from 'lodash/isObject';
import _uniqueId from 'lodash/uniqueId';

/**
 * @class FixCollection
 */
export default class FixCollection {
    /**
     * @for FixCollection
     * @constructor
     * @param fixList {object}
     */
    constructor(fixList) {
        if (typeof fixList === 'undefined' || !_isObject(fixList) || _isArray(fixList)) {
            return null;
            // throw new TypeError(`Expected fixList to be an object, instead received ${typeof fixList}`);
        }

        this._id = _uniqueId();
        this._items = [];
        this.length = 0;

        return this._init(fixList);
    }

    /**
     * @for FixCollection
     * @method _init
     * @param fixList {object}
     * @private
     */
    _init(fixList) {
        this._buildFixModelsFromList(fixList);
    }

    /**
     * @for FixCollection
     * @method destroy
     */
    destroy() {
        this._id = '';
        this._items = [];
        this.length = 0;
    }

    /**
     * @for FixCollection
     * @method _buildFixModelsFromList
     * @param fixList {object}
     * @private
     */
    _buildFixModelsFromList(fixList) {
        _forEach(fixList, (fix, fixName) => {
            const fixModel = {
                name: fixName,
                coordinates: fix
            };

            this.addFixToCollection(fixModel);
        });
    }

    /**
     * @for FixCollection
     * @method addFixToCollection
     * @param fixToAdd {FixModel}
     */
    addFixToCollection(fixToAdd) {
        this._items.push(fixToAdd);
        this.length = this._items.length;
    }
}
