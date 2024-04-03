const WelcomeMessage = ({ OnGetPostsClick }) => {
  return (
    <h1 className="welcome">
      <b>There is no posts yet</b>
      <br />
      <br />
      <button
        type="button"
        onClick={OnGetPostsClick}
        className="btn btn-primary"
      >
        Get All The Posts
      </button>
    </h1>
  );
};

export default WelcomeMessage;
