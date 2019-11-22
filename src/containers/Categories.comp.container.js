import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-elements';
import HotDealItem from 'smartchef/src/components/HotDealItem';
//actions
import CategoryActions from 'smartchef/src/services/category/category.reducers'
import DishesActions from 'smartchef/src/services/dishes/dishes.reducers';
import NavigationService from 'smartchef/src/navigationService';
const HotDealSection = ({ categories, getCategories, getDishesbyCategory }) => {
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <Card style={{ width: '100%', marginTop: 10 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>CATEGORIAS</Text>
      </View>
      <ScrollView horizontal={true} style={styles.itemContainer}>
        {categories && categories.map((category, index) =>
          <TouchableHighlight onPress={() => {
            getDishesbyCategory(category.key)
            NavigationService.navigate('Dishes')
          }}
            key={category.key}
          >
            <View
              style={(index !== 0) && { marginLeft: 15 }}
            >
              <HotDealItem
                title={category.name}
                imgSrc={category.image_url}
              />
            </View>
          </TouchableHighlight>

        )}
      </ScrollView>
    </Card>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    height: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 12,
    lineHeight: 16,
    color: '#4a4a4a',
    fontWeight: '500',
  },
  itemContainer: {
    marginTop: 11,
    marginLeft: 16,
    marginBottom: 16,
  },
});

const mapStateToProps = state => ({
  categories: state.categories.get('categories')
});

const mapStateToDispatch = dispatch => ({
  getCategories: () => dispatch(CategoryActions.getCategories()),
  getDishesbyCategory: id => dispatch(DishesActions.getDishesByCategory(id)),
});

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(HotDealSection);
