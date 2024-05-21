import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';

export default function HomeScreen() {
  return (
     <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>.doc</Text>
	    <FontAwesome name='circle-user' size={30} color="#fff" />
	  </View> 
          <View style={styles.topHeader}>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Recent</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Starred</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <View style={styles.listItemContainer}>
              <View>
                <Text style={styles.itemTitle}>sample pdf title</Text>
                <Text style={styles.itemSubTitle}>sample pdf sub title</Text>
              </View>
            </View>
          </View>
        </View>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 14,
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        color: '#fff',
        flexGrow: 1,        
    },
    topHeader: {
        flexDirection: 'row',
        width: 'auto',
        marginTop: 10,
        padding: 2,
        gap: 5,
    },
    tab: {
        width: 'auto',
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 10,
    },
    tabText: {
        fontSize: 16,
        fontWeight: '400',
    },
    content: {
        paddingTop: 20,
    },
    listItemContainer: {
        flexDirection: 'row'
    },
    itemTitle: {
        fontSize: 20,
        color: '#fff'
    },
    itemSubTitle: {
        fontSize: 14,
        color: '#e0ffff'
    },
});
