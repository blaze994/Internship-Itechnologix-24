export function generate(){
    const subset = "";
    let ans = "";
    for(let i = 0 ; i < 5 ; i++){
        ans += subset[Math.floor(Math.random() * subset.length)];
    }
    return ans;
}