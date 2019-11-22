import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Label from 'smartchef/src/components/Label';
import { Colors } from 'smartchef/src/styles/Colors';
import {
  NavigationScreenProps,
  NavigationScreenComponent
} from 'react-navigation';

const Content = styled.View`
  display: flex;
  background-color: #fff;
  flex-direction: row;
  padding: 8px 3px 8px 0px;
`;
const EmptyContainer = styled(Content)`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ImageW = styled.Image`
  height: 75px;
  width: 122px;
`;

const Details = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 6px;
`;
interface Props extends NavigationScreenProps {
  // ... other props
}

const FoodListByCategory: NavigationScreenComponent<Props> = ({ dishes }) => {
  const renderItem = item => {
    return (
      <Content>
        <ImageW source={{ uri: item.img }} />
        <Details>
          <Label
            color={Colors.dark}
            weight={700}
            size={'14px'}
            lineHeight={14}
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            Nombre
          </Label>
          <Label
            color="#4a4a4a"
            weight={700}
            size={'12px'}
            lineHeight={14}
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            {item.name}
          </Label>
          <Label
            color={Colors.dark}
            weight={700}
            size={'14px'}
            lineHeight={14}
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            Descriptión
          </Label>
          <Label
            color="#4a4a4a"
            weight={700}
            size={'12px'}
            lineHeight={14}
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            {item.description}
          </Label>
        </Details>
      </Content>
    );
  };

  return (
    <FlatList
      data={dishes}
      keyExtractor={item => `${item.key}`}
      renderItem={({ item }) => renderItem(item)}
      ListEmptyComponent={(<EmptyContainer>
        <Label
          color="#4a4a4a"
          weight={700}
          size={'16px'}
          lineHeight={16}
          ellipsizeMode="tail"
          numberOfLines={2}
        >
          No hay platos para esta categoria
      </Label></EmptyContainer>)}
    />
  );
};

FoodListByCategory.navigationOptions = {
  title: "Platos"
}

const mapStateToProps = state => ({
  dishes: state.dishes.get('dishes')
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoodListByCategory)
