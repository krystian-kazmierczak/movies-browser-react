import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "../../common/Container";
import { StatusChecker } from "./../../common/StatusChecker/index";
import ProfileDetails from "./ProfileDetails";
import {
  selectLoading,
  selectError,
  resetState,
  fetchItem,
} from "../../features/itemSlice";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchItem({ id, type: "person" }));

    return () => resetState();
  }, [id, dispatch]);

  return (
    <Container>
      <StatusChecker isLoading={isLoading} isError={isError}>
        <ProfileDetails />
      </StatusChecker>
    </Container>
  );
};

export default ProfilePage;
