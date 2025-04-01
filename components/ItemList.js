import React from 'react';
import { FlatList, Text } from 'react-native';
import { Card, Title } from 'react-native-paper';
import styles from './ItemList.style'; // Import styles từ file ItemList.style.js

const ItemList = ({ data }) => {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.name}</Title>
        <Text>{item.location}</Text>
        <Text>{item.price}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      scrollEnabled={false}
    />
  );
};

export default ItemList;