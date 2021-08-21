import { useState } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { apiImage, apiKey } from "../commonValues";
import { toMovie, toProfile } from "../routes";
import { StyledLink } from "../StyledLink";
import { MediumTile } from "../Tile/MediumTile";
import { SmallTile } from "../Tile/SmallTile";
import { StyledSection } from "./styled";
import { selectAdditionalData } from "../../features/itemSlice";
import { getYearFromDate } from "../../features/getYearFromDate";
import { getGenreNames } from "../../features/getGenresNames";
import { genres } from "../../features/genres";
import { Arrow, Button, Label } from "../Button";
import noProfile from "../../assets/noProfile.svg";
import noPoster from "../../assets/noPoster.svg";
import downArrowBlue from "../../assets/downArrowBlue.svg";
import upArrowBlue from "../../assets/upArrowBlue.svg";


const Section = ({ movieDetails, profileDetails, crew }) => {
  const [showMore, setShowMore] = useState(false);
  const additionalData = useSelector(selectAdditionalData);
  const hideIndex = movieDetails ? 5 : 3;
  let data;
  if (crew) {
    data = additionalData.crew
  } else {
    data = additionalData.cast
  }

  return (
    <>
      <StyledSection>
        {profileDetails && (
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
          )))}
        {movieDetails && (
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
          )))}
      </StyledSection>
      {(data.length > (hideIndex + 1)) && (
        <Button onClick={() => setShowMore(!showMore)}>
          <Label>{showMore ? "Show less" : "Show more"}</Label>
          <Arrow src={showMore ? upArrowBlue : downArrowBlue} alt="arrow" />
        </Button>
      )}
    </>
  );
};

export default Section;