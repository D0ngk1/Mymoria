import {Feeds} from "../models/feeds"

const FeedsService = () =>{
    const feeds:Feeds[] =[
        {
            name: "daryl",
            content: "Lezgoo!!!!",
            tags: "Exercise",
            dateCreated: "now",
            favorite: false,
        },
        {
            name: "bhadz",
            content: "Sheeeesh!!!!",
            tags: "ChestDay!",
            dateCreated: "now",
            favorite: false,
        },
    ];

    const getFeeds = () => feeds;
    const addFeed = (feed: Feeds) => feeds.push(feed);
    return {
        getFeeds,
        addFeed,
    };
}
export default FeedsService;


