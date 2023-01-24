export const IconUi = ({ name, cl }) => {
  return (
    <>
      <img
        className={cl}
        src={window.location.origin + `/image/${name}.svg`}
        alt={name}
      />
    </>
  );
};
