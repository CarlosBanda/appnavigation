import React from "react";
import { Button, Text, View } from "react-native";

const Pagina1 = ({navigation}) => {
    return ( 
        <View>
            <Text>PAGINA 1</Text>
            <Button title="pagina 2" onPress={navigation.navigate('Pagina2')}/>
        </View>
     );
}
 
export default Pagina1;