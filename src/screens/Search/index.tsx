import React, { FunctionComponent } from 'react';
import {View} from 'react-native';

import {
  Heading,
  LayoutBase,
  LoadingView,
  NoResults,
  SearchBar,
  WeatherCard,
} from '../../components';
import {LayoutSpacing} from '../../components/layout-base/styles';
import useSearch from '../../core/hooks/use-search';
import {
  TitleWrapper,
  ResultsView,
  ResultTitle,
  ResultValue,
  ResultText,
} from './styles';

const Search: FunctionComponent = () => {
  const {
    error,
    isFocus,
    lastSearches,
    loading,
    results,
    searchValue,
    getLastSearch,
    handleSearch,
    handleSubmit,
    setIsFocus,
  } = useSearch();

  if (error) return <View />;

  return (
    <LayoutBase>
      <LayoutSpacing>
        <View>
          <TitleWrapper>
            <Heading>Search</Heading>
          </TitleWrapper>
          <SearchBar
            isFocus={isFocus}
            searchValue={searchValue}
            handleSearch={handleSearch}
            handleSubmit={handleSubmit}
            setIsFocus={setIsFocus}
          />
        </View>
        <ResultsView>
          {loading && <LoadingView />}
          {!loading && results?.getCityByName && (
            <>
              <ResultTitle>
                <ResultText>Last search</ResultText>
                <ResultValue>{getLastSearch(lastSearches)}</ResultValue>
              </ResultTitle>
              <WeatherCard isFavorite={false} city={results.getCityByName} />
            </>
          )}
          {!loading && results?.getCityByName === null && <NoResults />}
        </ResultsView>
      </LayoutSpacing>
    </LayoutBase>
  );
};

export default Search;
