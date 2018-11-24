
export class Shop {

    private _id: number;
    private _name: string;
    private _distance: number;
    private _isLiked:boolean;
    

    /**
     * Getter isLiked
     * @return {boolean}
     */
	public get isLiked(): boolean {
		return this._isLiked;
	}

    /**
     * Setter isLiked
     * @param {boolean} value
     */
	public set isLiked(value: boolean) {
		this._isLiked = value;
	}

    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Getter name
     * @return {string}
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Getter distance
     * @return {number}
     */
    public get distance(): number {
        return this._distance;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._id = value;
    }

    /**
     * Setter name
     * @param {string} value
     */
    public set name(value: string) {
        this._name = value;
    }

    /**
     * Setter distance
     * @param {number} value
     */
    public set distance(value: number) {
        this._distance = value;
    }
}
