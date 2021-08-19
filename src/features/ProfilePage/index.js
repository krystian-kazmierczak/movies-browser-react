import { Container } from "../../common/Container";
import {
  selectLoading,
  selectError,
  resetState,
  fetchItem,
} from "../../features/itemSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { StatusChecker } from "./../../common/StatusChecker/index";
import ProfileDetails from "./ProfileDetails";

const ProfilePage = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();
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
