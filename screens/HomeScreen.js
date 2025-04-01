import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import Header from '../components/Header'; 
import ItemList from '../components/ItemList'; 

const HomeScreen = () => {
  const popularItems = [
    { id: 1, name: 'Phở', location: 'Nguyễn Phong Sắc', price: '40k' },
    { id: 2, name: 'Bún chả', location: 'Bát Đàn', price: '35k' },
  ];

  const saleOffItems = [
    { id: 1, name: 'Bánh mì', location: 'Hồ Tùng Mậu', price: '20k' },
    { id: 2, name: 'Cơm gà', location: 'Láng Hạ', price: '30k' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Searchbar placeholder="Tìm kiếm món ăn" style={styles.searchBar} />
      <Header title="Top Categories" />
      <View style={styles.categoryContainer}>
        <Button mode="contained" style={styles.categoryButton}>
          Đồ nướng
        </Button>
        <Button mode="contained" style={styles.categoryButton}>
          Đồ lẩu
        </Button>
        <Button mode="contained" style={styles.categoryButton}>
          Buffet
        </Button>
      </View>
      <Header title="Popular Items" />
      <ItemList data={popularItems} />
      <Header title="Sale-off Items" />
      <ItemList data={saleOffItems} />
      <Button mode="outlined" style={styles.viewAllButton}>
        View all
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    marginBottom: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  viewAllButton: {
    marginTop: 8,
  },
});

export default HomeScreen;