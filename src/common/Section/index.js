import { useState } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { apiImage, apiKey } from "../commonValues";
import { toMovie, toProfile } from "../routes";
import { StyledLink } from "../StyledLink";
import { MediumTile } from "../Tile/MediumTile";
import { SmallTile } from "../Tile/SmallTile";
import { Arrow, Button, Label } from "../Button";
import { StyledSection } from "./styled";
import { selectAdditionalData } from "../../features/itemSlice";
import { selectList } from "../../features/listSlice";
import { getYearFromDate } from "../../features/getYearFromDate";
import { getGenreNames } from "../../features/getGenresNames";
import { genres } from "../../features/genres";
import noProfile from "../../assets/noProfile.svg";
import noPoster from "../../assets/noPoster.svg";
import downArrowBlue from "../../assets/downArrowBlue.svg";
import upArrowBlue from "../../assets/upArrowBlue.svg";

const Section = ({ type, crew }) => {
  const [showMore, setShowMore] = useState(false);
  const resultsPage = useSelector(selectList);
  const additionalData = useSelector(selectAdditionalData);
  const hideIndex = type === "movie" ? 5 : 3;

  let data;
  if (crew) {
    data = additionalData.crew
  } else {
    data = additionalData.cast
  }

  let component;
  switch (type) {
    case "movies":
      component =
        resultsPage.map((movie) => (
          <StyledLink key={nanoid()} to={toMovie({ id: movie.id })}>
            <MediumTile
              key={movie.id}
              src={
                !!movie.poster_path
                  ? `${apiImage}/w200${movie.poster_path}?api_key=${apiKey}`
                  : noPoster
              }
              title={movie.title}
              subtitle={!!movie.release_date ? getYearFromDate(movie.release_date) : ""}
              tags={!!movie.genre_ids ? getGenreNames(movie.genre_ids, genres) : []}
              rating={movie.vote_average}
              votes={movie.vote_count}
            />
          </StyledLink>
        ))
      break;

    case "people":
      component =
        resultsPage.map((person) => (
          <StyledLink key={nanoid()} to={toProfile({ id: person.id })}>
            <SmallTile
              key={person.id}
              src={
                !!person.profile_path
                  ? `${apiImage}/w200${person.profile_path}?api_key=${apiKey}`
                  : noProfile
              }
              title={person.name}
            />
          </StyledLink>
        ))
      break;

    case "movie":
      component =
        data.map((person, index) => (
          <StyledLink key={nanoid()} to={toProfile({ id: person.id })}>
            <SmallTile
              key={nanoid()}
              src={
                !!person.profile_path
                  ? `${apiImage}/w500${person.profile_path}?api_key=${apiKey}`
                  : noProfile
              }
              title={person.name}
              subtitle={crew ? person.job : person.character}
              hidden={index > hideIndex && !showMore}
            />
          </StyledLink>
        ))
      break;

    case "profile":
      component =
        data.map((movie, index) => (
          <StyledLink key={nanoid()} to={toMovie({ id: movie.id })}>
            <MediumTile
              src={
                !!movie.poster_path
                  ? `${apiImage}/w200${movie.poster_path}?api_key=${apiKey}`
                  : noPoster
              }
              title={movie.title}
              subtitle={
                !!movie.release_date &&
                `
                ${crew ? movie.job : movie.character} 
                ${movie.release_date ? "(" : ""}${getYearFromDate(movie.release_date)}${movie.release_date ? ")" : ""}
                `
              }
              tags={!!movie.genre_ids && getGenreNames(movie.genre_ids, genres)}
              rating={movie.vote_average}
              votes={movie.vote_count}
              hidden={index > hideIndex && !showMore}
            />
          </StyledLink>
        ))
      break;
  }
  return (
    <>
      <StyledSection>
        {component}
      </StyledSection>
      {!!data && (data.length > (hideIndex + 1)) && (
        <Button onClick={() => setShowMore(!showMore)}>
          <Label>{showMore ? "Show less" : "Show more"}</Label>
          <Arrow src={showMore ? upArrowBlue : downArrowBlue} alt="arrow" />
        </Button>
      )}
    </>
  );
};

export default Section;