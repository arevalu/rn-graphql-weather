import React, {useContext, useState} from 'react';
import {ThemeContext} from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

import {
  TopBar,
  BackButton,
  TopBarContent,
  CityName,
  DateInfo,
  ActionButton,
} from './HeaderDetail.styles';
import {AppContext} from '../../../Context/AppContext/AppContext';
import {CityDetail} from '../../../graphql/interfaces';
import {formatUnixToDate} from '../../../utils/weatherDetails';

import BackArrow from '../../../assets/svg/left-arrow.svg';
import FavoriteStar from '../../../assets/svg/favorite-star.svg';
import AddSvg from '../../../assets/svg/add.svg';
import {saveStorage} from '../../../utils/asyncStorage';
import { FAV_CITIES_STORE, CITIES_STORE } from '../../../utils/constants';

const HeaderDetail = ({city}: {city: CityDetail}) => {
  const navigation = useNavigation();
  const {colors} = useContext(ThemeContext);
  const {
    cities,
    favoriteCities,
    theme,
    addCity,
    addFavoriteCity,
    updateFavorites,
  } = useContext(AppContext);

  const isSavedCity = cities.includes(city.id);
  const isFavoriteCity = favoriteCities.includes(city.id);
  const date = formatUnixToDate(city.weather.timestamp);

  const handleActions = (cityId: string) => {
    if (!isSavedCity) {
      addCity(cityId);
      saveStorage({
        key: CITIES_STORE,
        item: [...cities, cityId],
      });
      return;
    }

    if (!isFavoriteCity) {
      addFavoriteCity(cityId);
      saveStorage({
        key: FAV_CITIES_STORE,
        item: [...favoriteCities, cityId],
      });
      return;
    } else {
      const filtered = favoriteCities.filter(
        (favCity: string) => favCity !== city.id,
      );
      updateFavorites(filtered);
      saveStorage({
        key: FAV_CITIES_STORE,
        item: filtered,
      });
      return;
    }
  };

  console.log('WD', isFavoriteCity);

  return (
    <TopBar>
      <BackButton onPress={() => navigation.goBack()}>
        <BackArrow
          height="100%"
          width="100%"
          fill={theme === 'light' ? colors.primary : colors.white}
        />
      </BackButton>
      <TopBarContent>
        <View>
          <CityName>
            {city.name}, {city.country}
          </CityName>
          <DateInfo>{date}</DateInfo>
        </View>
        <ActionButton
          onPress={() => handleActions(city.id)}
          isSaved={isSavedCity}
          isFavorite={isFavoriteCity}>
          {!isSavedCity && (
            <AddSvg height="100%" width="100%" fill={colors.white} />
          )}
          {isSavedCity && (
            <FavoriteStar
              height="100%"
              width="100%"
              fill={isFavoriteCity ? colors.white : colors.gray4}
            />
          )}
        </ActionButton>
      </TopBarContent>
    </TopBar>
  );
};

export default HeaderDetail;
