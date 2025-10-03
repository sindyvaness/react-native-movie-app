import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem } from "@rneui/themed";
import Ionicons from '@expo/vector-icons/Ionicons';

const listOptions = ["airing_today", "on_the_air", "popular", "top_rated"];
const TvShowsForm = (props) => {
    const { onSelectChange } = props; // from father component
    
    const [expanded, setExpanded] = useState(false);
    const [option, setOption] = useState("popular"); 

    const handleSelect = (item) => {
        setOption(item); 
        setExpanded(false);
        onSelectChange(item); // on this way I get the value in the father component
    };

    return (
        <View style={styles.formContainer}>
            <ListItem.Accordion
                key={"0"}
                content={
                    <ListItem.Content>
                        <ListItem.Title>{option}</ListItem.Title>
                    </ListItem.Content>
                }
                isExpanded={expanded}
                onPress={() => { setExpanded(!expanded)}}
                style={styles.accordionBox}
            >
                {listOptions.map((item, index) => (
                    <ListItem 
                        key={index} 
                        onPress={() => handleSelect(item)}
                        containerStyle={styles.listItemContainer}
                    >
                        <ListItem.Content
                            style={[
                                styles.listContent,
                                option === item && styles.selectedContent,
                            ]}
                        >
                            <ListItem.Title style={styles.listTitle}>
                                <Text
                                    style={[
                                    styles.listText,
                                    option === item && styles.selectedText,
                                    ]}
                                >
                                {item}
                            </Text>
                            <Ionicons name="checkmark" size={28} color="#fff" style={{marginLeft: 30, fontWeight: "bold"}} />
                            </ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </ListItem.Accordion>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginTop: 20
  },
    accordionBox: {
        width: "60%",
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        fontSize: 6,
    },
  listItemContainer: {
    width: "60%",
    alignSelf: "center",
    padding: 0,
    marginRight: 5,
    borderBottomWidth: 0,
  },
  listContent: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
  },
  selectedContent: {
    backgroundColor: "#10776d",
  },
  listTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  listText: {
    fontWeight: "bold",
    color: "#000",
    marginRight: 40,
  },
  selectedText: {
    color: "#fff",
  },
});

export default TvShowsForm;