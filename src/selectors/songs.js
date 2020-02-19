// How we parse the data.
import moment from 'moment';

// Get visible songs
const getVisibleSongs = (songs, { text, startDate, endDate }) => {
    return songs.filter((song)=> {
        const createdMoment = moment(song.date);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdMoment, 'day') : true;
        const textMatch = typeof text !== "string" || song.artist.toLowerCase().includes(text.toLowerCase()) || song.songName.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch;
    })
}

export {getVisibleSongs}