/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */

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

export default Cards;
