"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist_name, album_title, tracks) {
    if (tracks === void 0) { tracks = 0; }
    var album = {
        artist: artist_name,
        title: album_title,
        NoOftracks: tracks
    };
    return album;
}
console.log(make_album('ABC', 'title1'));
console.log(make_album('XYZ', 'title2'));
console.log(make_album('abc', 'title3'));
console.log(make_album('xyz', 'title4', 10)); //with number of tracks
