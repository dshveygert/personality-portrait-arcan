export default function cacheFn<T>(fn: any) {
    const cache: {[key: string]: T} = {};
    return function(arg: string){
        if (!!cache[arg]){
            return cache[arg];
        }
        else {
            cache[arg] = fn(arg);
            return cache[arg];
        }
    }
}
