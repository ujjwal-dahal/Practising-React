import ChildComp from "./ChildComp";

let ParentComp = () => {
  return (
    <>
      <ChildComp>
        <h1>This is Child Component passing though props.children</h1>
      </ChildComp>

      <ChildComp />
    </>
  );
};

export default ParentComp;
