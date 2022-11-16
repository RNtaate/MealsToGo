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
        <List.Accordion
          title="Breakfast"
          left={props => <List.Icon {...props} icon="bread-slice"/>}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict"/>
          <List.Item title="Milk Tea with Toast" />
          <List.Item title="Classic breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={props => <List.Icon {...props} icon="food"/>}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Matooke, Meat, Ground-Nuts"/>
          <List.Item title="Posho, Beans, Silver Fish" />
          <List.Item title="Oluwoombo, Molokoni" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={props => <List.Icon {...props} icon="food-variant"/>}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Rice, Peas, French Beans" />
          <List.Item title="Yams, Sweet Potatoes, Greens" />
          <List.Item title="Local Rolex, Kikomando" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={props => <List.Icon {...props} icon="cup"/>}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Soda" />
          <List.Item title="Passion Fruit Juice" />
          <List.Item title="African Tea" />
        </List.Accordion>      
      </ListScrollView>
    </DetailsView>
  )
}