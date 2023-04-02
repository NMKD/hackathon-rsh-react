import PropTypes from "prop-types";
import Card from "./Card";
import WrapperCards from "./wrapperCards";

const Cards = ({ users }) => {
  return (
    <>
      <WrapperCards>
        {users.map((user) => (
          <Card key={user._id} user={user} />
        ))}
      </WrapperCards>
    </>
  );
};

Cards.propTypes = {
  users: PropTypes.array,
};

export default Cards;
