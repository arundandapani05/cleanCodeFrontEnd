interface SearchFunc {
    (source: string, subString: string): boolean;
}

let searchFuncExample: SearchFunc;

searchFuncExample = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;

}