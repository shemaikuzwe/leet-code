
/**
 * This program checks if an image is valid
 * @param {string} url 
 * @return {boolean}
 */

async function IsValid(url) {
    try {
        const contorller = new AbortController();
        const timeout = setTimeout(() => contorller.abort(), 5000);

        const response = await fetch(url, {
            method: "Head",
            signal: contorller.signal
        });
        clearTimeout(timeout);
        return response.ok && (response.headers.get("content-type")?.startsWith("/image") ?? false)
    } catch {
        return false
    }

}

console.log(IsValid("https://www.google.com/url?sa=i&url=https%3A%2F%2Fgratisography.com%2F&psig=AOvVaw34dDY7VVR9FLglT1xuXr43&ust=1735333166360000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjxz_upxooDFQAAAAAdAAAAABAE"));