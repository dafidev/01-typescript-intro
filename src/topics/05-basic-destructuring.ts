
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number; 
}

//Object
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

/*
---Part 1---

const song = 'New Song'; 

const {
    song:anotherSong, 
    songDuration: duartion,
} = audioPlayer;

const {author, year} = audioPlayer.details;

console.log('Song:', anotherSong);
console.log('Song duartion:', duartion);
console.log('Author:', author);
*/

// Part 2, Array
const [,c2, trunks]: string[] = ['Goku','Vegeta','Trunks'];


console.log('Character 3:', trunks);

export{};