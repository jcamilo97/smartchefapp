import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Label from 'smartchef/src/components/Label';
import { Colors } from 'smartchef/src/styles/Colors';

const Content = styled.View`
  display: flex;
  background-color: #fff;
  flex-direction: row;
`;

const ImageW = styled.Image`
  height: 75px;
  width: 122px;
`;

const Details = styled.View`
  display: flex;
  flex-direction: column;
`;

const FoodListByCategory = ({ dishes }) => {

  const renderItem = item => {
    return (
      <Content>
        <ImageW source={{ uri: item.img }} />
        <Details>
          <Label
            color={Colors.dark}
            weight={700}
            size={'12px'}
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
            size={'12px'}
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
      keyExtractor={item => item.key}
      renderItem={({ item }) => renderItem(item)}
    />
  );
};

// const mapStateToProps = state => ({
//   sessionData: state.appPersist.get('sessionData')
// })

// const mapDispatchToProps = dispatch => ({
//   logout: user_id => dispatch(AppActions.logout(user_id)),
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AccountScreen)
