const MD5 = require('md5')

class InnerCrypto {
    _fn: (...args: any[]) => any;
    _content: string;
    constructor(fn) {
        this._fn = fn;
    }
    digest(charCode) {
        if (charCode === 'hex') {
            return this._fn(this._content).toString();
        }
    }
    update(content: string) {
        this._content = content
        return this;
    }
}




export default {
    createHash(type: string) {
        if (type === 'md5') {
            return new InnerCrypto(MD5);
        }
    }
}