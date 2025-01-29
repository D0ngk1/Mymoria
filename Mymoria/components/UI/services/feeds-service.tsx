import {Feeds} from "../../../models/feeds";
/*let feeds:Feeds[] =[
    {
        name:        "daryl",
        content:     "Lezgoo!!!!",
        tags:        "Exercise",
        dateCreated: "now",
        favorite:     false,
        image:        '',
    },
    {
        name: "bhadz",
        content: "Sheeeesh!!!!",
        tags: "ChestDay!",
        dateCreated: "now",
        favorite: false,
        image:'',
    },
];*/
const FeedsService = () =>{
    let feeds:Feeds[]=[];

    const getFeeds = () => feeds;
    const addFeed = (feed: Feeds) => feeds.push(feed);
    return {
        getFeeds,
        addFeed,
    };
}
export default FeedsService;


