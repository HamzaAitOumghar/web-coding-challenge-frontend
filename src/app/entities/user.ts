import { Shop } from "./shop";

export class User {

    private _id: number;
    private _email: string;
    private _password: string;
    private _likedShop: Shop[];


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Getter password
     * @return {string}
     */
	public get password(): string {
		return this._password;
	}

    /**
     * Getter likedShop
     * @return {Shop[]}
     */
	public get likedShop(): Shop[] {
		return this._likedShop;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Setter password
     * @param {string} value
     */
	public set password(value: string) {
		this._password = value;
	}

    /**
     * Setter likedShop
     * @param {Shop[]} value
     */
	public set likedShop(value: Shop[]) {
		this._likedShop = value;
	}



}
