import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem, Input, Button } from "@rneui/themed";
import Ionicons from '@expo/vector-icons/Ionicons';

const listOptions = ["movie", "multi", "tv"];
const SearchResultForm = (props) => {
    const { onSelectChange, onInputChange, onSubmit } = props; // from father component
    // for select
    const [expanded, setExpanded] = useState(false);
    const [option, setOption] = useState("multi"); 
    // for input
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    
    const handleSelect = (item) => {
        setOption(item); 
        setExpanded(false);
        onSelectChange(item); // on this way I get the value in the father component
    };

    return(
        <View style={styles.formContainer}>
            <View style={styles.input}>
                <Text style={styles.lables}>Search Movie/TV Show Name</Text>
                <Input
                    leftIcon={<Ionicons name='search' />}
                    placeholder='i.e. James Bond, CSI'
                    onChangeText={value => onInputChange(value)}
                />
            </View>
            <View><Text style={styles.lables}>Choose Search Type</Text></View>
            <View style={styles.selectButton}>
                <View style={styles.selectInput}>
                    <View>
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
                </View>
                <View style={styles.button}>
                    <Button
                    color="#007e93"
                        onPress={onSubmit}
                        >
                        <Ionicons name='search' size={28} color="#fff" style={{marginRight: 10, fontWeight: "bold"}}/> 
                        Search
                    </Button>
                </View>
            </View>
        </View>
    );
};

export default SearchResultForm;

const styles = StyleSheet.create({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        marginTop: 30
    },
    input: {
        width: '80%',
        fontSize: 6,
    },
    lables: {
        marginBottom: 6,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "left"
    },
    selectButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: "90%"
    },
    selectInput: {
        width: "60%"
    },
    accordionBox: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        fontSize: 6,
    },
  listItemContainer: {
    padding: 0,
    margin: 0,
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
//   listTitle: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   listText: {
//     fontWeight: "bold",
//     color: "#000",
//     marginRight: 40,
//   },
  selectedText: {
    color: "#fff",
  },
  button: {
    // backgroundColor: '#007e93',
    borderRadius: 8,
    padding: 5,
  }
});