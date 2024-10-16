import { userName } from "../Parent Components/Parent";

function Child3() {
  return (
    <>
      <userName.Consumer>
        {
          ({ yourName, yourAddress }) => {
            return <h1>Your name is {yourName} and your address is {yourAddress}</h1>;
          }
        }
      </userName.Consumer>
    </>
  );
}

export default Child3;
