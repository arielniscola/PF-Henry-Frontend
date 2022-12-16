const UserDashBoard = () => {
  return (
    <>
      <main className="container p-5 mx-auto mt-5 md:w-2/3 lg:w-4/5 md:flex md:justify-around bg-slate-100">
        <div className="my-10 bg-blue-300">
          <h2>My reservations</h2>
        </div>
        <div className="border-4 border-blue-600 rounded-md ">
          <h2>Your tuns</h2>
        </div>
      </main>
    </>
  );
};

export default UserDashBoard;
