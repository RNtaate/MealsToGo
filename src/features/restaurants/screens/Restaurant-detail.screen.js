import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { List } from 'react-native-paper';

import RestaurantInfoCard from '../components/Restaurant-info-card.component';

const DetailsView = styled(View)`
  flex: 1;
  padding: ${({theme}) => theme.space[2]};
`;

const ListScrollView = styled(ScrollView)`
  margin-top: ${({theme}) => theme.space[3]}
`;

const ListAccordion = styled(List.Accordion).attrs(props => ({
  titleStyle: {
    fontSize: parseFloat(props.theme.fontSizes.button.split("px")[0]),
    fontFamily: props.theme.fonts.heading
  }
}))``;

const ListItem = styled(List.Item).attrs(props => {
  const itemFontSize = parseFloat(props.theme.fontSizes.caption.split("px")[0])
  return {
    titleStyle: {
      color: props.theme.colors.brand.primary,
      fontSize: itemFontSize,
      fontFamily: props.theme.fonts.monospace
    }
  }
})``;

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  return (
    <DetailsView>
      <RestaurantInfoCard restaurant={ restaurant }/>
        <ListScrollView>
          <ListAccordion
            title="Breakfast"
            left={props => <List.Icon {...props} icon="bread-slice"/>}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <ListItem title="Eggs Benedict"/>
            <ListItem title="Milk Tea with Toast" />
            <ListItem title="Classic breakfast" />
          </ListAccordion>

          <ListAccordion
            title="Lunch"
            left={props => <List.Icon {...props} icon="food"/>}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
          >
            <ListItem title="Matooke, Meat, Ground-Nuts"/>
            <ListItem title="Posho, Beans, Silver Fish" />
            <ListItem title="Oluwoombo, Molokoni" />
          </ListAccordion>

          <ListAccordion
            title="Dinner"
            left={props => <List.Icon {...props} icon="food-variant"/>}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <ListItem title="Rice, Peas, French Beans" />
            <ListItem title="Yams, Sweet Potatoes, Greens" />
            <ListItem title="Local Rolex, Kikomando" />
          </ListAccordion>

          <ListAccordion
            title="Drinks"
            left={props => <List.Icon {...props} icon="cup"/>}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
          >
            <ListItem title="Soda" />
            <ListItem title="Passion Fruit Juice" />
            <ListItem title="African Tea" />
          </ListAccordion>      
        </ListScrollView>
    </DetailsView>
  )
}