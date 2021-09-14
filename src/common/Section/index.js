import { useState } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { apiImage, apiKey } from "../commonValues";
import { toMovie, toProfile } from "../routes";
import { StyledLink } from "../StyledLink";
import { MediumTile } from "../Tile/MediumTile";
import { SmallTile } from "../Tile/SmallTile";
import { Arrow, Button, Label } from "../Button";
import { StyledSection, Wrapper } from "./styled";
import { selectAdditionalData } from "../../features/itemSlice";
import { selectList } from "../../features/listSlice";
import { getYearFromDate } from "../../features/getYearFromDate";
import { getGenresNames } from "../../features/getGenresNames";
import noProfile from "../../noProfile.svg";
import noPoster from "../../noPoster.svg";
import downArrowBlue from "./downArrowBlue.svg";
import upArrowBlue from "./upArrowBlue.svg";
import { selectGenresList } from "../commonSlice";

const Section = ({ type, crew }) => {
  const [showMore, setShowMore] = useState(false);
  const resultsPage = useSelector(selectList);
  const additionalData = useSelector(selectAdditionalData);
  const hideIndex = type === "movie" ? 5 : 3;
  const genres = useSelector(selectGenresList);

  let data;
  if (crew) {
    data = additionalData.crew;
  } else {
    data = additionalData.cast;
  }

  let component;
  switch (type) {
    case "movies":
      component = resultsPage.map((movie) => (
        <StyledLink key={nanoid()} to={toMovie({ id: movie.id })}>
          <MediumTile
            key={movie.id}
            src={
              !!movie.poster_path
                ? `${apiImage}/w200${movie.poster_path}?api_key=${apiKey}`
                : noPoster
            }
            title={movie.title}
            subtitle={
              !!movie.release_date ? getYearFromDate(movie.release_date) : ""
            }
            tags={
              !!movie.genre_ids ? getGenresNames(movie.genre_ids, genres) : []
            }
            rating={movie.vote_average}
            votes={movie.vote_count}
          />
        </StyledLink>
      ));
      break;

    case "people":
      component = resultsPage.map((person) => (
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
      ));
      break;

    case "movie":
      component = data.map((person, index) => (
        <StyledLink
          key={nanoid()}
          to={toProfile({ id: person.id })}
          hidden={index > hideIndex && !showMore}
        >
          <SmallTile
            key={person.id}
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
      ));
      break;

    case "profile":
      component = data.map((movie, index) => (
        <StyledLink
          key={nanoid()}
          to={toMovie({ id: movie.id })}
          hidden={index > hideIndex && !showMore}
        >
          <MediumTile
            key={movie.id}
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
                ${movie.release_date ? "(" : ""}${getYearFromDate(
                movie.release_date
              )}${movie.release_date ? ")" : ""}
                `
            }
            tags={!!movie.genre_ids && getGenresNames(movie.genre_ids, genres)}
            rating={movie.vote_average}
            votes={movie.vote_count}
            hidden={index > hideIndex && !showMore}
          />
        </StyledLink>
      ));
      break;

    default:
      break;
  }
  return (
    <Wrapper>
      <StyledSection>{component}</StyledSection>
      {(type === "movie" || type === "profile") &&
        !!data &&
        data.length > hideIndex + 1 && (
          <Button onClick={() => setShowMore(!showMore)}>
            <Label>{showMore ? "Show less" : "Show more"}</Label>
            <Arrow src={showMore ? upArrowBlue : downArrowBlue} alt="arrow" />
          </Button>
        )}
    </Wrapper>
  );
};

export default Section;
