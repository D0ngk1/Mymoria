import MyTask from "../../components/UI/myTask";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import FeedsService from "../../services/feeds-service";
import { useEffect, useState } from "react";
import { Feeds } from "../../models/feeds";

const MyFeed = () =>{
    const [feeds, setFeeds] = useState<Feeds[]>([]);
    const feedService = FeedsService();

    useEffect(() => {
        // Call the feed service once when the component mounts
        setFeeds(feedService.getFeeds());
        console.log(feeds.length);
    }, []);
    return (
        <ScrollView>
          <MyTask/>
            {
                feeds.map((feed)=>(
                <TouchableOpacity onPress = { ()=> alert (feed.name) } key={feed.content}>
                    <View style={styles.viewVertical}  key={feed.content}>
                        <Text>{feed.name}</Text>
                        <Text>{feed.content}</Text>
                        <Text>{feed.tags}</Text>
                        <Text>{feed.image}</Text>
                    </View>
                </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}
export default MyFeed;

const styles = StyleSheet.create({
    viewVertical:{
        borderWidth:1,
        height:450,
        padding:10,
    },
})


