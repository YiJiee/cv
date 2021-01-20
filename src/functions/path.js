function resolveImagePath(path) {
    return process.env.PUBLIC_URL + '/' + path;
}

export {resolveImagePath};